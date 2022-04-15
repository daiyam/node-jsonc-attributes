import { State, StateType } from '../types/state';
import { indent } from '../utils/indent';

export function rewriteEnable(condition: boolean, input: string[], line: number, output: string[], stack: State[]): number {
	output.push(input[line]);

	stack.unshift({
		type: StateType.REWRITE,
		value: stack[0].value,
		indent: indent(input[line]),
		rewrite: true,
	});

	return line + 1;
}
