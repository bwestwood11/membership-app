import Navbar from "../components/Navbar";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserAuthContextProvider>
    </>
  );
}

export default MyApp;
