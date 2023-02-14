interface Props {
    description: string;
}

export function Description({ description }: Props) {
    return (
        <section>
            <p className="text-center text-lg text-primary-txt">{description}</p>
        </section>
    );
}
