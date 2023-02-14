interface Props {
    description: string;
}

export function Description({ description }: Props) {
    return (
        <p className="text-center text-lg text-primary-txt">{description}</p>
    );
}
