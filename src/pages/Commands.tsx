import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import HeaderM from '../components/home/HeaderM';

export default function Commands() {
  return (
    <div>
      <div className="hidden xl:flex xl:justify-center">
        <Header />
      </div>
      <div className="xl:hidden">
        <HeaderM />
      </div>
      <h1 className="text-center text-white text-[30px] pt-[40px]">
        <strong>
          <span className="text-violet-700">Suhyu</span> Commands List
        </strong>
      </h1>
      <div className="xl:pl-[550px] xl:pr-[550px] text-white text-center">
        <ul className="border-[5px] border-zinc-600 rounded-[4px] bg-zinc-900">
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /help <br />
              <span className="text-[20px] text-zinc-300 font-bold">Shows bot commands.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /ban <br />
              <span className="text-[20px] text-zinc-300 font-bold">Ban a member from the server.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /unban <br />
              <span className="text-[20px] text-zinc-300 font-bold">Removes the member's ban.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /bot <br />
              <span className="text-[20px] text-zinc-300 font-bold">Shows information about the bot.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /clear <br />
              <span className="text-[20px] text-zinc-300 font-bold">Clears a selected number of messages from 1 to 99 messages.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /config welcome canal_entrada <br />
              <span className="text-[20px] text-zinc-300 font-bold">Configures the channel that will have the incoming message on the server.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /config autorole cargo_entrada <br />
              <span className="text-[20px] text-zinc-300 font-bold">Configures the member's entry role on the server.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /config autorolebot cargo_entrada_bot <br />
              <span className="text-[20px] text-zinc-300 font-bold">Configures the bot's entry role on the server.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /contador <br />
              <span className="text-[20px] text-zinc-300 font-bold">Create a counter in chat.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /convite <br />
              <span className="text-[20px] text-zinc-300 font-bold">Shows the bot invite.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /avatar <br />
              <span className="text-[20px] text-zinc-300 font-bold">Shows the avatar of a server member.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /kick <br />
              <span className="text-[20px] text-zinc-300 font-bold">Kick a server member.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /mute <br />
              <span className="text-[20px] text-zinc-300 font-bold">Mute a server member.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /unmute <br />
              <span className="text-[20px] text-zinc-300 font-bold">Unmute the server member.</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /ping <br />
              <span className="text-[20px] text-zinc-300 font-bold">Shows the bot's ping</span>
            </p>
          </li>
          <li className="border-b-[5px] border-zinc-600">
            <p className="text-[25px] font-bold text-violet-700">
              /register <br />
              <span className="text-[20px] text-zinc-300 font-bold">Create a registration form on your server.</span>
            </p>
          </li>
          <li className="">
            <p className="text-[25px] font-bold text-violet-700">
              /say <br />
              <span className="text-[20px] text-zinc-300 font-bold">To send a message to the server with the bot.</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="text-center pt-[50px] pb-[20px]">
        <p className="text-white text-[30px] font-bold">
          You are now ready to add the <span className="text-violet-700">Suhyu</span>?!
        </p>
      </div>
      <div className="text-center">
        <a href="/add">
          <button className="bg-violet-700 px-[50px] py-[15px] rounded-[4px] text-white font-bold">Add</button>
        </a>
      </div>
      <div className="pt-[50px]">
        <Footer />
      </div>
    </div>
  );
}
