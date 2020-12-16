export interface IrregularVerb {
  key: string;
  infinitive: string;
  pastSimple: string;
  pastParticipant: string;
  translation: string;
}

export type IrregularVerbs = Array<IrregularVerb>;

export interface PhrasalVerb {
  key: string;
  verb: string;
  preposition: string;
  meaning: string;
  translation: string;
  examples: Array<string>;
}

export type PhrasalVerbs = Array<PhrasalVerb>;
