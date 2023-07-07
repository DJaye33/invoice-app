type AppMainProps = {
  children: React.ReactNode;
};

const AppMain = ({ children }: AppMainProps) => {
  return <main className="pt-9 px-6">{children}</main>;
};

export default AppMain;
