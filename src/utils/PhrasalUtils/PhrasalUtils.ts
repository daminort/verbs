import { PhrasalVerb, PhrasalVerbs } from '../../assets/types/verbs';
import { PhrasalEnRuSet, PhrasalRuEnSet } from '../../assets/types/sessionSets';
import { DividedSet } from '../PhrasalUtils/types';
import { phrasalVerbs } from '../../verbs/phrasal';
import { CommonUtils } from '../CommonUtils/CommonUtils';

class PhrasalUtils {
  static createDividedSet(debt: string[] = [], excludes: string[] = [], userSet: PhrasalVerbs = []): DividedSet {
    const debtVerbs: PhrasalVerbs = [];
    const sessionVerbs: PhrasalVerbs = [];

    for (const verb of phrasalVerbs) {
      const isExcluded = excludes.includes(verb.key);
      if (isExcluded) {
        continue;
      }

      const isDebt = debt.includes(verb.key);
      if (isDebt) {
        debtVerbs.push(verb);
      } else {
        sessionVerbs.push(verb);
      }
    }

    for (const verb of userSet) {
      const isExcluded = excludes.includes(verb.key);
      if (isExcluded) {
        continue;
      }

      const isDebt = debt.includes(verb.key);
      if (isDebt) {
        debtVerbs.push(verb);
      } else {
        sessionVerbs.push(verb);
      }
    }

    return {
      debtVerbs: CommonUtils.shuffle<PhrasalVerb>(debtVerbs),
      sessionVerbs: CommonUtils.shuffle<PhrasalVerb>(sessionVerbs),
    };
  }

  static createRuEnSessionSet(
    debt: Array<string> = [],
    excludes: Array<string> = [],
    userSet: PhrasalVerbs = []
  ): PhrasalRuEnSet {
    // const { debtVerbs, sessionVerbs } = PhrasalUtils.createDividedSet(debt, excludes, userSet);

    const res: PhrasalRuEnSet = [];
    return res;
  }

  static createEnRuSessionSet(debt: Array<string>, excludes: Array<string>, userSet: PhrasalVerbs): PhrasalEnRuSet {
    // TODO
    const res: PhrasalEnRuSet = [];
    return res;
  }
}

export default PhrasalUtils;
export { PhrasalUtils };
