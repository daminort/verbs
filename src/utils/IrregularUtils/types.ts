import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { GenericMap, HashMap } from '../../assets/types/common';
import { Status } from '../../assets/types/input';

export interface DividedRuEnSet {
  debtVerbs: IrregularRuEnSet,
  sessionVerbs: IrregularRuEnSet,
};

export interface ValuesRuEn {
  infinitive: string;
  pastSimple: string;
  pastParticipant: string;
};

export interface ValidationResult {
  status: Status,
  error: string,
}

export interface ValidationRuEn {
  status: GenericMap<Status>,
  errors: HashMap,
};
