import { Role } from "../Role";
import { Username } from "../Username";

interface Props {
    username: string;
    role: string;
}

export function User({ username, role }: Props) {
    return (
        <section className="flex flex-col items-center">
            <Username username={username} />
            <Role role={role} />
        </section>
    );
}
