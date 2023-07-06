type AppContainer = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainer) => {
  return <div className="lg:flex">{children}</div>;
};

export default AppContainer;
