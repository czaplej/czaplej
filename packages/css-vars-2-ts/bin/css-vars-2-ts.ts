#!/usr/bin/env node
import yargs from 'yargs-parser';
import chalk from 'chalk';
import * as path from 'path';
import { generateFiles } from '../index';

const { log } = console;
try {
  const { dir, target, targetName, targetModelName } = yargs(process.argv.slice(2));
  const filePath = path.resolve(process.cwd(), process.argv[2]);
  const targetPath = path.resolve(process.cwd(), target || './');
  const { length } = filePath.split('/');
  const fileName = filePath.split('/')[length - 1].split('.')[0];
  if (generateFiles(filePath, targetPath, targetName || `${fileName}-const.ts`, targetModelName || `${fileName}-model.ts`))
    log(chalk.green('Successfully generated files'));
} catch (e) {
  log(chalk.red(e));
}
