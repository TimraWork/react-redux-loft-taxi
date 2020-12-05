import {logIn, AUTHENTICATE} from './actions';
import {serverLogin} from './api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogin(email, password);
    console.log('success = ', success);
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
