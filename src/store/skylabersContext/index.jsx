import React, { useReducer, createContext } from 'react';
import { PropTypes } from 'prop-types';
import skylabersReducer from './reducers';

export const SkylabersInitialState = {
  skylabers: [],
};

export const SkylabersContext = createContext({});

export const SkylabersContextProvider = ({ children }) => {
  const [skylabersState] = useReducer(skylabersReducer, SkylabersInitialState);

  return (
    <SkylabersContext.Provider
      value={skylabersState}
    >
      {children}
    </SkylabersContext.Provider>
  );
};

SkylabersContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
