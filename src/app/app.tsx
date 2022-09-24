import { useRoutes } from 'react-router-dom';

import { appRouting } from './routing/appRouting';

import './styles/global.css';

const App = (): JSX.Element => {
  const appRoutes = useRoutes(appRouting);
  return <div>{appRoutes}</div>;
};

export default App;
