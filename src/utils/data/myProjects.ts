import { UserProps } from "../../@types/user";
import { ICONS, IMAGES } from "../index";

export const MY_PROJECTS: UserProps['arrProjects'] = [
    {
        title: "Kaori Bot",
        subtitle: "A chat bot for discord",
            description: "A anime bot for discord based on discord.js library.",
                image: IMAGES.Kaori,
        arrTech: [
            {
                color: "green",
                tech: "Node JS",
                icon: ICONS.NodeJS,
            },
            {
                color: "green",
                tech: "Mongo DB",
                icon: ICONS.MongoDB,
            },
            {
                color: "black",
                tech: "Express",
                icon: ICONS.Express,
            }
        ],
        arrLinks: [
            {
                website: "https://github.com/",
                type: "repository",
            }
        ]
    },
    {
        title: "Notes Share",
        subtitle: "A mobile study application",
        description: "Take photos, enjoy an online dossier to save, organize and share your notes and jottings with your colleagues and friends.",
        arrTech: [
            {
                color: "blue",
                tech: "React Native",
                icon: ICONS.React
            },
            {
                color: "black",
                tech: "Express",
                icon: ICONS.Express,
            },
            {
                color: "green",
                tech: "Node JS",
                icon: ICONS.NodeJS,
            },
            {
                color: "yellow",
                tech: "JS",
                icon: ICONS.JS,
            },
        ],
        arrLinks: [
            {
                website: "https://notes-share.vercel.app/",
                type: "website"
            }
        ]
    }
]
