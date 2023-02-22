import { useId, useState } from "react";
import { UserProps } from "../Card";
import { Project } from "../Project";

interface Props {
    sectionTitle: string;
    arrProjects: UserProps['projects'];
}

export function Projects({ sectionTitle, arrProjects }: Props) {
    const [openDesc, setOpenDescState] = useState<number>(-1);
    const handleProjectArrowClick = (project: number): void => {
        setOpenDescState(project == openDesc ? -1 : project);
    }

    return (
        <section className="flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-bold text-center text-primary-txt my-4">{sectionTitle}</h1>
            {arrProjects.map((project: ArrayElement<typeof arrProjects>) => {
                    return (
                        <Project key={useId()} isActive={openDesc == project.id} handleArrowClick={handleProjectArrowClick} {...project} />
                    )
                })
            }
        </section>
    );
}
