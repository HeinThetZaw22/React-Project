import React from "react";
import Nav from "../../components/nav/Nav";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import EmptyLottie from "../../components/lottieComponents/Empty.lottie";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import AuthGuard from "../../components/Guard/Auth.Guard";

const HomePage = () => {
  return (
    <AuthGuard>
      <Sheet>
      <div className=" w-full">
        <Nav />
        <div className="px-20 lg:px-40">
          <div className="flex justify-end  mt-3">
            <div className="bg-blue-600 flex px-4 py-2 rounded-lg text-white items-center hover:bg-blue-700 space-x-2">
              <FaPlus />
              <SheetTrigger>Create Contact</SheetTrigger>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center border mt-3 h-[600px] rounded-lg bg-white">
            <EmptyLottie />
            <div className=" text-gray-400 flex gap-2 items-center">
              <p>There is no lists</p>
              <div className="flex space-x-2 justify-center items-center bg-white dark:invert">
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
        <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Information</SheetTitle>
        </SheetHeader>
        <div>
            
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className=" bg-blue-600 hover:bg-blue-700" type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      </div>
    </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
