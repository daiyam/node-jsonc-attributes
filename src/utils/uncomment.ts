import { matchEndOfValue } from './match-end-of-value';

const UNCOMMENT_REGEX = /^(\s*)(?:\/\/\s?)?(.*)$/;

export function uncomment(input: string[], line: number, output: string[]): number {
	const endOfValue = matchEndOfValue(input, line);

	while(line <= endOfValue) {
		output.push(uncommentLine(input[line]));

		++line;
	}

	return endOfValue + 1;
}

function uncommentLine(line: string): string {
	const match = UNCOMMENT_REGEX.exec(line);
	if(match) {
		return match[1] + match[2];
	}
	else {
		return line;
	}
}
