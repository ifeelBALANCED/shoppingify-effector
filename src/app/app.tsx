import { useRoutes } from 'react-router-dom';

import { appRouting } from './routing/appRouting';

const App = (): JSX.Element => {
  const appRoutes = useRoutes(appRouting);
  return <>{appRoutes}</>;
};

export default App;
