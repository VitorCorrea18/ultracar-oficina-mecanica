import { IState } from "./interfaces";
import { IService, IUser } from '../Interfaces';

type Action =
  | { type: "SET_SERVICES"; payload: IService[] }
  | { type: "SET_ALL_CAR_BRANDS"; payload: string[] }
  | { type: "SET_USER"; payload: IUser };

  export const appReducer = (state: IState, action: Action): IState => {
    switch (action.type) {
      case "SET_SERVICES":
        return {
          ...state,
          services: action.payload,
        };
      case "SET_ALL_CAR_BRANDS":
        return {
          ...state,
          allCarBrands: action.payload,
        };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };