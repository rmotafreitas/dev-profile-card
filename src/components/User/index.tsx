interface Props {
    username: string;
    role: string;
}

export function User({ username, role }: Props) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-primary-txt">{username}</p>
            <p className="text-xl text-shape">{role}</p>
        </div>
    );
}
