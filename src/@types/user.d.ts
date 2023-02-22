import { SocialMediaInfo } from "../utils";

declare type User = {
    user: {
        username: string;
        role: string;
    }
    pic: string;
    email: string; 
    description: string; 
    links: SocialLinkProps[]; 
    projects: ProjectProps[]; 
} 

