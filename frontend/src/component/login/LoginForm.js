import React, { useState } from "react";
import FormField from "../FormField";
import { emailValidation, passwordValidation } from "../../helpers/validations"; //validationFunc should retuirn true or false only
import { CSSTransition } from "react-transition-group";
import { BsArrowLeft } from "react-icons/bs";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);

  const [currentField, setCurrentField] = useState(0);

  const handleForm = (e) => {
    e.preventDefault();
    if (currentField === 0 && emailValidated) {
      setCurrentField(1);
    } else if (currentField === 1 && passwordValidated) {
    }
  };

  const handleBack = () => {
    if (currentField > 0) {
      setCurrentField(currentField - 1);
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="w-full bg-whitee px-7 py-8 max-w-md rounded-xl">
        <div
          className={`text-xl text-black pl-4 ${
            currentField > 0 ? "visible" : "hidden"
          } hover:cursor-pointer`}
          onClick={handleBack}
        >
          <BsArrowLeft />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-greyy p-4">Log In</h1>
          <p className="text-greyy font-bold p-4">
            New user?{" "}
            <span className="text-bluee font-medium">Create an account</span>
          </p>
        </div>
        <form className="p-4">
          <div className="relative overflow-hidden">
            <div className="flex">
              <CSSTransition
                in={currentField === 0}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <div className="flex-shrink-0 w-full">
                  <FormField
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email address"
                    validationText="Invalid Email"
                    validationFunc={emailValidation}
                    getValidation={setEmailValidated}
                    getData={setEmail}
                  />
                </div>
              </CSSTransition>
              <CSSTransition
                in={currentField === 1}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <div className="flex-shrink-0 w-full">
                  <FormField
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    validationText="Password should be at least 6 characters"
                    validationFunc={passwordValidation}
                    getValidation={setPasswordValidated}
                    getData={setPassword}
                  />
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="text-end my-4">
            <button
              className="font-medium px-4 py-1 bg-bluee text-whitee rounded-full"
              onClick={(e) => handleForm(e)}
            >
              {currentField === 1 ? "Submit" : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
