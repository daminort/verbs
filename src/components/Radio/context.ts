import React from 'react';

export interface RadioContextType {
  selected: string;
  setSelected: (v: string) => void;
}

export const RadioContext = React.createContext<RadioContextType>({
  selected: '',
  setSelected: () => {},
});
