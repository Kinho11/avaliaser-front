import { createContext, useState } from "react";

import { IAuth, TChildren } from "../utils/interface";

export const AuthContext = createContext({} as IAuth);

export const AuthProvider = ({ children }: TChildren) => {
  const [cargo, setCargo] = useState<string>("");

  return (
    <AuthContext.Provider value={{ cargo }}>
      {children}
    </AuthContext.Provider>
  );
};