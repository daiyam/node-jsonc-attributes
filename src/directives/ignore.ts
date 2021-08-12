import { State } from '../types/state';
import { matchEndOfValue } from '../utils/match-end-of-value';
import { skipComments } from '../utils/skip-comments';

export function ignore(_condition: boolean, input: string[], line: number, _output: string[], _stack: State[]): number {
	line = skipComments(input, line + 1, []);

	const endOfValue = matchEndOfValue(input, line);

	return endOfValue + 1;
}
