type AppContainer = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainer) => {
  return <div className="lg:flex border-2">{children}</div>;
};

export default AppContainer;
