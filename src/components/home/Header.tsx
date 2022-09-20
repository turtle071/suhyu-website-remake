export default function Header() {
  return (
    <header>
      <div className="flex justify-center text-zinc-400 gap-[530px] border-b-[1px] border-neutral-800 pb-[15px]">
        <h1 className="text-[25px] pt-[20px] text-white duration-500">
          <strong>🧁Suhyu</strong>
        </h1>
        <div className="flex gap-[19px] pr-[40px] pt-[25px] ">
          <a href="">
            <p className="hover:transition text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Suport server 💬</strong>
            </p>
          </a>
          <a href="">
            <p className="hover:transition text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Add +</strong>
            </p>
          </a>
          <a href="">
            <p className="hover:transition text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Open source 💻</strong>
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
