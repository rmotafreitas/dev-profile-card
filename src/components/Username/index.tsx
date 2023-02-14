interface Props {
    username: string;
}

export function Username({ username }: Props) {
    return (
        <p className="font-bold text-3xl text-primary-txt">{username}</p>
    );
}
