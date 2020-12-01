import { IrregularVerbs, IrregularVerb } from '../../assets/types/verbs';
import { IrregularRuEnItem, IrregularRuEnSet } from '../../assets/types/sessionSets';
import { GenericMap, HashMap } from '../../assets/types/common';
import { Status } from '../../assets/types/input';

import { irregularVerbs } from '../../verbs/irregular';
import { CommonUtils } from '../CommonUtils';
import {
  DividedRuEnSet,
  ValuesRuEn,
  ValidationResult,
  ValidationRuEn,
} from './types';

class IrregularUtils {

  static createDividedRuEnSet(
    debts: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = [],
  ): DividedRuEnSet {

    const debtVerbs: IrregularRuEnSet = [];
    const sessionVerbs: IrregularRuEnSet = [];

    for (let verb of irregularVerbs) {
      const isExcluded = excludes.includes(verb.key);
      if (isExcluded) {
        continue;
      }

      const isDebt = debts.includes(verb.key);
      if (isDebt) {
        debtVerbs.push(verb);

      } else {
        sessionVerbs.push(verb);
      }
    }

    for (let verb of userSet) {
      const isExcluded = excludes.includes(verb.key);
      if (isExcluded) {
        continue;
      }

      const isDebt = debts.includes(verb.key);
      if (isDebt) {
        debtVerbs.push(verb);

      } else {
        sessionVerbs.push(verb);
      }
    }

    return {
      debtVerbs: CommonUtils.shuffle<IrregularRuEnItem>(debtVerbs),
      sessionVerbs: CommonUtils.shuffle<IrregularRuEnItem>(sessionVerbs),
    };
  }

  static createRuEnSessionSet(
    debts: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = [],
  ): IrregularRuEnSet {

    const { debtVerbs, sessionVerbs } = IrregularUtils.createDividedRuEnSet(debts, excludes, userSet);
    const result: IrregularRuEnSet = [...debtVerbs, ...sessionVerbs];

    return result;
  }

  static validate(origin: string, value: string): ValidationResult {
    const lowOrigin = origin.toLowerCase();
    const lowValue = value.toLowerCase();

    const status = lowOrigin === lowValue ? 'success' : 'error';

    return {
      status,
      error: lowOrigin,
    }
  }

  static validateRuEn(origin: IrregularVerb, values: ValuesRuEn): ValidationRuEn {

    const status: GenericMap<Status> = {};
    const errors: HashMap = {};

    const infinitiveRes = IrregularUtils.validate(origin.infinitive, values.infinitive);
    const pastSimpleRes = IrregularUtils.validate(origin.pastSimple, values.pastSimple);
    const pastParticipleRes = IrregularUtils.validate(origin.pastParticipant, values.pastParticipant);

    status.infinitive = infinitiveRes.status;
    status.pastSimple = pastSimpleRes.status;
    status.pastParticipant = pastParticipleRes.status;

    errors.infinitive = infinitiveRes.error;
    errors.pastSimple = pastSimpleRes.error;
    errors.pastParticipant = pastParticipleRes.error;

    const result: ValidationRuEn = {
      status,
      errors,
    }

    return result;
  }
};

export default IrregularUtils;
export { IrregularUtils };
