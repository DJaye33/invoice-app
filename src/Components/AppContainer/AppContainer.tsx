type AppContainer = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainer) => {
  return <div>{children}</div>;
};

export default AppContainer;
