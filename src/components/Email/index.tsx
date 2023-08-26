import { Envelope } from "phosphor-react";
import { THEME } from "../../utils";

interface Props {
    email: string; 
}

export function Email({ email }: Props) {
    return (
        <section className="px-4 py-2 gap-2 bg-shape text-white text-md rounded-xl flex items-center justify-center">
            <Envelope color={THEME.colors.card} size={28} />
            <a target="_blank" href={`mailto:${email}`}>{email}</a>
        </section>
    );
}
