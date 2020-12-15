import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { GenericMap, HashMap } from '../../assets/types/common';
import { Status } from '../../assets/types/input';
import { IrregularVerbs } from '../../assets/types/verbs';

export interface DividedSet {
  debtVerbs: IrregularVerbs;
  sessionVerbs: IrregularVerbs;
}

export interface ValuesRuEn {
  infinitive: string;
  pastSimple: string;
  pastParticipant: string;
}

export interface ValidationResult {
  status: Status;
  error: string;
}

export interface ValidationRuEn {
  status: GenericMap<Status>;
  errors: HashMap;
}

export interface ValidationEnRu {
  status: GenericMap<Status>;
}
