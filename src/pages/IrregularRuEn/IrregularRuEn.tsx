import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';

import { Modes, Directions} from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';
import { Input } from '../../components/Input';

const IrregularRuEn: FC = () => {

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.ruEn));
  });

  return (
    <>
      <Task value="пить" />
      <FormField label="Infinitive">
        <Input
          placeholder="infinitive"
          value={'drink'}
          status="success"
          message=""
          onChange={() => {}}
        />
      </FormField>
      <FormField label="Past Simple">
        <Input
          placeholder="past simple"
          value={'drink'}
          status="error"
          message="drank"
          onChange={() => {}}
        />
      </FormField>
      <FormField label="Past Participle">
        <Input
          placeholder="past participle"
          value={'drunk'}
          status="success"
          message=""
          onChange={() => {}}
        />
      </FormField>
    </>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
