import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

import { GenericMap } from '../../assets/types/common';
import { Directions, Modes } from '../../assets/enums/app';
import { SessionPhase } from '../../assets/enums/session';
import { Status } from '../../assets/types/input';

import { IrregularUtils } from '../../utils/IrregularUtils';

import { appActions } from '../../redux/app/actions';
import { sessionActions } from '../../redux/session/actions';
import { selectLoading } from '../../redux/app/selectors';
import { selectCurrentIrregularEnRu, selectIsSessionActive, selectSessionPhase } from '../../redux/session/selectors';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';
import { Radio, RadioGroup } from '../../components/Radio';
import { Button } from '../../components/Button';
import { ButtonsBlock } from '../../components/ButtonsBlock/ButtonsBlock';

import { IrregularEnRu as Skeleton } from '../../components/Skeletons';
import { IrregularEnRu as Placeholder } from '../../components/Placeholders';

import { Score } from '../../containers/Score';

const defaultStatus: GenericMap<Status> = {
  variant1: 'normal',
  variant2: 'normal',
  variant3: 'normal',
};

const IrregularEnRu: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isSessionActive = useSelector(selectIsSessionActive);
  const phase = useSelector(selectSessionPhase);
  const currentItem = useSelector(selectCurrentIrregularEnRu, shallowEqual);

  const [variantName, setVariantName] = useState('');
  const [status, setStatus] = useState(defaultStatus);

  const checkRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useMount(() => {
    dispatch(appActions.pageReload(Modes.irregular, Directions.enRu));
  });

  useEffect(() => {
    setVariantName('');
    setStatus(defaultStatus);
  }, [currentItem, setVariantName, setStatus]);

  useEffect(() => {
    if (nextRef.current && phase === SessionPhase.results) {
      nextRef.current.focus();
    }
  }, [phase]);

  const onSelectVariant = useCallback(
    name => {
      setVariantName(name);
    },
    [setVariantName]
  );

  const onClickCheck = useCallback(() => {
    const { status } = IrregularUtils.validateEnRu(currentItem, variantName);
    setStatus(status);
    dispatch(sessionActions.phaseSet(SessionPhase.results));
  }, [dispatch, currentItem, variantName, setStatus]);

  const onClickNext = useCallback(() => {
    const isError = Object.values(status).some(status => status === 'error');
    dispatch(sessionActions.next(isError));
  }, [dispatch, status]);

  if (loading) {
    return <Skeleton />;
  }

  if (!isSessionActive) {
    return (
      <>
        <Placeholder />
        {phase === SessionPhase.finish && <Score />}
      </>
    );
  }

  const isCheckDisabled = phase === SessionPhase.validation || phase === SessionPhase.results;
  const isNextDisabled = phase === SessionPhase.waiting || phase === SessionPhase.validation;

  return (
    <>
      <Task value={currentItem.verb} />
      <RadioGroup selected={variantName} onSelect={onSelectVariant}>
        <FormField>
          <Radio name="variant1" label={currentItem.variant1} status={status.variant1} disabled={isCheckDisabled} />
        </FormField>
        <FormField>
          <Radio name="variant2" label={currentItem.variant2} status={status.variant2} disabled={isCheckDisabled} />
        </FormField>
        <FormField>
          <Radio name="variant3" label={currentItem.variant3} status={status.variant3} disabled={isCheckDisabled} />
        </FormField>
      </RadioGroup>

      <ButtonsBlock>
        <Button tabIndex={4} ref={checkRef} disabled={isCheckDisabled} onClick={onClickCheck}>
          Check
        </Button>
        <Button tabIndex={5} ref={nextRef} disabled={isNextDisabled} onClick={onClickNext}>
          Next
        </Button>
      </ButtonsBlock>

      <Score />
    </>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
