import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navBar/navbar";
import Constants from "../../Config/Constants.json";
import "./registerStyles.css";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [disabled,setIsDisabled] = useState(true)
  useEffect(()=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) && formData.password == formData.confirmationPassword && formData.password && formData.name && formData.email &&formData.password.length > 6 && /[A-Z]/.test(formData.password) &&  /\d/.test(formData.password) &&/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(formData.password)) {
        setIsDisabled(false)
    }else setIsDisabled(true)
  },[formData.name,formData.email,formData.password,formData.confirmationPassword])
  const btnClass = disabled ? 'btn-disabled' : ''
  return (
    <section>
      {" "}
      <Navbar data={Constants.navBarData} />
      <div className="register-container">
        <h1>Register</h1>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            //Do API Post request..
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmationPassword: "",
              })
          }}
        >
          <input
            type={"email"}
            required
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <input
            type={"text"}
            required
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
          <input
            type={"password"}
            required
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          <input
            type={"password"}
            required
            placeholder="Confirm Password"
            value={formData.confirmationPassword}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, confirmationPassword: e.target.value };
              })
            }
          />
          <button disabled={disabled} className={btnClass}>Submit</button>
        </form>
      </div>
    </section>
  );
};
