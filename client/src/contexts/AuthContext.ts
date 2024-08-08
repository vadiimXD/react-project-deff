import { createContext } from "react";
import { AuthType } from "../types/AuthType";

const AuthContext = createContext<AuthType | undefined>(undefined)

export {
    AuthContext
}