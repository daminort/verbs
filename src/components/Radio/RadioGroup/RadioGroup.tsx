import React, { FC, useState, useCallback } from 'react';
import { RadioContext, RadioContextType } from '../context';

interface Props {
  onSelect: (name: string) => void;
}

const RadioGroup: FC<Props> = ({ onSelect, children }) => {
  const [selectedName, setSelectedName] = useState('');

  const onSelectValue = useCallback((name: string) => {
    setSelectedName(name);
    onSelect(name);
  }, [setSelectedName, onSelect]);

  const contextValue: RadioContextType = {
    selected: selectedName,
    setSelected: onSelectValue,
  };

  return (
    <div>
      <RadioContext.Provider value={contextValue}>
        {children}
      </RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
export { RadioGroup };
