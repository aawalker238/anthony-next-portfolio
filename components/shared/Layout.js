import Navigation from './Navigation';

export default ({ children, className, isAuthenticated }) => {
  return (
    <div className="layout-container">
      <Navigation isAuthenticated={isAuthenticated} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};
