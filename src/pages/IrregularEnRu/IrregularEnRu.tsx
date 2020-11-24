import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';

import { Modes, Directions} from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';

const IrregularEnRu: FC = () => {

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.enRu));
  });

  return (
    <>
      <Task value="drank" />
      <FormField label="Variant #1">
        Variant #1
      </FormField>
      <FormField label="Variant #2">
        Variant #2
      </FormField>
      <FormField label="Variant #3">
        Variant #3
      </FormField>
    </>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
