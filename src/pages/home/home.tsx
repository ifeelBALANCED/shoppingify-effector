import { useTitle } from 'react-use';

export const HomePage = () => {
  useTitle('Home');
  return (
    <div className="text-amber-800">
      HOME <div className="font-bold">MY</div>
    </div>
  );
};
