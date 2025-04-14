import { connect } from "react-redux";
import {
  CounterParams,
  MapStateToProps,
  MapDispatchToProps,
  AppState,
  AppDispatch,
} from "./counter.types";

const Counter = ({ counter, increment, decrement }: CounterParams): JSX.Element => {
  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

// const mapStateToProps = (state: AppState): MapStateToProps => ({
//   counter: state.counter,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers
  // to ensure that 'counter' matches the correct key in your store.
// });

// const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => ({
//   increment: () => dispatch({ type: "INCREMENT" }),
//   decrement: () => dispatch({ type: "DECREMENT" }),
// });

// const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

// export { CounterConnected };

export { Counter };