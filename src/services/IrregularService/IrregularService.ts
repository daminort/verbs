import { IrregularVerbs } from '../../assets/types/verbs';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { StorageKeys } from '../../assets/enums/storage';

import { StorageUtils } from '../../utils/StorageUtils';
import { IrregularUtils } from '../../utils/IrregularUtils';

class IrregularService {
  async loadRuEn(): Promise<IrregularRuEnSet> {
    const debt: Array<string> = StorageUtils.read<Array<string>>(StorageKeys.irregularDebt, []);
    const excludes: Array<string> = StorageUtils.read<Array<string>>(StorageKeys.irregularExcludes, []);
    const userSet: IrregularVerbs = StorageUtils.read<IrregularVerbs>(StorageKeys.irregularExcludes, []);

    const sessionSet: IrregularRuEnSet = IrregularUtils.createRuEnSessionSet(debt, excludes, userSet);

    return Promise.resolve(sessionSet);
  }

  async saveDebtRuEn(debt: Array<string>): Promise<void> {
    StorageUtils.write<Array<string>>(StorageKeys.irregularDebt, debt);
  }
}

const Service = new IrregularService();

export default Service;
export { Service as IrregularService };
