
import React, { useState } from "react";

function Login () {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json()
    if(data.user) {
      alert('Login Sucessful')
      window.location.href = '/quote'
    }else{
      alert('Login Failed')
    }
  
  }
  return (
    <div className="mt-[10%] w-[100%] ">
      <div className="justify-center flex text-3xl font-bold pb-5">
        <h1 className=""> Login Page  </h1>
      </div>
      <div>
        <div className="justify-center  flex">
          <form className="" onSubmit={loginUser}>
      
            <div className="mb-2">
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                className="border-[1px] rounded-md border-[#ccc] focus:bg-none outline-blue-600 outline-[1px] p-2 w-[400px] "
                placeholder=" Email Address"
              />
            </div>
            <div className="mb-2">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="border-[1px] rounded-md border-[#ccc] focus:bg-none outline-blue-600 outline-[1px] p-2 w-[400px] "
                placeholder=" Password "
              />
            </div>
            <div>
              <input
                type="submit"
                className="border-[1px] rounded-md border-[#ccc] bg-blue-700 text-white cursor-pointer focus:bg-none outline-blue-600 outline-[1px] p-2 w-[400px] "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
