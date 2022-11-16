import Header from "./header/Header";
import Footer from "./footer/Footer";
import './Layout.css';

const Layout = ({children}) => {
  return (
    <>
    <Header />
        {children}
    <Footer />
    </>
  )
};

export default Layout;