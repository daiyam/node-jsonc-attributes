import { State, StateType } from '../types/state';
import { indent } from '../utils/indent';

export function directive(condition: boolean, input: string[], line: number, output: string[], stack: State[]): number {
	output.push(input[line]);

	stack.unshift({
		type: StateType.IF,
		value: condition && stack[0].value,
		indent: indent(input[line]),
		rewrite: stack[0].rewrite,
	});

	return line + 1;
}

directive.isConditional = true;
