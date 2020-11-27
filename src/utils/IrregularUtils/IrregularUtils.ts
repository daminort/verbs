import { IrregularVerbs, IrregularVerb } from '../../assets/types/verbs';
import { IrregularRuEnItem, IrregularRuEnSet } from '../../assets/types/sessionSets';
import { irregularVerbs } from '../../verbs/irregular';
import { CommonUtils } from '../CommonUtils';

interface DividedRuEnSet {
  debtVerbs: IrregularRuEnSet,
  sessionVerbs: IrregularRuEnSet,
};

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
};

export default IrregularUtils;
export { IrregularUtils };
