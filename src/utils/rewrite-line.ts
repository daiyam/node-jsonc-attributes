const VARIABLE_REGEX = /#{([_a-z]\w*)}/gi;

export function rewriteLine(line: string, args: Record<string, string>): string {
	let match: RegExpMatchArray | null = VARIABLE_REGEX.exec(line);

	if(match) {
		let result = '';
		let index = 0;

		while(match) {
			result += line.slice(index, match.index);

			const value = args[match[1]];
			if(typeof value === 'string') {
				result += value;
			}

			index = match.index! + match[0].length;
			match = VARIABLE_REGEX.exec(line);
		}

		result += line.slice(index);

		return result;
	}
	else {
		return line;
	}
}
