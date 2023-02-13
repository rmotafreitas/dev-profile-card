import ProfilePicture from "./assets/images/pfp.jpg";
import { Dispatch, useId, useMemo, useState } from "react";

import { GithubLogo, TwitterLogo, LinkedinLogo, ArrowArcRight } from "phosphor-react";

import { FiverrLogo } from "./components/FiverrLogo"; 

import { THEME, MY_PROJECTS  } from "./utils";

import { ProjectProps } from "./components/Project";
import { Project } from "./components/Project"; 

function App() {
    const [isFliped, setFliped] = useState<boolean>(false);

    const handleFlipClick = (): void => {
       setFliped(!isFliped); 
    }

    
    const [openDesc, setOpenDescState] = useState<number>(-1);
    const handleProjectArrowClick = (project: number): void => {
        setOpenDescState(project == openDesc ? -1 : project);
    }

    return (
            <div className="bg-card w-96 group rounded-xl flex flex-col items-center relative overflow-y-auto">

                {/* TODO: Get a better icon for this action */} 
                <ArrowArcRight onClick={handleFlipClick} size={32} className="z-10 absolute right-8 top-8" color={THEME.colors.shape} />

                <div className={`relative p-8 h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFliped && "[transform:rotateY(180deg)]"}`}>

                    <div className="flex flex-col items-center">
                        <div className="relative w-60 h-60 grid overflow-hidden place-items-center">
                            <img className="z-10 w-2/3 h-2/3 border-2 border-pfp rounded-full" src={ProfilePicture} />
                            <div className="absolute w-44 h-44 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-circle" />
                                <div className="absolute w-1/3 h-full bg-white left-0"></div>
                            </div>
                        </div>
                        <p className="font-bold text-3xl text-primary-txt">Ness.js</p>
                        <p className="text-xl text-shape">Developer</p>
                        <p className="text-center mt-4 text-lg text-primary-txt">Motivated young programmer seeking freelance projects. 
                                                                    Experienced with MERN & LAMP. Committed to quality results.</p>
                        <a className="px-8 py-2 bg-shape text-white text-lg rounded-xl mt-8 mb-4" href="#">rmotafreitas@gmail.com</a>
                        <div className="flex gap-4 items-center">
                            <GithubLogo size={36} color={THEME.colors.shape} />
                            <TwitterLogo size={36} color={THEME.colors.shape} />
                            <LinkedinLogo size={36} color={THEME.colors.shape} />
                            <FiverrLogo className="fill-shape h-8 w-8"/>
                        </div>
                    </div>

                    <div className="z-20 bg-card absolute inset-0 h-full w-full p-8 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex flex-col gap-4 justify-center">
                            <h1 className="text-3xl font-bold text-center text-primary-txt my-4">Some Projects</h1>
                            {MY_PROJECTS.map((project: ProjectProps) => {
                                    return (
                                        <Project key={useId()} isActive={openDesc == project.id} handleArrowClick={handleProjectArrowClick} {...project} />
                                    )
                                })
                            }
                       </div>
                    </div>
                  
                </div>
            </div>
  );
}
export default App;
