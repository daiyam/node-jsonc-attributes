import { elif } from './elif';
import { directive as elseDirective } from './else';
import { enable } from './enable';
import { endif } from './endif';
import { directive as ifDirective } from './if';
import { ignore } from './ignore';
import { rewriteDisable } from './rewrite-disable';
import { rewriteEnable } from './rewrite-enable';
import { rewriteLine } from './rewrite-line';

export const directives = {
	else: elseDirective,
	elif,
	enable,
	endif,
	if: ifDirective,
	ignore,
	'rewrite-disable': rewriteDisable,
	'rewrite-enable': rewriteEnable,
	'rewrite-next-line': rewriteLine,
};
