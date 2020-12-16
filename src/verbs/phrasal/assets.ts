import { PhrasalVerb } from '../../assets/types/verbs';
import { GenericMap } from '../../assets/types/common';

type VerbCreator = (v: string, m: string, t: string, e: Array<string>) => PhrasalVerb;

export function createVerbCreator(): VerbCreator {
  const cache: GenericMap<number> = {};

  return function verb(v: string, m: string, t: string, e: Array<string>): PhrasalVerb {
    const parts = v.split(' ');
    const vKey = parts.join('-');
    const vIndex = cache[vKey] || 0;
    const key = `${vKey}-${vIndex}`;

    cache[vKey] = vIndex + 1;

    const res: PhrasalVerb = {
      key,
      verb: parts[0],
      preposition: parts[1],
      meaning: m,
      translation: t,
      examples: e,
    };

    return res;
  };
}
