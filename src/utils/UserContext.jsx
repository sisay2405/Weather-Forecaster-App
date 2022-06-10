import { createContext } from 'react';

const UserContext = createContext({
  details: {},
  sevenDays: [],
  locations: '',
  oneDay: '',
});

export default UserContext;
