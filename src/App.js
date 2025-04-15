import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Spinner } from "reactstrap";
import ContactUs from "./components/home/contact-us/ContactUs";
import Footer from "./components/home/footer/Footer";
import NavbarSection from "./components/home/navbar-section/NavbarSection";

const Home = React.lazy(() => import("./components/home/Home"));
const Products = React.lazy(() => import("./components/products/Products"));

function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Spinner
                style={{
                  height: "3rem",
                  width: "3rem",
                }}
                color="primary"
                className="mx-auto"
              >
                Loading...
              </Spinner>
            </div>
          }
        >
          <NavbarSection />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <ContactUs />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
