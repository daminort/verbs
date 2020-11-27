import { IrregularVerbs } from '../../assets/types/verbs';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { StorageKeys } from '../../assets/enums/storage';

import { StorageUtils } from '../../utils/StorageUtils';
import { IrregularUtils } from '../../utils/IrregularUtils';

class IrregularService {

  async loadRuEn(): Promise<IrregularRuEnSet> {

    const debts: string[] = StorageUtils.read<string[]>(StorageKeys.irregularDebt, []);
    const excludes: string[] = StorageUtils.read<string[]>(StorageKeys.irregularExcludes, []);
    const userSet: IrregularVerbs = StorageUtils.read<IrregularVerbs>(StorageKeys.irregularExcludes, []);

    const sessionSet: IrregularRuEnSet = IrregularUtils.createRuEnSessionSet(debts, excludes, userSet);

    return Promise.resolve(sessionSet);
  }
}

const Service = new IrregularService();

export default Service;
export { Service as IrregularService };
