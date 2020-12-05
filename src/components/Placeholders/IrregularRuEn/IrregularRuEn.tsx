import React, { FC } from 'react';

import { Task } from '../../Task';
import { FormField } from '../../FormField';
import { Input } from '../../Input';
import { Wrapper } from './IrregularRuEn.style';
import { Button } from '../../Button/Button';
import { ButtonsBlock } from '../../ButtonsBlock/ButtonsBlock';

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
      <ButtonsBlock>
        <Button disabled>Check</Button>
        <Button disabled>Next</Button>
      </ButtonsBlock>
    </Wrapper>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
