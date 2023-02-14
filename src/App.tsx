import { useId, useState } from "react";

import { ArrowArcRight } from "phosphor-react";

import { ProjectProps, Project } from "./components/Project";
import { User } from "./components/User";
import { Description } from "./components/Description";

import { THEME, MY_PROJECTS, MY_LINKS  } from "./utils";

import ProfilePicture from "./assets/images/pfp.jpg";
import { Email } from "./components/Email";
import { SocialLinks } from "./components/SocialLinks";

function App() {
    const [isFliped, setFliped] = useState<boolean>(false);

    const handleFlipClick = (): void => {
       setFliped(!isFliped); 

       // Reset Open Card
       setOpenDescState(-1);
    }

    
    const [openDesc, setOpenDescState] = useState<number>(-1);
    const handleProjectArrowClick = (project: number): void => {
        setOpenDescState(project == openDesc ? -1 : project);
    }

    return (
            <div className="bg-card w-96 group rounded-xl flex flex-col items-center relative overflow-x-hidden">

                {/* TODO: Get a better icon for this action */} 
                <ArrowArcRight onClick={handleFlipClick} size={32} className="z-10 absolute right-8 top-8" color={THEME.colors.shape} />

                <div className={`p-8 h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFliped && "[transform:rotateY(180deg)]"}`}>

                    <div className="flex flex-col gap-5 items-center [backface-visibility:hidden]">

                        <div className={`${isFliped && "w-0"} relative w-44 h-44 grid overflow-hidden place-items-center`}>
                            <img className="z-10 w-11/12 h-11/12 border-2 border-pfp rounded-full" src={ProfilePicture} />
                            <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-circle" />
                                <div className="absolute w-1/3 h-full bg-white left-0"></div>
                            </div>
                        </div>

                        <User username="Ness.js" role="Developer" />
                        <Description description="Motivated young programmer seeking freelance projects. 
                                            Experienced with MERN & LAMP. Committed to quality results." />
                        <Email email="rmotafreitas@gmail.com" />
                        <SocialLinks arrSociaLinks={MY_LINKS} />

                    </div>

                    <section className="bg-card absolute h-full inset-0 w-full p-8 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex flex-col gap-4 justify-center">
                            <h1 className="text-3xl font-bold text-center text-primary-txt my-4">Some Projects</h1>
                            {MY_PROJECTS.map((project: ProjectProps) => {
                                    return (
                                        <Project key={useId()} isActive={openDesc == project.id} handleArrowClick={handleProjectArrowClick} {...project} />
                                    )
                                })
                            }
                       </div>
                    </section>
                  
                </div>
            </div>
  );
}

export default App;
