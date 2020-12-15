import React, { FC } from 'react';

import { Task } from '../../Task';
import { FormField } from '../../FormField';
import { Button } from '../../Button/Button';
import { ButtonsBlock } from '../../ButtonsBlock';
import { Radio } from '../../Radio/Radio/Radio';
import { RadioGroup } from '../../Radio/RadioGroup';

import { Wrapper } from './IrregularEnRu.style';

const IrregularEnRu: FC = () => {
  return (
    <Wrapper>
      <Task disabled value="waiting for start..." />
      <RadioGroup onSelect={() => {}}>
        <FormField label="Variant #1">
          <Radio name="variant1" label="waiting..." />
        </FormField>
        <FormField label="Variant #2">
          <Radio name="variant2" label="waiting..." />
        </FormField>
        <FormField label="Variant #3">
          <Radio name="variant3" label="waiting..." />
        </FormField>
      </RadioGroup>
      <ButtonsBlock>
        <Button disabled>Check</Button>
        <Button disabled>Next</Button>
      </ButtonsBlock>
    </Wrapper>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
