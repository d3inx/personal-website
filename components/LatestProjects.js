import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

const LatestProjects = () => {
  const [projects] = useState([
    {
      name: "fortnite stats",
      link: "https://d3inx-fortnitestats.netlify.app",
      img: "/img/projects/screencapture-d3inx-fortnitestats-netlify-app-2022-05-21-20_43_48.png",
    },
    {
      name: "exchange coins",
      link: "https://ephemeral-zuccutto-5649c9.netlify.app",
      img: "/img/projects/screencapture-ephemeral-zuccutto-5649c9-netlify-app.png",
    },
    {
      name: "shopping cart",
      link: "https://incomparable-fudge-b10e24.netlify.app",
      img: "/img/projects/screencapture-incomparable-fudge-b10e24-netlify-app-2022-05-21-20_52_29.png",
    },
    {
      name: "todo app",
      link: "https://famous-sundae-49f89b.netlify.app",
      img: "/img/projects/screencapture-famous-sundae-49f89b-netlify-app-2022-05-21-20_56_04.png",
    },
    {
      name: "weather",
      link: "https://heartfelt-scone-06d6df.netlify.app",
      img: "/img/projects/screencapture-heartfelt-scone-06d6df-netlify-app-2022-05-21-20_54_22.png",
    },
    {
      name: "note list",
      link: "https://famous-kheer-56314d.netlify.app",
      img: "/img/projects/screencapture-famous-kheer-56314d-netlify-app-2022-05-21-20_57_16.png",
    },
  ]);
  return (
    <div className="container mx-auto flex flex-col items-center my-20 z-50">
      <div className="lg:self-start text-center lg:text-left text-5xl lg:text-8xl pb-8 text-neutral-900 font-ceraRoundProBold">
        Latest <br /> Projects{" "}
      </div>
      <div className="flex flex-wrap justify-between w-full lg:w-2/3">
        {
          projects.map(project => (
            <Link key={project.name} href={project.link}>
              <a className="w-1/2 lg:w-1/3 p-4 md:p-12 rounded-3xl">
              <Image className="rounded-t-3xl object-cover" src={project.img} width={200} height={150} layout='responsive' alt='' />
              <div className="bg-neutral-100/70 py-2 rounded-b-3xl backdrop-blur-sm text-neutral-900 text-base font-ceraRoundProBold text-center">{project.name}</div>
            </a>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default LatestProjects;
