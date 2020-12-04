import React, { FC } from 'react';

import { Task } from '../../Task';
import { FormField } from '../../FormField';
import { Input } from '../../Input';
import { Wrapper } from './IrregularRuEn.style';

const inputProps = {
  disabled: true,
  value: '',
  onChange: () => {},
};

const IrregularRuEn: FC = () => {
  return (
    <Wrapper>
      <Task disabled value="waiting for start..." />
      <FormField label="Infinitive">
        <Input placeholder="infinitive" {...inputProps} />
      </FormField>
      <FormField label="Past Simple">
        <Input placeholder="past simple" {...inputProps} />
      </FormField>
      <FormField label="Past Participle">
        <Input placeholder="past participle" {...inputProps} />
      </FormField>
    </Wrapper>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
