const TRUE_COMMENT_REGEX = /^\s*\/\/(?!\s*(?:[#[\]{}"\d]|true|false))/i;

export function skipComments(input: string[], line: number, output: string[]): number {
	while(TRUE_COMMENT_REGEX.test(input[line])) {
		output.push(input[line]);

		++line;
	}

	return line;
}
