import { IrregularVerbs, IrregularVerb } from '../../assets/types/verbs';
import {
  IrregularRuEnItem,
  IrregularRuEnSet,
  IrregularEnRuItem,
  IrregularEnRuSet,
} from '../../assets/types/sessionSets';
import { GenericMap, HashMap } from '../../assets/types/common';
import { Status } from '../../assets/types/input';

import { irregularVerbs, irregularTranslations } from '../../verbs/irregular';
import { CommonUtils } from '../CommonUtils';
import { DividedSet, ValuesRuEn, ValidationResult, ValidationRuEn, ValidationEnRu } from './types';

type VariantName = Pick<IrregularEnRuItem, 'variant1' | 'variant2' | 'variant3'>;

class IrregularUtils {
  static createDividedSet(debt: string[] = [], excludes: string[] = [], userSet: IrregularVerbs = []): DividedSet {
    const debtVerbs: IrregularVerbs = [];
    const sessionVerbs: IrregularVerbs = [];

    for (const verb of irregularVerbs) {
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
      debtVerbs: CommonUtils.shuffle<IrregularVerb>(debtVerbs),
      sessionVerbs: CommonUtils.shuffle<IrregularVerb>(sessionVerbs),
    };
  }

  static createEnRuItem(originVerb: IrregularVerb): IrregularEnRuItem {
    const { key, infinitive, pastSimple, pastParticipant, translation } = originVerb;

    const item: IrregularEnRuItem = {
      key,
      verb: CommonUtils.randomItem([infinitive, pastSimple, pastParticipant]),
      variant1: '',
      variant2: '',
      variant3: '',
      origin: originVerb,
    };

    const variants = ['variant1', 'variant2', 'variant3'];
    const correctVariant = CommonUtils.randomItem(variants);
    const excludes = [translation];

    variants.forEach((variantItem: string) => {
      const variantName = variantItem as keyof VariantName;
      if (variantName === correctVariant) {
        item[variantName] = translation;
        return;
      }

      const randomTranslation = CommonUtils.randomItem(irregularTranslations, excludes);
      item[variantName] = randomTranslation;
      excludes.push(randomTranslation);
    });

    return item;
  }

  static createRuEnSessionSet(
    debt: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = []
  ): IrregularRuEnSet {
    const { debtVerbs, sessionVerbs } = IrregularUtils.createDividedSet(debt, excludes, userSet);
    const result: IrregularRuEnSet = [...debtVerbs, ...sessionVerbs];

    return result;
  }

  static createEnRuSessionSet(
    debt: string[] = [],
    excludes: string[] = [],
    userSet: IrregularVerbs = []
  ): IrregularEnRuSet {
    const { debtVerbs, sessionVerbs } = IrregularUtils.createDividedSet(debt, excludes, userSet);

    const result: IrregularEnRuSet = [];
    for (const item of debtVerbs) {
      result.push(IrregularUtils.createEnRuItem(item));
    }
    for (const item of sessionVerbs) {
      result.push(IrregularUtils.createEnRuItem(item));
    }

    return result;
  }

  static validate(origin: string, value: string): ValidationResult {
    const lowOrigin = origin.toLowerCase();
    const lowValue = value.toLowerCase();

    const status = lowOrigin === lowValue ? 'success' : 'error';

    return {
      status,
      error: lowOrigin,
    };
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
    };

    return result;
  }

  static validateEnRu(item: IrregularEnRuItem, variantName: string): ValidationEnRu {
    const status: GenericMap<Status> = {};

    const { variant1, variant2, variant3, origin } = item;
    const { translation } = origin;

    const isOriginVariant1 = variant1 === translation;
    const isOriginVariant2 = variant2 === translation;
    const isOriginVariant3 = variant3 === translation;

    const isSelectedVariant1 = variantName === 'variant1';
    const isSelectedVariant2 = variantName === 'variant2';
    const isSelectedVariant3 = variantName === 'variant3';

    status.variant1 = 'normal';
    status.variant2 = 'normal';
    status.variant3 = 'normal';

    if (isOriginVariant1) {
      status.variant1 = isSelectedVariant1 ? 'success' : 'error';
    }
    if (isOriginVariant2) {
      status.variant2 = isSelectedVariant2 ? 'success' : 'error';
    }
    if (isOriginVariant3) {
      status.variant3 = isSelectedVariant3 ? 'success' : 'error';
    }

    const result: ValidationEnRu = {
      status,
    };

    return result;
  }
}

export default IrregularUtils;
export { IrregularUtils };
