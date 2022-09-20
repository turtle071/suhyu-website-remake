import Profile from '../profile/Profile';
import Footer from './Footer';
import Section from './Section';

export default function Main() {
  return (
    <main>
      <div className="flex pt-[70px] gap-[140px]">
        <div className="pl-[50px] flex-col text-white xl:pl-[300px]">
          <div>
            <h1 className="text-white text-[55px] xl:text-[48px] hover:scale-105 duration-500">
              <strong>
                <span className="text-violet-700 ">Suhyu</span> is a Discord bot
                <br />
                to constructor
                <br />
                your server!
              </strong>
            </h1>
          </div>

          <div>
            <p className="text-zinc-500 text-[20px] xl:text-[16px]">
              Moderation, welcome message, autorole system,
              <br /> and functions to help your Discord server.
            </p>
          </div>
          <nav className="pt-[25px] flex gap-5">
            <a href="/add">
              <button className=" text-[20px] xl:text-[16px] rounded-[6px] p-[10px] px-[30px] xl:p-[10px] xl:px-[20px] hover:bg-violet-800 bg-violet-700 hover:transition ease-in-out delay-800 hover:-translate-y-1 hover:scale-110 duration-300">
                Add Suhyu
              </button>
            </a>
            <a href="/support">
              <button className="text-[20px] xl:text-[16px] rounded-[6px] p-[10px] px-[30px] xl:p-[10px] xl:px-[20px] hover:bg-zinc-800 bg-zinc-700 hover:transition ease-in-out delay-800 hover:-translate-y-1 hover:scale-110 duration-300">
                Support Server
              </button>
            </a>
          </nav>
        </div>
        <Profile />
      </div>
      <Section />
      <Footer />
    </main>
  );
}
