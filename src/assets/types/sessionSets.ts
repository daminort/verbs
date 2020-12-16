import { IrregularVerb, PhrasalVerb } from './verbs';

/* Irregular */
export type IrregularRuEnSet = Array<IrregularVerb>;

export type IrregularEnRuItem = {
  key: string;
  verb: string;
  variant1: string;
  variant2: string;
  variant3: string;
  origin: IrregularVerb;
};
export type IrregularEnRuSet = Array<IrregularEnRuItem>;

/* Phrasal */
export type PhrasalRuEnSet = Array<PhrasalVerb>;

export type PhrasalEnRuItem = {
  key: string;
  verb: string;
  variant1: string;
  variant2: string;
  variant3: string;
  origin: PhrasalVerb;
};
export type PhrasalEnRuSet = Array<PhrasalEnRuItem>;
