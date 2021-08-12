const INDENT_REGEX = /^(\s*)\/\//;

export function indent(line: string): string {
	const match = INDENT_REGEX.exec(line);
	if(match) {
		return match[1];
	}
	else {
		return '';
	}
}
