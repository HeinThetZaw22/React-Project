import React, { useEffect } from "react";
import { useGetProfileQuery } from "../../store/service/endpoints/auth.endpoints";
import Loading from "../loading/Loading";
import {useNavigate} from 'react-router-dom'
const AuthGuard = ({ check, token, path="/", children }) => {
    const nav= useNavigate();
  const { data, isError, error, isLoading } = useGetProfileQuery();
  useEffect(() => {
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    }else if(isError){
        console.log(error);
        nav(path);
    }else if(data && token){
      console.log(token);
        nav('/home')
    }
  }, [check, isError, data]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthGuard;
