import { IrregularVerbs } from '../../assets/types/verbs';
import { IrregularEnRuSet, IrregularRuEnSet } from '../../assets/types/sessionSets';
import { StorageKeys } from '../../assets/enums/storage';

import { StorageUtils } from '../../utils/StorageUtils';
import { IrregularUtils } from '../../utils/IrregularUtils';

type StoredData = [Array<string>, Array<string>, IrregularVerbs];

class IrregularService {
  constructor() {
    this.loadDebt = this.loadDebt.bind(this);
    this.loadExcludes = this.loadExcludes.bind(this);
    this.loadUserSet = this.loadUserSet.bind(this);
    this.loadStoredData = this.loadStoredData.bind(this);
    this.loadRuEn = this.loadRuEn.bind(this);
    this.loadEnRu = this.loadEnRu.bind(this);
    this.saveDebt = this.saveDebt.bind(this);
  }

  async loadDebt(): Promise<Array<string>> {
    return StorageUtils.read<Array<string>>(StorageKeys.irregularDebt, []);
  }

  async loadExcludes(): Promise<Array<string>> {
    return StorageUtils.read<Array<string>>(StorageKeys.irregularExcludes, []);
  }

  async loadUserSet(): Promise<IrregularVerbs> {
    return StorageUtils.read<IrregularVerbs>(StorageKeys.irregularUserSet, []);
  }

  async loadStoredData(): Promise<StoredData> {
    return await Promise.all([this.loadDebt(), this.loadExcludes(), this.loadUserSet()]);
  }

  async loadRuEn(): Promise<IrregularRuEnSet> {
    const [debt, excludes, userSet] = await this.loadStoredData();
    const sessionSet: IrregularRuEnSet = IrregularUtils.createRuEnSessionSet(debt, excludes, userSet);

    return Promise.resolve(sessionSet);
  }

  async loadEnRu(): Promise<IrregularEnRuSet> {
    const [debt, excludes, userSet] = await this.loadStoredData();
    const sessionSet: IrregularEnRuSet = IrregularUtils.createEnRuSessionSet(debt, excludes, userSet);

    return Promise.resolve(sessionSet);
  }

  async saveDebt(debt: Array<string>): Promise<void> {
    StorageUtils.write<Array<string>>(StorageKeys.irregularDebt, debt);
  }
}

const Service = new IrregularService();

export default Service;
export { Service as IrregularService };
