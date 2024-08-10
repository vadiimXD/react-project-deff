import { createContext, useState } from "react";
import { AuthType } from "../types/AuthType";

export const AuthContext = createContext<AuthType | undefined>(undefined)


export function AuthContextProvider(props: any) {

  const [authState, setAuthState] = useState<any>({})

  const contextData: AuthType | undefined = {
    userId: authState.userId,
    token: authState.token,
    email: authState.email,
    setState: setAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  )
}


