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
  selectCurrentIrregularEnRu,
  selectCurrentIrregularRuEn,
  selectIsSessionActive,
  selectSessionPhase,
} from '../../redux/session/selectors';

import { Task } from '../../components/Task';
import { FormField } from '../../components/FormField';
import { Radio, RadioGroup } from '../../components/Radio';
import { Button } from '../../components/Button';
import { ButtonsBlock } from '../../components/ButtonsBlock/ButtonsBlock';

import { IrregularEnRu as Skeleton } from '../../components/Skeletons';
import { IrregularEnRu as Placeholder } from '../../components/Placeholders';

import { Score } from '../../containers/Score';
import { OnEnterCallbackParams } from '../../assets/types/events';

const defaultStatus: GenericMap<Status> = {
  variant1: 'normal',
  variant2: 'normal',
  variant3: 'normal',
};

const defaultErrors: HashMap = {
  variant1: '',
  variant2: '',
  variant3: '',
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

  return (
    <>
      <RadioGroup onSelect={onSelectVariant}>
        <FormField label="Variant #1">
          <Radio name="variant1" label="бороться" status="error" />
        </FormField>
        <FormField label="Variant #2">
          <Radio name="variant2" label="пить" status="success" />
        </FormField>
        <FormField label="Variant #3">
          <Radio name="variant3" label="спать" />
        </FormField>
      </RadioGroup>
    </>
  );
};

export default IrregularEnRu;
export { IrregularEnRu };
