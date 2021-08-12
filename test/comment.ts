import path from 'path';
import fs from 'fs';
import yaml from 'yaml';
import { expect } from 'chai';
import globby from 'globby';
import { comment } from '..';

describe('comment', () => {
	function prepare(file: string) {
		const name = path.basename(file).slice(0, path.basename(file).lastIndexOf('.'));
		const data = yaml.parse(fs.readFileSync(file, 'utf-8')) as { input: string; output: string };

		it(`${name}`, () => {
			const result = comment(data.input);

			expect(result).to.eql(data.output);
		});
	}

	const files = globby.sync('test/fixtures/comment/*.yml');

	for(const file of files) {
		prepare(file);
	}
});
