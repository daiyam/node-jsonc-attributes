import { State } from '../types/state';
import { comment } from '../utils/comment';
import { indent } from '../utils/indent';
import { skipComments } from '../utils/skip-comments';
import { uncomment } from '../utils/uncomment';

export function enable(condition: boolean, input: string[], line: number, output: string[], stack: State[]): number {
	const directive = input[line];

	output.push(input[line]);

	line = skipComments(input, line + 1, output);

	if(condition && stack[0].value) {
		line = uncomment(input, line, output);
	}
	else {
		line = comment(input, line, indent(directive), output);
	}

	return line;
}
