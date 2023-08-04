import React from "react";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";
import AuthContext from "./authContext";

interface Props {
  children: React.ReactNode;
}

interface Auth {
  _id: string;
}

const AuthProvider = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  if (!token) return <> {children} </>;
  const { _id } = jwtDecode<Auth>(token);
  const { data: user } = useAuth(_id);

  if (!user) return <>{children}</>;
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
