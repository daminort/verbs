import { IrregularVerb } from './verbs';

export type IrregularRuEnItem = IrregularVerb;
export type IrregularRuEnSet = Array<IrregularVerb>;

export type IrregularEnRuItem = {
  key: string;
  verb: string;
  variant1: string;
  variant2: string;
  variant3: string;
};
export type IrregularEnRuSet = Array<IrregularEnRuItem>;
