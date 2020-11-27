import React, { FC, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useMount } from 'react-use';

import { HashMap, GenericMap } from '../../assets/types/common';
import { Modes, Directions} from '../../assets/enums/app';
import { Status } from '../../assets/types/input';
import { appActions } from '../../redux/app/actions';
import { selectLoading } from '../../redux/app/selectors';
import {
  selectIsSessionActive,
  selectCurrentIrregularRuEn,
} from '../../redux/session/selectors';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonsBlock } from '../../components/ButtonsBlock/ButtonsBlock';

import { IrregularRuEn as Skeleton } from '../../components/Skeletons';
import { IrregularRuEn as Placeholder } from '../../components/Placeholders';

const defaultStatus: GenericMap<Status> = {
  infinitive: 'normal',
  pastSimple: 'normal',
  pastParticipant: 'normal',
};

const defaultErrors: HashMap = {
  infinitive: '',
  pastSimple: '',
  pastParticipant: '',
};

const IrregularRuEn: FC = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isSessionActive = useSelector(selectIsSessionActive);
  const currentItem = useSelector(selectCurrentIrregularRuEn, shallowEqual);

  const [infinitive, setInfinitive] = useState('');
  const [pastSimple, setPastSimple] = useState('');
  const [pastParticipant, setPastParticipant] = useState('');
  const [status, setStatus] = useState(defaultStatus);
  const [errors, setErrors] = useState(defaultErrors);

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.ruEn));
  });

  if (loading) {
    return <Skeleton />;
  };

  if (!isSessionActive) {
    return <Placeholder />;
  };

  return (
    <>
      <Task value={currentItem.translation} />
      <FormField label="Infinitive">
        <Input
          name="infinitive"
          placeholder="infinitive"
          value={infinitive}
          status={status.infinitive}
          message={errors.infinitive}
          onChange={setInfinitive}
        />
      </FormField>
      <FormField label="Past Simple">
        <Input
          name="pastSimple"
          placeholder="past simple"
          value={pastSimple}
          status={status.pastSimple}
          message={errors.pastSimple}
          onChange={setPastSimple}
        />
      </FormField>
      <FormField label="Past Participle">
        <Input
          name="pastParticipant"
          placeholder="past participle"
          value={pastParticipant}
          status={status.pastParticipant}
          message={errors.pastParticipant}
          onChange={setPastParticipant}
        />
      </FormField>
      <ButtonsBlock>
        <Button onClick={() => {}}>
          Check
        </Button>
        <Button onClick={() => {}}>
          Next
        </Button>
      </ButtonsBlock>
    </>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
