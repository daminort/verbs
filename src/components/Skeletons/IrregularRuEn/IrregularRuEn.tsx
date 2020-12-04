import React, { FC } from 'react';

import { Task } from '../../Task';
import { FormField } from '../../FormField';
import { BlockText, BlockInput } from '../Blocks';
import { Wrapper } from './IrregularRuEn.style';

const IrregularRuEn = () => {
  return (
    <Wrapper>
      <Task disabled value="loading..." />
      <FormField label={<BlockText className="label-01" />}>
        <BlockInput />
      </FormField>
      <FormField label={<BlockText className="label-02" />}>
        <BlockInput />
      </FormField>
      <FormField label={<BlockText className="label-03" />}>
        <BlockInput />
      </FormField>
    </Wrapper>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
