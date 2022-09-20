export default function About() {
  return (
    <div className="pl-[15px] bg-zinc-900">
      <div className="pt-4 border-t border-zinc-800 flex items-baseline">
        <p className="text-gray-200 text-[12px] pb-[8px]">
          <strong>ABOUT ME</strong>
        </p>
      </div>
      <div className="flex items-baseline">
        <p className="text-white text-xs">Use /help to see my list of commands.</p>
      </div>
    </div>
  );
}
