import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserProps } from "../../@types/user";
import { Card } from "../../components/Card";
import { LoadingCircle } from "../../components/LoadingCircle";
import { getUserByUrl } from "../../utils";

// TODO: CardPage to Card, conflict because we already have the Card component
export function CardPage() {
    const [user, setUser] = useState<UserProps | false | null>(false);

    // TODO: Typesafety in useParams, quick draft
    type CardPageParams = {
        userurl: string;
    } 
    //
    const { 
        userurl
    } = useParams<CardPageParams>();

    if (userurl) {
        getUserByUrl(userurl).then((user: UserProps | null) => {
            setUser(user);
        });

        return (
            user != false ?
                user != null ? (
                    <Card user={user} />
                ) : (
                    <p>Err: User not found 404</p>
                )
            : (
                <LoadingCircle />
            )
        );
    } else {
        const nav = useNavigate();
        return <> { nav("/") } </>
    }

}

