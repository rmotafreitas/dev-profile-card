import { SocialLinkProps } from "../../@types/user";
import { THEME } from "../../utils";
import { socialLinkMaker, SocialMediaInfo } from "../../utils";

export function SocialLink({ icon, username }: SocialLinkProps) {
    const Icon = SocialMediaInfo[icon].icon;
    return (
        <a target="_blank" href={socialLinkMaker(icon, username)}>
            <Icon color={THEME.colors.shape} size={THEME.size.shape} />
        </a>
    )
}
