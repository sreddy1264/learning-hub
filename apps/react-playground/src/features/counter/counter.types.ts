import { Dispatch } from "@reduxjs/toolkit";

interface CounterParams {
  counter: number;
  increment: () => boolean;
  decrement: () => boolean;
}

interface MapStateToProps {
    counter: number;
}

// interface Action {
//     type: string,
// }

interface MapDispatchToProps {
  increment: () => boolean;
  decrement: () => boolean;
}

interface AppState {
  counter: number;
}

type AppDispatch = Dispatch;

export type {
  CounterParams,
  MapStateToProps,
  MapDispatchToProps,
  AppState,
  AppDispatch,
};