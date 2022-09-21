export default function Section() {
  return (
    <div className="pb-[60px] pt-[50px] xl:pt-[260px]">
      <div className="bg-zinc-900 text-center p-[60px] ">
        <p className="text-zinc-300 text-[40px] hover:scale-105 duration-300">
          <strong>
            Support for
            <span className="text-violet-800"> Slash Commands</span>
          </strong>
        </p>
      </div>
      <div className="">
        <div className="text-center pt-[50px]">
          <div className="flex justify-center pb-[10px]">
            <div className="flex gap-[10px] justify-center pb-[10px] p-[10px]">
              <img className="h-[27px] animate-spin" src="/gear-six.svg" alt="engrenagem" />
              <h1 className="text-[25px] xl:text-[20px] text-white">
                <strong>More about </strong>
                <span className="text-violet-700 font-bold">Suhyu</span>
              </h1>
            </div>
          </div>
          <div className="pt-[20px] ">
            <a href="/commands">
              <button className="bg-violet-800 text-white xl:px-[20px] xl:py-[15px] px-[40px] py-[30px] text-[20px] xl:text-[15px] rounded-[5px] hover:scale-110 duration-500">
                <strong>See my commands</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
