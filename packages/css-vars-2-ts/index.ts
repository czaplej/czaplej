import * as fs from 'fs';
import * as util from 'util';
import JsonToTS from "json-to-ts";
import chalk from 'chalk';
import * as path from 'path';
import sass from 'node-sass';

// special regex get from string all between curly brackets and between brackets FE: [data-theme=light] {...}
const regex = /\[.*?\] {([^}]+)}/g;
const regexGetCSSvariables = /--(.*)/g;
const getThemeNameRegex = /\[(.*)]/g;

const {log} = console, error = (message:string)=> log(chalk.red(message));


export function generateFiles(filePath: string, targetPath: string, targetName = './generatedFile.ts', targetModelName = './generatedFileModel.ts'): boolean {
  const styles = sass.renderSync({ file: filePath }).css.toString();
  let result = {};
  const themes = styles.match(regex);
  for (const theme of themes) {
    const themeObject = {};
    const nameOfTheme = theme
      .match(getThemeNameRegex)[0]
      .replace('[', '')
      .replace(']', '')
      .split('=')[1].replace('"', '').replace('"', '');
    const vars = theme
      .match(regexGetCSSvariables)
      .map((x) => x.split(':')[0]);
    themeObject[nameOfTheme] = {};
    generateVariablesObject(themeObject[nameOfTheme], vars);
    result = { ...result, [nameOfTheme]: themeObject[nameOfTheme] };
  }

  const [constTsFilePath, modelTsFilePath] = [path.resolve(targetPath, targetName), path.resolve(targetPath, targetModelName)];
  const [tmpconstTsFile, tmpmodelTsFile] = [createTempFile(constTsFilePath), createTempFile(modelTsFilePath)];

  // Generate out files
  fs.writeFile(
    constTsFilePath,
    `export const themes = ${util.inspect(result)}`, { encoding: 'utf8' }, (err) => {
      if(err){
        error(err.message);
        return false
      }
    }
  );
  fs.writeFile(
    modelTsFilePath,
    JsonToTS(result).map(x => x.replace('RootObject', 'Themes').replace('interface', 'export interface')).join('\n'),
    { encoding: 'utf8' }, err => {
      if(err){
        error(err.message);
        //Rollback previous file
        fs.writeFileSync(constTsFilePath, tmpconstTsFile)
        return false
      }
    }
  );
  return true
}

function createTempFile(filePath:string) {
  if(fs.existsSync(filePath)){
    return fs.readFileSync(filePath)
  }
return undefined;
}

function generateVariablesObject<T extends unknown>(obj: T, vars: string[]) {
  for (const var1 of vars) {
    const [objectName, ...rest] = var1
      .replace("-", "")
      .replace("-", "")
      .split("-");
    const [first, ...capitalize] = rest;
    const capitalizedArr = capitalize.map((x) => capitalizeFirstLetter(x));
    const valueName = [first, ...capitalizedArr].join("");
    if (obj[objectName] !== undefined) {
        obj[objectName] = { ...obj[objectName], [valueName]: `var(${var1})` };
    } else {
      if(!first){
        obj[objectName] = `var(${var1})`;
      }else{
        obj[objectName] = { [valueName]: `var(${var1})` };
      }
    }
  }
}
function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}
