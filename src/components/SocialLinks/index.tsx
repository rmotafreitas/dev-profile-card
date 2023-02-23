import { useId } from "react";
import { UserProps } from "../../@types/user";
import { SocialLink } from "../SocialLink";

interface Props {
    arrSociaLinks: UserProps['arrLinks'];
}

export function SocialLinks({ arrSociaLinks }: Props) {
    return (
        <section className="flex gap-4 items-center">
            {arrSociaLinks &&
                arrSociaLinks.map((link: ArrayElement<typeof arrSociaLinks>) => {
                    return (
                        <SocialLink key={useId()} {...link} />
                    );
                })
            }
        </section>
    )
}
