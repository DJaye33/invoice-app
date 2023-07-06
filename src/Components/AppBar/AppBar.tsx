import AppBarGroup from "../AppBarGroup/AppBarGroup";

const AppBar = () => {
  return (
    <header className="flex justify-between items-center lg:items-start bg-indigo-950 pr-6 md:pr-8 lg:p-0 lg:flex-col lg:h-screen lg:pb-6 lg:rounded-br-3xl lg:rounded-tr-3xl">
      <div className="bg-violet-600 w-[72px] h-[72px] relative flex justify-center items-center rounded-tr-3xl rounded-br-3xl md:w-20 md:h-20 lg:w-[103px] lg:h-[103px]">
        <img src={"/logo.svg"} alt="invoice app" className="z-10" />
        <div className="bg-violet-500 h-3/6 absolute bottom-0 w-full rounded-tl-3xl rounded-br-3xl"></div>
      </div>
      <AppBarGroup />
    </header>
  );
};

export default AppBar;
