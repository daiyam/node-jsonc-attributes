import { State } from './state';

export interface Directive {
	(condition: boolean, input: string[], line: number, output: string[], stack: State[], args: Record<string, string>): number;
	isConditional: boolean;
}
