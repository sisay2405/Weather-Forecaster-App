import { createContext } from 'react';

const UserContext = createContext({
  sevenDays: [],
  oneDay: '',
  getData: () => {},
  backtohome: () => {},
});

export default UserContext;
