import { Navigate, useParams } from "react-router-dom";
import { getUser } from "../utils/authUtil";

import { AuthType } from "../types/AuthType";

export default function OwnerGuard(props: any) {
    const params = useParams()
    const user: AuthType = getUser()

    return (
        user?.userId == params.ownerId ? <>{props.children}</> : <Navigate to={"/"} />
    );
}

