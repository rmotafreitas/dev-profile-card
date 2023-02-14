interface Props {
    email: string;
}

export function Email({ email }: Props) {
    return (
        <section className="px-4 py-2 bg-shape text-white text-lg rounded-xl">
            <a target="_blank" href={`mailto:${email}`}>{email}</a>
        </section>
    );
}
