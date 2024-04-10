import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import SweetAlert2 from "react-sweetalert2";
import { useDeleteContactMutation } from "../../../store/service/endpoints/contact.endpoints";
import { SheetTrigger } from "../../../components/ui/sheet";
import {toast} from 'sonner'
import { Loader2 } from "lucide-react";

const DataTableTool = ({ data, handleEdit }) => {
  const [deletingId, setDeletingId] = useState(null);
  const [deleteFun, { isLoading }] = useDeleteContactMutation();
  const [swalProps, setSwalProps] = useState({});
  const handleDelete = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure to delete?",
      text: "You can't revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      onResolve: () => {
        setSwalProps({
          show: false,
        });
      },
      onConfirm: async () => {
        setDeletingId(id);

        await deleteFun(id);
        toast.success("Deleted successfully");
        setSwalProps({
          show: false,
        });
        setDeletingId(null);

      },
    });
  };

  // console.log(data);
  return (
    <div className=" mt-3 bg-white p-3 shadow-md rounded-xl">
      
        <Table>
          <TableHeader>
            <TableRow className=" bg-blue-500 hover:bg-blue-700">
              {/* <TableHead className=" rounded-l-xl">Id</TableHead> */}
              <TableHead className="rounded-l-xl">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="rounded-r-xl">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((i) => (
              <TableRow key={i.id} className="hover:bg-gray-100">
                {/* <TableCell>{i.id}</TableCell> */}
                <TableCell className="max-md:text-xs">{i.name}</TableCell>
                <TableCell className="max-md:text-xs">{i.phone}</TableCell>
                <TableCell className="max-md:text-xs">{i.email}</TableCell>
                <TableCell className="max-md:text-xs">{i.address}</TableCell>
                <TableCell>
                  <div className="flex gap-2 text-lg items-center justify-center">
                    <div className="flex p-1 ">
                    <SheetTrigger>
                      <MdOutlineEdit onClick={handleEdit.bind(null, i.id)} />
                    </SheetTrigger>
                    </div>|
                    <div className="  p-1">
                    {deletingId === i.id ? <Loader2 className=" h-3 w-3 animate-spin" /> : 
                    <RiDeleteBin6Line
                    onClick={handleDelete.bind(null, i.id)}
                    className=" text-red-500"
                  />
                    }
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            <SweetAlert2 {...swalProps} />
          </TableBody>
        </Table>

    </div>
  );
};

export default DataTableTool;
