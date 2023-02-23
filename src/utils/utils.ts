import { GithubLogo, Globe, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { FiverrLogo } from "../components/FiverrLogo";

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const socialLinkMaker = (platform: keyof typeof SocialMediaInfo, username: string): string => {
    return SocialMediaInfo[platform].url + username;
}

// TODO: Find a better locaiton for SocialMediaInfo and ProjectButtonsIcons
const SocialMediaInfo = {
    github: {
        url: "https://www.github.com/",
        icon: GithubLogo,
    },
    linkedin: {
        url: "https://www.linkedin.com/in/",
        icon: LinkedinLogo,
    },
    twitter: {
        url: "https://twitter.com/",
        icon: TwitterLogo,
    },
    fiverr: {
        url: "https://www.fiverr.com/",
        icon: FiverrLogo
    },
}
const ProjectButtonsIcons = {
    website: Globe,
    repository: GithubLogo
}


export {
    capitalize,
    socialLinkMaker,
    SocialMediaInfo,
    ProjectButtonsIcons
}
