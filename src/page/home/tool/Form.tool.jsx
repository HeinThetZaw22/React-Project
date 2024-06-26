import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import { SheetClose } from "../../../components/ui/sheet";
import { useCreateContactMutation, useUpdataContactMutation } from "../../../store/service/endpoints/contact.endpoints";
import { toast } from "sonner";



const FormTool = ({editData, handleClose}) => {
  const CloseRef = useRef();
  const [updateFun, apiData] = useUpdataContactMutation();
  // console.log(updateFun, apiData);
  const [createFun, { data, isError, isLoading }] = useCreateContactMutation();
  // console.log(fun, data);
  const initialValue = {
    name: editData?.data?.name || "",
    email: editData?.data?.email || "",
    phone: editData?.data?.phone || "",
    address: editData?.data?.address || "",
  };
  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("Invalid email address"),
    phone: yup
      .string()
      .required("phone is required")
      .min(9, "It should be valid phone number")
      .max(11, "It should be valid phone number"),
    address: yup.string().required("address is required"),
  });
  const handleSubmit = async (values) => {
    if(editData?.edit){
        await updateFun({id: editData?.data?.id, ...values})
        toast.success("Updated successfully");
    }else{
      
      await createFun(values);
      toast.success("Created successfully");
    }
    CloseRef.current.click();
  };
  
  return (
    <div className="h-full">
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting }) => (
          <Form className=" mt-5 h-full flex flex-col justify-between ">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label className=" text-sm font-serif" htmlFor="name">
                  Enter your name
                </label>
                <Field
                  type="name"
                  name="name"
                  className="text-sm font-serif px-4 py-2 rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="name"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="name"
                  component="p"
                />
              </div>
              <div className="flex flex-col">
                <label className=" text-sm font-serif" htmlFor="email">
                  Enter your email
                </label>

                <Field
                  type="email"
                  name="email"
                  className="text-sm px-4 font-serif py-2 rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="email"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="email"
                  component="p"
                />
              </div>
              <div className="flex flex-col">
                <label className=" text-sm  font-serif" htmlFor="phone">
                  Phone Number
                </label>

                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="text-sm px-4 py-2 font-serif rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="phone"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="phone"
                  component="p"
                />
              </div>
              <div className="flex flex-col">
                <label className=" text-sm  font-serif" htmlFor="address">
                  Address
                </label>

                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="text-sm px-4 py-2 font-serif rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="address"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="address"
                  component="p"
                />
              </div>
            </div>
            <div className="flex w-full mb-10 gap-3">
              <SheetClose asChild>
                <button
                  type="button"
                  onClick={handleClose}
                  ref={CloseRef}
                  className="border hover:ring-2 flex-grow font-serif transition-all rounded-lg px-4 py-2 border-blue-400 focus:ring-2 "
                >
                  Cancel
                </button>
              </SheetClose>

              <button
                disabled={isSubmitting}
                type="submit"
                className="border box-border flex-grow font-serif hover:bg-blue-700 text-white bg-blue-600 transition-all rounded-lg px-4 py-2 border-blue-400 focus:ring-2 "
              >
                {editData?.edit ? 
                <>
                {isSubmitting ? (
                  <div className="flex gap-2 items-center justify-center">
                    <span className="ml-1">Updating</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600  fill-slate-800"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  "Update"
                )}
                </>
                 : 
                <>
                {isSubmitting ? (
                  <div className="flex gap-2 items-center justify-center">
                    <span className="ml-1">Creating</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600  fill-slate-800"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  "Create"
                )}
                </>
                }
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormTool;
