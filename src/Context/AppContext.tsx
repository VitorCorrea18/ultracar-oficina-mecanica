import React, { createContext, useReducer, useEffect } from "react";
import { IState, IAppContext } from "./interfaces";
import { IService, IUser } from '../Interfaces';
import { appReducer } from "./AppReducer";
import { getServicesByUserId } from '../Api';

export const initialState: IState = {
  user: {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  } as IUser,
  services: [],
  allCarBrands: []
};

const initialContext: IAppContext = {
  state: initialState,
  dispatch: () => null,
};

export const AppContext = createContext(initialContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchServices = async () => {
      const services: IService[] = await getServicesByUserId(state.user.id);
      dispatch({ type: 'SET_SERVICES', payload: services });
    };
    fetchServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};