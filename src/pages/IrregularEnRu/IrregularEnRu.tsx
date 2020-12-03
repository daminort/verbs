import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';

import { Modes, Directions} from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';
import { Radio, RadioGroup } from '../../components/Radio';

const IrregularEnRu: FC = () => {

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.enRu));
  });

  return (
    <>
      <Task value="coming soon..." />
      {/*<RadioGroup onSelect={(name) => console.log(name)}>*/}
      {/*  <FormField label="Variant #1">*/}
      {/*    <Radio*/}
      {/*      name="variant1"*/}
      {/*      label="бороться"*/}
      {/*      status="error"*/}
      {/*    />*/}
      {/*  </FormField>*/}
      {/*  <FormField label="Variant #2">*/}
      {/*    <Radio*/}
      {/*      name="variant2"*/}
      {/*      label="пить"*/}
      {/*      status="success"*/}
      {/*    />*/}
      {/*  </FormField>*/}
      {/*  <FormField label="Variant #3">*/}
      {/*    <Radio*/}
      {/*      name="variant3"*/}
      {/*      label="спать"*/}
      {/*    />*/}
      {/*  </FormField>*/}
      {/*</RadioGroup>*/}
    </>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
