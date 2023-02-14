import { useId } from "react";
import { Props as SocialLinkProps, SocialLink } from "../SocialLink";

interface Props {
    arrSociaLinks: SocialLinkProps[];
}

export function SocialLinks({ arrSociaLinks }: Props) {
    return (
        <section className="flex gap-4 items-center">
            {arrSociaLinks &&
                arrSociaLinks.map((link: SocialLinkProps) => {
                    return (
                        <SocialLink key={useId()} {...link} />
                    );
                })
            }
        </section>
    )
}
