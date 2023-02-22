import { IMAGES, MY_LINKS, MY_PROJECTS } from "../"; 
import { UserProps } from "../../components/Card";

export const MY_USER: UserProps = {
    user: {
        username: "Ness.js",
        role: "Developer",
    },
    pic: IMAGES.Pfp, 
    email: "rmotafreitas@gmail.com",
    description: "Motivated young programmer seeking freelance projects. Experienced with MERN & LAMP. Committed to quality results.", 
    links: MY_LINKS, 
    projects: MY_PROJECTS 
}
