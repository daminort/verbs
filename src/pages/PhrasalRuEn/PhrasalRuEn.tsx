import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';

import { Modes, Directions} from '../../assets/enums/app';
import { appActions } from '../../redux/app/actions';

import { Task } from '../../components/Task';

const PhrasalRuEn: FC = () => {

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.pageReload(Modes.phrasal, Directions.enRu));
  });

  return (
    <>
      <Task value="проверять" />
    </>
  );
};

export default PhrasalRuEn;
export { PhrasalRuEn };
