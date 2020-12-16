import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from 'react-use';

import { CommonUtils } from '../../utils/CommonUtils';
import { sessionActions } from '../../redux/session/actions';
import { scoreActions } from '../../redux/score/actions';
import { selectIsSessionActive } from '../../redux/session/selectors';

import { Icon } from '../../components/Icon';
import { Wrapper } from './TopBar.style';

const TopBar: FC = () => {
  const dispatch = useDispatch();
  const isSessionActive = useSelector(selectIsSessionActive);
  const [time, setTime] = useState(0);

  const onClickTimer = useCallback(() => {
    if (isSessionActive) {
      dispatch(sessionActions.stop());
    } else {
      setTime(0);
      dispatch(sessionActions.start());
    }
  }, [dispatch, isSessionActive, setTime]);

  useInterval(
    () => {
      const newTime = time + 1;
      setTime(newTime);
      dispatch(scoreActions.timeSet(newTime));
    },
    isSessionActive ? 1000 : null
  );

  const timerValue = CommonUtils.formatSeconds(time);
  const timerIcon = isSessionActive ? 'stop' : 'play';

  return (
    <Wrapper>
      <Icon name="menu" size="normal" color="accent" />
      <span className="timer">{timerValue}</span>
      <Icon size="normal" color="accent" name={timerIcon} onClick={onClickTimer} />
    </Wrapper>
  );
};

export default TopBar;
export { TopBar };
