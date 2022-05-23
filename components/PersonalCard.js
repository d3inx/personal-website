import Image from "next/image";
import myimg from "./../public/img/ef712223565a3e97403b988c0bd39bc3.jpg";
import ParticleBackground from "./ParticleBackground";

const PersonalCard = () => {
  return (
    <div className="container flex flex-col items-center justify-center my-20">
      <div className="bg-neutral-100/50 backdrop-blur-sm ring-1 w-full lg:w-2/4 py-12 ring-neutral-300 text-neutral-900 rounded-xl flex flex-col md:flex-row items-start justify-between">
       
        <div className="w-full break-all h-full flex text-center md:pl-8  flex-col space-y-8 md:space-y-12  lg:space-y-20">
          <div className="">
            <div className="font-ceraRoundProLight text-2xl">
              Hi I&apos;m <br />{" "}
              <span className="font-ceraRoundProBold text-5xl">
                Reza Manouchehri
              </span>
            </div>
            <div className="text-2xl text-neutral-800">Frontend Developer</div>
          </div>
          <div className="font-ceraRoundProLight text-xl flex flex-col space-y-4">
            <span>Age: 18</span>
            <span>Experience: 5 months</span>
            <span>Phone: +98 903 232 6619</span>
            <span>Email: mr.reza.rm8224@gmail.com</span>
            <span>Address: Iran,Shiraz</span>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100/50 backdrop-blur-sm ring-1 w-full lg:w-4/5 mt-20 px-4 lg:px-12 py-12 ring-neutral-300 text-neutral-900 rounded-xl flex flex-col md:flex-row items-start justify-between">
       
        <div className="w-full break-all h-full flex text-center md:pl-8  flex-col space-y-8 md:space-y-10  lg:space-y-16">
          <div className="">
            <div className="font-ceraRoundProBold text-5xl">
                Biography
            </div>
          </div>
          <div className="font-ceraRoundProNormal text-xl flex flex-col space-y-4 break-words">
            <div className="capitalize">i&apos;m a junior frontend developer i start learning frontend two years ago. I am studying for an associate degree at Shahid Bahonar University.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
