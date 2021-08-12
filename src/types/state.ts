export enum StateType {
	ELSE = 'else',
	ELSE_IF = 'else-if',
	IF = 'if',
	ROOT = 'root',
}

export interface State {
	indent: string;
	type: StateType;
	value: boolean;
}
