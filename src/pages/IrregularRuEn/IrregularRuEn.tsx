import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

import { GenericMap, HashMap } from '../../assets/types/common';
import { Directions, Modes } from '../../assets/enums/app';
import { SessionPhase } from '../../assets/enums/session';
import { Status } from '../../assets/types/input';

import { IrregularUtils } from '../../utils/IrregularUtils';

import { appActions } from '../../redux/app/actions';
import { sessionActions } from '../../redux/session/actions';
import { selectLoading } from '../../redux/app/selectors';
import {
  selectCurrentIrregularRuEn,
  selectIsSessionActive,
  selectSessionPhase,} from '../../redux/session/selectors';

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
  const phase = useSelector(selectSessionPhase);
  const currentItem = useSelector(selectCurrentIrregularRuEn, shallowEqual);

  const [infinitive, setInfinitive] = useState('');
  const [pastSimple, setPastSimple] = useState('');
  const [pastParticipant, setPastParticipant] = useState('');
  const [status, setStatus] = useState(defaultStatus);
  const [errors, setErrors] = useState(defaultErrors);

  const infinitiveRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.ruEn));
  });

  useEffect(() => {
    if (infinitiveRef.current) {
      infinitiveRef.current.focus();
    }

    setInfinitive('');
    setPastSimple('');
    setPastParticipant('');
    setStatus(defaultStatus);
    setErrors(defaultErrors);

  }, [currentItem, setInfinitive, setPastSimple, setPastParticipant]);

  useEffect(() => {
    if (nextRef.current && phase === SessionPhase.results) {
      nextRef.current.focus();
    }
  }, [phase]);

  const onClickCheck = useCallback(() => {
    const values = {
      infinitive,
      pastSimple,
      pastParticipant,
    };
    const { status, errors } = IrregularUtils.validateRuEn(currentItem, values);
    setStatus(status);
    setErrors(errors);
    dispatch(sessionActions.phaseSet(SessionPhase.results));

  }, [dispatch, currentItem, infinitive, pastSimple, pastParticipant, setStatus, setErrors]);

  const onClickNext = useCallback(() => {
    const isError = Object.values(status).some(status => status === 'error');
    dispatch(sessionActions.next(isError));
  },[dispatch, status]);

  if (loading) {
    return <Skeleton />;
  };

  if (!isSessionActive) {
    return <Placeholder />;
  };

  const isCheckDisabled = (phase === SessionPhase.validation || phase === SessionPhase.results);
  const isNextDisabled = (phase === SessionPhase.waiting || phase === SessionPhase.validation);

  const placeholders = {
    infinitive: errors.infinitive ? '' : 'infinitive',
    pastSimple: errors.pastSimple ? '' : 'past simple',
    pastParticipant: errors.pastParticipant ? '' : 'past participant',
  }

  return (
    <>
      <Task value={currentItem.translation} />
      <FormField label="Infinitive">
        <Input
          name="infinitive"
          tabIndex={1}
          placeholder={placeholders.infinitive}
          ref={infinitiveRef}
          value={infinitive}
          status={status.infinitive}
          message={errors.infinitive}
          onChange={setInfinitive}
        />
      </FormField>
      <FormField label="Past Simple">
        <Input
          name="pastSimple"
          tabIndex={2}
          placeholder={placeholders.pastSimple}
          value={pastSimple}
          status={status.pastSimple}
          message={errors.pastSimple}
          onChange={setPastSimple}
        />
      </FormField>
      <FormField label="Past Participle">
        <Input
          name="pastParticipant"
          tabIndex={3}
          placeholder={placeholders.pastParticipant}
          value={pastParticipant}
          status={status.pastParticipant}
          message={errors.pastParticipant}
          onChange={setPastParticipant}
        />
      </FormField>
      <ButtonsBlock>
        <Button
          tabIndex={4}
          disabled={isCheckDisabled}
          onClick={onClickCheck}
        >
          Check
        </Button>
        <Button
          tabIndex={5}
          ref={nextRef}
          disabled={isNextDisabled}
          onClick={onClickNext}
        >
          Next
        </Button>
      </ButtonsBlock>
    </>
  );
};

export default IrregularRuEn;
export { IrregularRuEn };
