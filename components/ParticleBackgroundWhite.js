import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import ParticlesConfig from "./config/Particles-config2";

const ParticleBackgroundWhite = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" canvasClassName="-z-50" init={particlesInit} options={ParticlesConfig}></Particles>;
};

export default ParticleBackgroundWhite;
