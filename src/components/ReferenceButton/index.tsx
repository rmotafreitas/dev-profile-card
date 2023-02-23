import { ProjectLink } from "../../@types/user";
import { capitalize, ProjectButtonsIcons } from "../../utils";

export function ReferenceButton({ type, website }: ProjectLink) {
    const IconComponent = ProjectButtonsIcons[type];

    return (
        <a href={website} target="_blank" className="py-1 px-2 bg-shape rounded-lg flex items-center gap-2 text-white font-semibold text-xs">
            <IconComponent color="white" size={16} />
            <p>{capitalize([type].toString())}</p>
        </a>
    );
}
