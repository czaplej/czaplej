#!/usr/bin/env node
import yargs from 'yargs-parser';
import * as path from 'path';
import { generateFiles } from '../lib/generate-files';
import { error, success } from '../lib/log-helper';
import { checkHelpArg } from '../lib/check-help-arg';

try {
  const { target, modelTarget, targetName, targetModelName, help } = yargs(
    process.argv.slice(2)
  );
  checkHelpArg(help);
  const filePath = path.resolve(process.cwd(), process.argv[2]);
  const [targetPath, modelTargetPath] = [
    path.resolve(process.cwd(), target || './'),
    path.resolve(process.cwd(), modelTarget || target || './'),
  ];
  const { length } = filePath.split('/');
  const fileName = filePath.split('/')[length - 1].split('.')[0];
  generateFiles(
    filePath,
    targetPath,
    modelTargetPath,
    targetName || `${fileName}-const.ts`,
    targetModelName || `${fileName}-model.ts`
  );
  success('Successfully generated files');
} catch (e) {
  error(e);
}
