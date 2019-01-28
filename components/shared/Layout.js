import Navigation from './Navigation';
export default ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="main-container">{children}</div>
    </>
  );
};
