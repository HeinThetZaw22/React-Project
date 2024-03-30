import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const Nav = () => {
  return (
    <div className=" bg-white border-b py-2 lg:px-40 px-20 w-full">
      <div className=" flex items-center justify-between">
        <h1 className=" font-sans font-semibold">HEIN</h1>
        <div>
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
