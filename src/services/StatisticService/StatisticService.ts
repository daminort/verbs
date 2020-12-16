import { StorageKeys } from '../../assets/enums/storage';
import { Statistics } from '../../assets/types/statistics';
import { StorageUtils } from '../../utils/StorageUtils';

class StatisticService {
  constructor() {
    this.loadIrregularStats = this.loadIrregularStats.bind(this);
    this.saveIrregularStats = this.saveIrregularStats.bind(this);
  }

  async loadIrregularStats(): Promise<Statistics> {
    const emptyStatistics: Statistics = {
      total: 0,
      correct: 0,
      wrong: 0,
      time: 0,
    };

    return StorageUtils.read<Statistics>(StorageKeys.irregularStatistics, emptyStatistics);
  }

  async saveIrregularStats(statistics: Statistics): Promise<void> {
    StorageUtils.write<Statistics>(StorageKeys.irregularStatistics, statistics);
  }
}

const Service = new StatisticService();

export default Service;
export { Service as StatisticService };
