import { useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Mainroutes";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from './components/ScrollToTop';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_a2V5LWd1bGwtNjYuY2xlcmsuYWNjb3VudHMuZGV2JA";

const App = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (

    <>
      {!loadingFinished && <Loader onFinish={() => setLoadingFinished(true)} />}

      {loadingFinished && (
        <div className="content-fade-in">
          <SmoothScroll />
          <ClerkProvider publishableKey={clerkPubKey}>
            <BrowserRouter>
              <ScrollToTop />
              <Nav />
              <MainRoutes />
              <Footer />
            </BrowserRouter>
          </ClerkProvider>
        </div>
      )}
      
    </>
  );
};

export default App;
