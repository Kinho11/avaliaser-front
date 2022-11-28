import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const RedefinirSenha = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <>
      <h1>Redefinir</h1>
    </>
  );
};
