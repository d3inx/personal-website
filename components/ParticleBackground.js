import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import ParticlesConfig from "./config/Particles-config";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" canvasClassName="-z-50" init={particlesInit} options={ParticlesConfig}></Particles>;
};

export default ParticleBackground;
