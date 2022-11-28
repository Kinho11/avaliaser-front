import { createContext, useState } from "react";

import { IAuth, IChildren } from "../utils/interface";

export const AuthContext = createContext({} as IAuth);

export const AuthProvider = ({ children }: IChildren) => {
  const [cargo, setCargo] = useState<string>("");

  return (
    <AuthContext.Provider value={{ cargo }}>
      {children}
    </AuthContext.Provider>
  );
};