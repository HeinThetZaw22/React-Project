import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import { FaPlus } from "react-icons/fa";
import EmptyLottie from "../../components/lottieComponents/Empty.lottie";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import AuthGuard from "../../components/Guard/Auth.Guard";
import FormTool from "./tool/Form.tool";
import { useGetContactQuery } from "../../store/service/endpoints/contact.endpoints";
import DataTableTool from "./tool/DataTable.tool";

const HomePage = () => {
  const [editData, setEditData] = useState({ edit: false, data: null });
  const { data } = useGetContactQuery();
  // console.log(data);
  const handleEdit = (id) => {
    const apiData = data?.contacts?.data;
    const finder = apiData.find((i) => i.id === id);
    setEditData({ edit: true, data: finder });
    // console.log(finder);
  };
  const handleClose = () => {
    // console.log("close");
    setEditData({ edit: false, data: null });
  };
  // const handleOverlay = () => {
  //   console.log("overlay");
  // }
  return (
    <AuthGuard>
      <Sheet>
        <div className=" w-full">
          <Nav />
          <div className="px-20 lg:px-40">
            <div className="flex justify-end  mt-3">
              <div className="bg-blue-500 flex px-4 py-2 rounded-lg text-white items-center hover:bg-blue-700 space-x-2">
                <FaPlus />
                <SheetTrigger>Create Contact</SheetTrigger>
              </div>
            </div>
            {data?.contacts?.data?.length > 0 ? (
              <DataTableTool
                handleEdit={handleEdit}
                data={data?.contacts?.data}
              />
            ) : (
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
            )}
          </div>
          <SheetContent
            
            onOverlayClick={handleClose}
            onClose={handleClose}
            className="p-10"
          >
            <SheetHeader>
              <SheetTitle>Contact Information</SheetTitle>
            </SheetHeader>
            <FormTool handleClose={handleClose} editData={editData} />
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
