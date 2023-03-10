import { SocialMediaInfo, ProjectButtonsIcons } from "../utils";
import { TEXT_COLORS } from "../utils"; 

declare interface ProjectLinkProps {
    type: keyof typeof ProjectButtonsIcons;
    website: string;
}

declare interface SocialLinkProps {
    icon: keyof typeof SocialMediaInfo, 
    username: string;
}

declare interface TechProps {
    icon?: string;
    color?: keyof typeof TEXT_COLORS;
    tech: string;
} 

declare interface ProjectProps {
    title: string;
    subtitle: string;
    description?: string;
    image?: string;
    arrTech?: TechProps[];
    arrLinks?: ProjectLinkProps[]; 
}

// Todo: Define max values
declare interface UserProps {
    user: {
        username: string;
        role: string;
    };
    url: string;
    pic: string;
    email: string; 
    description: string; 
    arrLinks: SocialLinkProps[]; 
    arrProjects: ProjectProps[3]; // Max 3 projects
}

