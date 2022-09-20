import { useRef, useState } from 'react';
import About from './About';
import Roles from './Roles';

export default function Profile() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="md:none ">
      <button onClick={onClick} className=" cursor-pointer duration-500 pt-[5px]">
        {!isActive ? (
          <img className="h-[300px] hover:bg-indigo-400 rounded-full hover:scale-105 transition delay-150 duration-700" src="/imagem suhyu.svg" alt="suhyu" />
        ) : (
          <nav
            ref={dropDownRef}
            className={`${
              isActive ? 'active visible opacity-1 hover:scale-110 hover:shadow-inner transform hover:scale-12 transition ease-in duration-500 delay-75 cursor-pointer' : 'inactive opacity-0 disabled'
            }`}
          >
            <div className=" bg-violet-900 rounded-t-2xl pr-[2px] h-[120px] ">
              <div className="pl-5 pr-40 pt-20">
                <img className="rounded-full border-8 border-zinc-900 h-24" src="/profile.webp" alt="icon" />
              </div>
            </div>
            <div className="flex pl-[15px] pt-[58px] pr-4 bg-zinc-900">
              <h1 className="text-white text-lg">
                <strong>
                  Suhyu<span className="text-zinc-600 pr-[2px]">#2442 </span> <span className="text-[12px] bg-blue-700 px-[3.5px] rounded-[3px] ">BOT</span>
                </strong>
              </h1>
            </div>
            <About />
            <Roles />
          </nav>
        )}
      </button>
    </div>
  );
}
