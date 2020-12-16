import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { CommonUtils } from '../../utils/CommonUtils';
import {
  selectTotal,
  selectPassed,
  selectCorrect,
  selectWrong,
  selectProgress,
  selectTime,
} from '../../redux/score/selectors';

import { Wrapper } from './Score.style';

const Score: FC = () => {
  const total = useSelector(selectTotal);
  const passed = useSelector(selectPassed);
  const correct = useSelector(selectCorrect);
  const wrong = useSelector(selectWrong);
  const progress = useSelector(selectProgress);
  const time = useSelector(selectTime);

  return (
    <Wrapper>
      <h3>Score</h3>
      <div className="row">
        <span className="label">Passed</span>
        <span className="value">
          {passed} / {total}
        </span>
      </div>
      <div className="row">
        <span className="label">Correct</span>
        <span className="value">{correct}</span>
      </div>
      <div className="row">
        <span className="label">Wrong</span>
        <span className="value">{wrong}</span>
      </div>
      <div className="row">
        <span className="label">Progress</span>
        <span className="value">{progress} %</span>
      </div>
      <div className="row">
        <span className="label">Time</span>
        <span className="value">{CommonUtils.formatSeconds(time)}</span>
      </div>
    </Wrapper>
  );
};

export default Score;
export { Score };
