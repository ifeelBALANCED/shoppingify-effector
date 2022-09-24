import { MdMenu, MdOutlineInsertChart, MdReplay } from 'react-icons/md';

export const Navigation = () => (
  <nav className="text-slate-700 text-xl flex flex-col flex-1 justify-evenly">
    <div className="cursor-pointer">
      <MdMenu />
    </div>
    <div className="cursor-pointer">
      <MdReplay />
    </div>
    <div className="cursor-pointer">
      <MdOutlineInsertChart />
    </div>
  </nav>
);
