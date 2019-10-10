import { ApplicationState, Actions } from ".";
import { Middleware, Dispatch, MiddlewareAPI } from "redux";
import { ThunkAction } from "redux-thunk";

const ourMiddleware = (store: MiddlewareAPI) => (next: Dispatch<any>) => (
  action: any
) => {
  if (action.isApiAction) {
    return next(async (dispatch: any) => {
      const response = await fetch("http://localhost:4712" + action.url);
      const data = await response.json();
      console.log(data);
      dispatch({
        ...action,
        [action.propertyName]: data
      });
    });
  }
  return next(action);
};

export default ourMiddleware;
