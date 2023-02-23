import { ReferenceButton } from "../ReferenceButton";

interface Props extends ProjectProps {
    handleArrowClick: (project: number) => void;
    isActive: boolean;
}

import { THEME } from "../../utils";
import { CaretDown } from "phosphor-react";
import { Chip } from "../Chip";
import { useId } from "react";
import { ProjectLinkProps, ProjectProps, TechProps } from "../../@types/user";

export function Project({ id, title, subtitle, description, image, arrTech, handleArrowClick, isActive, arrLinks }: Props) {
    return (
        <div className="flex flex-col gap-4 shadow-md p-3 rounded-2xl">
            <div className="flex gap-1 items-center"> 
                {image && (<img className="w-14 h-14 rounded-full border-shape border-2 mr-2" src={image} />)}
                <div className="flex justify-between items-center w-full z-50">
                    <div className="flex flex-col">
                        <p className="text-xl text-primary-txt font-semibold">{title}</p>
                        <p className="text-lg text-primary-txt">{subtitle}</p>
                    </div>
                    <CaretDown size={24} onClick={() => handleArrowClick(id)} color={THEME.colors.shape} className={`${!isActive && "rotate-180"} ease-in-out duration-300`} />
                </div>
            </div>
            <div className={`${!isActive && "hidden"} flex flex-col gap-2`}>
                <p className="text-md">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {arrTech && 
                        arrTech.map((tech: TechProps) => {
                            return (
                                <Chip key={useId()} {...tech} />
                            )
                        })
                    }
                </div>
                <div className="flex gap-2">
                    {arrLinks &&
                        arrLinks.map((link: ProjectLinkProps) => {
                            return (
                                <ReferenceButton key={useId()} {...link} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
