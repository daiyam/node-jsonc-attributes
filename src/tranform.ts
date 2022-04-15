import { directives } from './directives';
import { Directive } from './types/directive';
import { State, StateType } from './types/state';
import { comment } from './utils/comment';
import { condition } from './utils/condition';
import { uncomment } from './utils/uncomment';

const DIRECTIVE_REGEX = /^\s*\/\/\s*#([a-z-]+)\b\s*((\()?.*)$/i;

export function transform(input: string, types: Record<string, string>, args: Record<string, string>, rootState: boolean): string {
	const lines = input.split(/\r?\n/);
	const length = lines.length;

	// console.log(lines)

	const output: string[] = [];
	const stack: State[] = [{ type: StateType.ROOT, value: rootState, indent: '', rewrite: false }];
	let i = 0;

	while(i < length) {
		const line = lines[i];
		const match = DIRECTIVE_REGEX.exec(line);

		if(match) {
			const directive = directives[match[1]] as Directive;

			if(directive) {
				const value = rootState && (directive.isConditional ? condition(match, types, args) : true);

				i = directive(value, lines, i, output, stack, args);
			}
			else {
				output.push(line);
				++i;
			}

			continue;
		}

		if(stack.length === 1) {
			output.push(line);
			++i;
		}
		else if(stack[0].value) {
			i = uncomment(lines, i, output, stack[0].rewrite, args);
		}
		else {
			i = comment(lines, i, stack[0].indent, output);
		}
	}

	// console.log(output)

	return output.join('\n');
}
