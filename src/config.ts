import packageJSON from '../package.json';
import { Config } from './assets/types/config';

export const config: Config = {
  publicURL: process.env.PUBLIC_URL,
  version: packageJSON.version,
  author: 'Demien',
  sourceURL: 'https://github.com/daminort/verbs',
};
