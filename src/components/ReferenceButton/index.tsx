import { Globe, GithubLogo } from "phosphor-react";

const ICONS = {
    Website: Globe,
    Repository: GithubLogo
}

export interface Props {
    type: keyof typeof ICONS;
    website: string;
}

export function ReferenceButton({ type, website }: Props) {
    const IconComponent = ICONS[type];
    return (
        <a href={website} target="_blank" className="py-1 px-2 bg-shape rounded-lg flex items-center gap-2 text-white font-semibold text-xs">
            <IconComponent color="white" size={16} />
            <p>{[type]}</p>
        </a>
    );
}
