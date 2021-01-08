#!/usr/bin/env node
import yargs from 'yargs-parser';
import chalk from 'chalk';
import * as path from 'path';
import { generateFiles } from '../index';
import { error, success } from '../lib/log-helper';

try {
  const { dir, target, targetName, targetModelName, help } = yargs(
    process.argv.slice(2)
  );
  const filePath = path.resolve(process.cwd(), process.argv[2]);
  const targetPath = path.resolve(process.cwd(), target || './');
  const { length } = filePath.split('/');
  const fileName = filePath.split('/')[length - 1].split('.')[0];
  if (
    generateFiles(
      filePath,
      targetPath,
      targetName || `${fileName}-const.ts`,
      targetModelName || `${fileName}-model.ts`
    )
  )
    success('Successfully generated files');
} catch (e) {
  error(e);
}
