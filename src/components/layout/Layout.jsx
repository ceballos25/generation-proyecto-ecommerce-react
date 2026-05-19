const Layout = ({ children }) => {
  return (
    <div className="dinamic-container">
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;
