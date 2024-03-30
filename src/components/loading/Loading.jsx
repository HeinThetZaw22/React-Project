import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className=" w-screen h-screen flex gap-2 justify-center items-center">
        <p>Loading</p>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
};

export default Loading;
