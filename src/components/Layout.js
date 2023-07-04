import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <main className="px-4 py-6 w-full max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
