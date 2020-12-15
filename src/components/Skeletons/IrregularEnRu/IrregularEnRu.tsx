import React, { FC } from 'react';

import { Task } from '../../Task';
import { FormField } from '../../FormField';
import { Wrapper } from './IrregularEnRu.style';
import { BlockRadio, BlockText } from '../Blocks';

const IrregularEnRu: FC = () => {
  return (
    <Wrapper>
      <Task disabled value="loading..." />
      <FormField label={<BlockText className="label-full" />}>
        <BlockRadio className="radio" />
        <BlockText className="value-01" />
      </FormField>
      <FormField label={<BlockText className="label-full" />}>
        <BlockRadio className="radio" />
        <BlockText className="value-02" />
      </FormField>
      <FormField label={<BlockText className="label-full" />}>
        <BlockRadio className="radio" />
        <BlockText className="value-03" />
      </FormField>
    </Wrapper>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
