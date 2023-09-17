import { useState } from "react";

import { ArrowArcRight } from "phosphor-react";
import { THEME } from "../../utils";

import { User } from "../User";
import { ProfilePic } from "../ProfilePic";
import { Description } from "../Description";
import { Email } from "../Email";
import { SocialLinks } from "../SocialLinks";
import { Projects } from "../Projects";
import { UserProps } from "../../@types/user";

interface Props {
    user: UserProps;
};

export function Card({ user }: Props) {
    const [isFliped, setFliped] = useState<boolean>(false);

    const handleFlipClick = (): void => {
       setFliped(!isFliped); 

       // Reset Open project chip 
       // Todo: setOpenDescState(-1);
    }

    // This is the card component
    return (
        <section className="bg-card w-96 group rounded-xl flex flex-col items-center relative overflow-x-hidden">

            {/* TODO: Get a better icon for this action */} 
            <ArrowArcRight onClick={handleFlipClick} size={32} className="z-10 absolute right-8 top-8" color={THEME.colors.shape} />

            <div className={`p-8 h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFliped && "[transform:rotateY(180deg)]"}`}>

                {/* Front card */}
                <section className="flex flex-col gap-5 items-center [backface-visibility:hidden]">
                    <User {...user.user} />
                    <ProfilePic pic={user.pic} isFliped={isFliped} /> 
                    <Description description={user.description} />
                    <Email email={user.email} />
                    <SocialLinks arrSociaLinks={user.arrLinks} />

                </section>

                {/* Back card */}
                <section className="bg-card absolute h-full inset-0 w-full p-8 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <Projects sectionTitle="Some projects" arrProjects={user.arrProjects} />
                </section>
            </div>
        </section>
    );
}
