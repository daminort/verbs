import { IrregularVerbs, IrregularVerb } from '../../assets/types/verbs';
import { irregularVerbs } from '../../verbs/irregular';
import { CommonUtils } from '../CommonUtils';

class IrregularUtils {

  static createDividedSet(
    debts: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = [],
  ) {

    const debtVerbs = [];
    const sessionVerbs = [];

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
      debtVerbs: CommonUtils.shuffle<IrregularVerb>(debtVerbs),
      sessionVerbs: CommonUtils.shuffle<IrregularVerb>(sessionVerbs),
    };
  }

  static createSessionSet(
    debts: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = [],
  ): IrregularVerbs {

    const { debtVerbs, sessionVerbs } = IrregularUtils.createDividedSet(debts, excludes, userSet);

    return [...debtVerbs, ...sessionVerbs];
  }
};

export default IrregularUtils;
export { IrregularUtils };
