interface Props {
    email: string;
}

export function Email({ email }: Props) {
    return (
        <a className="px-8 py-2 bg-shape text-white text-lg rounded-xl" target="_blank" href={`mailto:${email}`}>{email}</a>
    );
}
