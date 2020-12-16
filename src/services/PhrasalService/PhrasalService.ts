import { PhrasalVerbs } from '../../assets/types/verbs';
import { PhrasalEnRuSet, PhrasalRuEnSet } from '../../assets/types/sessionSets';
import { StorageKeys } from '../../assets/enums/storage';

import { StorageUtils } from '../../utils/StorageUtils';
import { PhrasalUtils } from '../../utils/PhrasalUtils';

type StoredData = [Array<string>, Array<string>, PhrasalVerbs];

class PhrasalService {
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
    return StorageUtils.read<Array<string>>(StorageKeys.phrasalDebt, []);
  }

  async loadExcludes(): Promise<Array<string>> {
    return StorageUtils.read<Array<string>>(StorageKeys.phrasalExcludes, []);
  }

  async loadUserSet(): Promise<PhrasalVerbs> {
    return StorageUtils.read<PhrasalVerbs>(StorageKeys.phrasalUserSet, []);
  }

  async loadStoredData(): Promise<StoredData> {
    return await Promise.all([this.loadDebt(), this.loadExcludes(), this.loadUserSet()]);
  }

  async loadRuEn(): Promise<PhrasalRuEnSet> {
    const [debt, excludes, userSet] = await this.loadStoredData();
    const sessionSet: PhrasalRuEnSet = PhrasalUtils.createRuEnSessionSet(debt, excludes, userSet);

    return Promise.resolve(sessionSet);
  }

  async loadEnRu(): Promise<PhrasalEnRuSet> {
    const [debt, excludes, userSet] = await this.loadStoredData();
    const sessionSet: PhrasalEnRuSet = PhrasalUtils.createEnRuSessionSet(debt, excludes, userSet);

    return Promise.resolve(sessionSet);
  }

  async saveDebt(debt: Array<string>): Promise<void> {
    StorageUtils.write<Array<string>>(StorageKeys.phrasalDebt, debt);
  }
}

const Service = new PhrasalService();

export default Service;
export { Service as PhrasalService };
