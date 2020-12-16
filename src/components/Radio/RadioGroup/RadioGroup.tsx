import React, { FC, useState, useCallback, useEffect } from 'react';
import { RadioContext, RadioContextType } from '../context';

interface Props {
  onSelect: (name: string) => void;
  selected?: string;
}

const RadioGroup: FC<Props> = ({ selected = '', onSelect, children }) => {
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    setSelectedName(selected);
  }, [selected, setSelectedName]);

  const onSelectValue = useCallback(
    (name: string) => {
      setSelectedName(name);
      onSelect(name);
    },
    [setSelectedName, onSelect]
  );

  const contextValue: RadioContextType = {
    selected: selectedName,
    setSelected: onSelectValue,
  };

  return (
    <div>
      <RadioContext.Provider value={contextValue}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
export { RadioGroup };
