import { THEME } from "../../utils";
import { socialLinkMaker, SocialMediaInfo } from "../../utils";

export interface Props {
    icon: keyof typeof SocialMediaInfo, 
    username: string;
}

export function SocialLink({ icon, username }: Props) {
    const Icon = SocialMediaInfo[icon].icon;
    return (
        <a target="_blank" href={socialLinkMaker(icon, username)}>
            <Icon color={THEME.colors.shape} size={THEME.size.shape} />
        </a>
    )
}
