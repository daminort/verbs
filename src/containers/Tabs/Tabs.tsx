import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { Directions, Modes } from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';
import { selectMode, selectDirection } from '../../redux/app/selectors';

import { DirectionSwitcher } from '../../components/DirectionSwitcher';
import { Wrapper } from './Tabs.style';

const Tabs = () => {

  const dispatch = useDispatch();
  const mode: Modes = useSelector(selectMode);
  const direction: Directions = useSelector(selectDirection);

  const onChangeMode = useCallback((mode: Modes) => () => {
    dispatch(appActions.modeChange(mode));
  }, [dispatch]);

  const onChangeDirection = useCallback((direction: Directions) => {
    dispatch(appActions.directionChange(direction));
  }, [dispatch]);

  const irregularClass = clsx('tab', {
    active: mode === Modes.irregular,
  });
  const phrasalClass = clsx('tab', {
    active: mode === Modes.phrasal,
  });

  return (
    <Wrapper>
      <div className="left">
        <div className={irregularClass} onClick={onChangeMode(Modes.irregular)}>Irregular</div>
        <div className={phrasalClass} onClick={onChangeMode(Modes.phrasal)}>Phrasal</div>
      </div>
      <div className="right">
        <DirectionSwitcher
          direction={direction}
          onChange={onChangeDirection}
        />
      </div>
    </Wrapper>
  );
};

export default Tabs;
export { Tabs };
