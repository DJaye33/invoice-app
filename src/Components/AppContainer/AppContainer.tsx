type AppContainer = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainer) => {
  return <div className="min-h-screen bg-violet-50 lg:flex">{children}</div>;
};

export default AppContainer;
