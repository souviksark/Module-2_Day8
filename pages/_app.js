import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <div>
      <Navbar />
      <Component {...pageProps} />
      {/* you need to put one footer copyright your name */}
  </div>
);
}
//...pages {index, about}
//navbar's layout
