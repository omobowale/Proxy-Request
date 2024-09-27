import React, { useState } from "react";
import CustomInputField from "../../commons/CustomInputField";
import CustomButton from "../../commons/CustomButton";
import CustomTokenInput from "../../commons/CustomTokenInput";

function Login() {

    const [token, setToken] = useState("")

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

            <CustomTokenInput value={token} onChange={setToken} name="token" numberOfChars={8} label="Token" />

            {/* <CustomInputField
              type="text"
              placeholder="Enter your token"
              name="token"
              label="Token"
            /> */}

            <CustomButton type={"submit"} label="Submit" />

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
