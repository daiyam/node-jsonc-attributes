export enum StateType {
	ELSE = 'else',
	ELSE_IF = 'else-if',
	IF = 'if',
	REWRITE = 'rewrite',
	ROOT = 'root',
}

export interface State {
	indent: string;
	rewrite: boolean;
	type: StateType;
	value: boolean;
}
