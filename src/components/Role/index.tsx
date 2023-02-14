interface Props {
    role: string;
}

export function Role({ role }: Props) {
    return (
        <p className="text-xl text-shape">{role}</p>
    );
}
