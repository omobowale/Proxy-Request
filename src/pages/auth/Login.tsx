import React, { useState } from "react";
import CustomInputField from "../../commons/CustomInputField";
import CustomButton from "../../commons/CustomButton";
import CustomTokenInput from "../../commons/CustomTokenInput";
import { Form, Formik } from "formik";

function Login() {
  const [token, setToken] = useState("");

  return (
    <div className="">
      <div className="flex gap-10 items-center justify-between px-10 w-[90%] mx-auto mt-5">
        <div className="w-1/2 text-left">
          <div className="px-10 mt-20 w-[90%]">
            <p className="text-lg font-[600]">
              Proxy Request Approval Workflow
            </p>
            <p className="font-[500] text-[14px] mb-10">
              Enter credentials to login
            </p>

            <Formik initialValues={{}} onSubmit={(values) => {
              
            }}>
              <Form>
                <CustomInputField
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  label="Username"
                />

                <CustomInputField
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  label="Password"
                />

                <CustomTokenInput
                  value={token}
                  onChange={setToken}
                  name="token"
                  numberOfChars={8}
                  label="Token"
                />

                <CustomButton type={"submit"} label="Submit" />
              </Form>
            </Formik>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/assets/login-hero.png" alt="proxy-request-approval-flow" />
        </div>
      </div>
    </div>
  );
}

export default Login;
