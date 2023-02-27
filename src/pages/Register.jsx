
import React, { useState } from "react";


function Register() {

  
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json()
    if(data.status === 'Ok'){
      alert('Registration Sucessful')
      window.location.href = '/login'
    }else{
      alert('Registration Failed')
    }
  }
  return (
    <div className="mt-[10%] w-[100%] ">
      <div className="justify-center flex text-3xl font-bold pb-5">
        <h1 className=""> Registration Page </h1>
      </div>
      <div>
        <div className="justify-center  flex">
          <form className="" onSubmit={registerUser}>
            <div className="mb-2">
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                className="border-[1px] rounded-md border-[#ccc] focus:bg-none outline-blue-600 outline-[1px] p-2 w-[400px] "
                placeholder=" First Name"
              />
            </div>
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

export default Register;
