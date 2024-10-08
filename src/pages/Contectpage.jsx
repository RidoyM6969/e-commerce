import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { FallingLines } from "react-loader-spinner";

const Contectpage = () => {

  const db = getDatabase();
  const auth = getAuth();

  let [fulName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(false)
  let [emailShow, setEmailShow] = useState(false)
  let [errorEmail, setErrorEmail] = useState("")
  let [passwordshow, setPasswordShow] = useState(false)
  let [passwordError, setPasswordError] = useState("")

  let handelName = (e) => {
    setFullName(e.target.value);
  };
  let handelEmail = (e) => {
    setEmail(e.target.value);
  };
  let handelPassword = (e) => {
    setPassword(e.target.value);
  };

  let handelSubmit = (e) => {
    e.preventDefault()
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let number = /^(?=.*[0-9])/
    let lowerCase = /^(?=.*[a-z])/
    let upperCase = /^(?=.*[A-Z])/
    let mixiMum = /^(?=.{8,})/
    let spacial = /^(?=.*[!@#$%^&*])/

    if (!email) {
      setEmailShow(true)
      setErrorEmail("please enter your email");

    } else if (!emailRegex.test(email)) {
      setEmailShow(true)
      setErrorEmail("inter your valid email");
      
    } else if (!password) {
      setPasswordShow(true)
      setPasswordError("Enter you password");
      
    } else if (!number.test(password)) {
      setPasswordShow(true)
      setPasswordError("enter a number");
      
    } else if (!lowerCase.test(password)) {
      setPasswordShow(true)
      setPasswordError("enter lowercase");
      
    } else if (!upperCase.test(password)) {
      setPasswordShow(true)
      setPasswordError("enter uppercase");
      
    } else if (!mixiMum.test(password)) {
      setPasswordShow(true)
      setPasswordError("maxiMum 8 charecter");
      
    } else if (!spacial.test(password)) {
      setPasswordShow(true)
      setPasswordError("enter a spacial carecter");
      
    } else {
      setLoader(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          set(push(ref(db, 'alluser/')), {
            username: fulName,
            email: email,
            password:password
          });
      console.log("Done");
      setLoader(false)
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode.includes("auth/email-already-in-use")) {
        setEmailShow(true)
        setErrorEmail("this email already useable");
        setLoader(false)
      } 
    });
      
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 py-[50px]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            OREBI....
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your name
                  </label>
                  <input
                    onChange={handelName}
                    type="text"
                    name="text"
                    id="text"
                    className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder="your full name"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handelEmail}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  
                    {
                    emailShow && <p className="text-red-800">{`${errorEmail}*`}</p>
                    }
                  
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handelPassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {
                    passwordshow && <p className="text-red-800">{ passwordError}</p>
                  }
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {
                  loader ?
                <button>
                  <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                  />
                </button>
                  :
                <button
                  onClick={handelSubmit}
                  type="submit"
                  className="w-full text-white bg-[tomato] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                }
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contectpage;
