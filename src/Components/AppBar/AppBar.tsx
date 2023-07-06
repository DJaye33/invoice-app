import AppBarGroup from "../AppBarGroup/AppBarGroup";

const AppBar = () => {
  return (
    <header className="flex justify-between items-center bg-indigo-950">
      <div className="bg-violet-600 w-[72px] h-[72px] relative flex justify-center items-center rounded-tr-3xl rounded-br-3xl">
        <figure className="z-10">
          <img src={"/logo.svg"} alt="invoice app" />
        </figure>
        <div className="bg-violet-500 h-3/6 absolute bottom-0 w-full rounded-tl-3xl rounded-br-3xl"></div>
      </div>
      <AppBarGroup />
    </header>
  );
};

export default AppBar;
