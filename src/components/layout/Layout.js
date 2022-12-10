import Header from "./header/Header";
import './Layout.css';

const Layout = ({ children }) =>
{
  return (
    <>
      <Header />
      {children}
    </>
  )
};

export default Layout;