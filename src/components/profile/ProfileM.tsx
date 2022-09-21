import About from './About';
import Roles from './Roles';

export default function ProfileM() {
  return (
    <div className="p-[30px]">
      <div className="xl:hidden pb-[60px]">
        <div className=" bg-violet-900 rounded-t-2xl pr-[2px] h-[120px] ">
          <div className="pl-5 pt-20">
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
      </div>
    </div>
  );
}
