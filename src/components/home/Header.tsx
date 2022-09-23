export default function Header() {
  return (
    <header>
      <div className="hidden xl:flex xl:justify-center text-zinc-400 xl:gap-[530px] border-b-[1px] border-neutral-800 pl-[40px] xl:pl-[0px] pb-[15px] md:justify-start md:gap-[25px]">
        <h1 className="text-[30px] xl:text-[25px] pt-[20px] text-white duration-500 ">
          <strong>🧁Suhyu</strong>
        </h1>
        <div className="gap-[19px] xl:pr-[40px] pt-[25px] hidden xl:flex ">
          <a href="/">
            <p className="hover:transition text-[16px] xl:text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Home</strong>
            </p>
          </a>
          <a href="/support">
            <p className="hover:transition text-[16px] xl:text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Suport server 💬</strong>
            </p>
          </a>
          <a href="/add">
            <p className="hover:transition text-[16px] xl:text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Add +</strong>
            </p>
          </a>
          <a href="/github">
            <p className="hover:transition text-[16px] xl:text-[15px] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-zinc-100">
              <strong>Open source 💻</strong>
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
