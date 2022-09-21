import { useRef, useState } from 'react';

export default function HeaderM() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="xl:hidden">
      <h1 className="text-[30px] xl:text-[25px] pt-[20px] text-center text-white duration-500 ">
        <strong>🧁Suhyu</strong>
      </h1>
      <div className="flex-col xl:hidden pl-[20px] pr-[20px]">
        <button onClick={onClick} className="xl:hidden ">
          {!isActive ? <img className="h-[45px] transform transition duration-500 ease-in-out" src="/list.svg" alt="menu" /> : <img className="h-[45px] " src="/x.svg" alt="x" />}
        </button>
        <nav ref={dropDownRef} className={`${isActive ? 'active:visible opacity-1 px-[50px]' : 'inactive opacity-0 hidden'}`}>
          <ul className="text-white text-center border-[5px] rounded-[7px] bg-violet-700 py-[10px]">
            <li className="border-b-[1px] border-violet-700 text-zinc-200 text-[18px]">
              <a>Suport server 💬</a>
            </li>
            <li className="border-b-[1px] border-violet-700 text-zinc-200 text-[18px]">
              <a>Add +</a>
            </li>
            <li className="text-zinc-200 text-[18px]">
              <a>Open source 💻</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
