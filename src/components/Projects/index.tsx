import { useId, useState } from "react";
import { ProjectProps, UserProps } from "../../@types/user";
import { Project } from "../Project";

interface Props {
    sectionTitle: string;
    arrProjects: UserProps['arrProjects'];
}

export function Projects({ sectionTitle, arrProjects }: Props) {
    const [openDesc, setOpenDescState] = useState<number>(-1);
    const handleProjectArrowClick = (project: number): void => {
        setOpenDescState(project == openDesc ? -1 : project);
    }

    return (
        <section className="flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-bold text-center text-primary-txt my-4">{sectionTitle}</h1>
            {arrProjects.map((project: ProjectProps, i: number) => {
                    return (
                        <Project key={useId()} id={i} isActive={openDesc == i} handleArrowClick={handleProjectArrowClick} {...project} />
                    )
                })
            }
        </section>
    );
}
