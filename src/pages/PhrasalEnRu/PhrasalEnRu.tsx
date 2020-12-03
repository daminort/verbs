import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';

import { Modes, Directions} from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';

const PhrasalEnRu: FC = () => {

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.pageReload(Modes.phrasal, Directions.enRu));
  });

  return (
    <>
      <Task value="coming soon..." />
      {/*<FormField label="Variant #1">*/}
      {/*  Variant #1*/}
      {/*</FormField>*/}
      {/*<FormField label="Variant #2">*/}
      {/*  Variant #2*/}
      {/*</FormField>*/}
      {/*<FormField label="Variant #3">*/}
      {/*  Variant #3*/}
      {/*</FormField>*/}
    </>
  );
};

export default PhrasalEnRu;
export { PhrasalEnRu };
