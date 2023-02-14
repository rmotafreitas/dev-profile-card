import { useState } from "react";

import { ArrowArcRight } from "phosphor-react";

import { User } from "./components/User";
import { Description } from "./components/Description";

import { THEME, MY_PROJECTS, MY_LINKS  } from "./utils";

import { Email } from "./components/Email";
import { SocialLinks } from "./components/SocialLinks";

import ProfilePicture from "./assets/images/pfp.jpg";
import { ProfilePic } from "./components/ProfilePic";
import { Projects } from "./components/Projects";

function App() {
    const [isFliped, setFliped] = useState<boolean>(false);

    const handleFlipClick = (): void => {
       setFliped(!isFliped); 

       // Reset Open Card
       // Todo: setOpenDescState(-1);
    }

    return (
            <section className="bg-card w-96 group rounded-xl flex flex-col items-center relative overflow-x-hidden">

                {/* TODO: Get a better icon for this action */} 
                <ArrowArcRight onClick={handleFlipClick} size={32} className="z-10 absolute right-8 top-8" color={THEME.colors.shape} />

                <div className={`p-8 h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFliped && "[transform:rotateY(180deg)]"}`}>

                    <section className="flex flex-col gap-5 items-center [backface-visibility:hidden]">
                    
                        <User username="Ness.js" role="Developer" />
                        <ProfilePic pic={ProfilePicture} isFliped={isFliped} /> 
                        <Description description="Motivated young programmer seeking freelance projects. 
                                            Experienced with MERN & LAMP. Committed to quality results." />
                        <Email email="rmotafreitas@gmail.com" />
                        <SocialLinks arrSociaLinks={MY_LINKS} />

                    </section>

                    <section className="bg-card absolute h-full inset-0 w-full p-8 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">

                        <Projects sectionTitle="Some projects" arrProjects={MY_PROJECTS} />

                    </section>
                  
                </div>
            </section>
  );
}

export default App;
