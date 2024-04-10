import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { useGetProfileQuery, useLogoutMutation } from "../../store/service/endpoints/auth.endpoints";
import {toast} from 'sonner';
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const nav = useNavigate();
  const {data} = useGetProfileQuery();
  const [logoutFun] = useLogoutMutation();
  const handleLogout = async () => {
    //   logoutFun();
    //  toast.info("logout successful")
    //  nav("/");
    try {
      await logoutFun(); // Wait for logout process to complete
      toast.info("logout successful");
      nav("/");
    } catch (error) {
      // Handle any errors that occur during logout
      console.error("Logout error:", error);
      // Optionally, you can show an error message to the user
      toast.error("An error occurred during logout");
    }

  }
  return (
    <div className=" bg-white border-b py-2 lg:px-40 px-20 w-full">
      <div className=" flex items-center justify-between">
        <h1 className=" font-sans font-semibold uppercase">{data?.user?.name}</h1>
        <div className="flex items-center gap-2">
          <button onClick={handleLogout} className=" border border-red-500 hover:ring-2 hover:ring-red-500 rounded-lg px-4 py-2">Logout</button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;
