import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { MY_USER } from "../../utils";

// TODO: CardPage to Card, conflict because we already have the Card component
export function CardPage() {
    // TODO: Typesafety in useParams, quick draft
    type CardPageParams = {
        userurl: string;
    } 
    //
    const { 
        userurl
    } = useParams<CardPageParams>();

    return (
        userurl && userurl in MY_USER ? (
            <Card user={MY_USER[userurl]} />
        ) : (
            <p>Err: User not found 404</p>
        )
    );
}
