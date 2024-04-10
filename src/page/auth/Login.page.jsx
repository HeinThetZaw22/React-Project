import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useLoginMutation } from "../../store/service/endpoints/auth.endpoints";
import AuthGuard from "../../components/Guard/Auth.Guard";
import { useNavigate } from "react-router-dom";
import { toast} from 'sonner'


const LoginPage = () => {
  const [loginFun, data] = useLoginMutation();
  const nav = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  // console.log(fun, data);
  const initialValue = {
    email: "",
    password: "",
  };
  const validateSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "At least 8 characters"),
  });
  const handleSubmit = async (values, { setSubmitting }) => {
    if (!formSubmitted) {
      await loginFun(values);
      setFormSubmitted(true);
    }
    toast.success("You have login successfully");

    setSubmitting(false);
  };
  useEffect(() => {
    if (data?.data?.success) {
      nav("/home");
    }
  }, [data]);
  return (
    <AuthGuard check={data?.data?.success} token={data?.data?.token}>
      <div>
        <div className="  h-screen flex justify-center items-center">
          <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ isSubmitting }) => (
              <Form className=" bg-white shadow-lg backdrop-blur-sm rounded-lg flex flex-col p-10">
                <div className=" mb-5 gap-3 flex items-center justify-between">
                  <h1 className=" text-xl font-sans font-semibold">
                    Login here
                  </h1>
                  <p className=" text-sm text-slate-950 underline hover:text-blue-600">
                    <Link to={"/register"}>I don't have an account</Link>
                  </p>
                </div>
                <label className=" font-serif" htmlFor="email">
                  Enter your email
                </label>
                <Field
                  type="email"
                  name="email"
                  className=" text-sm font-serif px-4 py-2 mb-5 rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="email"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="email"
                  component="p"
                />
                <label className=" font-serif" htmlFor="password">
                  Enter your password
                </label>

                <Field
                  type="password"
                  name="password"
                  className="text-sm px-4 font-serif py-2 mb-5 rounded-lg border border-blue-400 focus:ring-2 outline-none"
                  placeholder="password"
                />
                <ErrorMessage
                  className=" text-red-700 text-sm"
                  name="password"
                  component="p"
                />
                <button
                  disabled={isSubmitting || formSubmitted}
                  type="submit"
                  className=" border hover:bg-blue-700 font-serif hover:text-white bg-blue-600 rounded-lg px-4 py-2 border-blue-400 focus:ring-2 mt-3 "
                >
                  {isSubmitting ? (
                    <div className="flex gap-2 items-center justify-center">
                      <span className="ml-1">Signing In</span>

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
                    "Sign In"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthGuard>
  );
};

export default LoginPage;
