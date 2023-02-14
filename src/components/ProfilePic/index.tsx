interface ProfilePicProps {
    pic: string;
}

interface Props extends ProfilePicProps {
    isFliped: boolean;
}

export function ProfilePic({ pic, isFliped }: Props) {
    /* TODO: Improve this component  */ 
    return (
        <section className={`${isFliped ? "w-0" : "w-44"} relative h-44 grid overflow-hidden place-items-center`}>
            <img className="z-10 w-11/12 h-11/12 border-2 border-pfp rounded-full" src={pic} />
            <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-circle" />
                <div className="absolute w-1/3 h-full bg-white left-0"></div>
            </div>
        </section>
    )  
}
