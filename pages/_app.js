import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParticleBackground />
      <div className="text-base text-neutral-900 md:text-xl mx-auto flex flex-col items-center">
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}

export default MyApp;
