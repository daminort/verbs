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
        <FormField>
          <Radio name="variant1" label="variant #1" disabled />
        </FormField>
        <FormField>
          <Radio name="variant2" label="variant #2" disabled />
        </FormField>
        <FormField>
          <Radio name="variant3" label="variant #3" disabled />
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
