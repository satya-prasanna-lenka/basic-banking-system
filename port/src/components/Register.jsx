import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    email: "",
    balance: "",
    gender: "Male",
  });

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.name || !value.email) {
      notify("all fiels are required", "warn");
    } else {
      const url = "http://localhost/all/basic-banking-system/register.php";
      const fData = new FormData();
      fData.append("name", value.name);
      fData.append("email", value.email);
      fData.append("balance", value.balance);
      fData.append("gender", value.gender);

      axios
        .post(url, fData)
        .then((res) => {
          setValue({ name: "", email: "", balance: "", gender: "Male" });
          if (res.data.type == "Email already exist") {
            notify("This email already registered");
          } else if (res.data === "Success") {
            notify("Successfull😍,");
            setTimeout(() => {
              navigate("/all");
            }, 2000);
          } else if (res.data === "Error") {
            notify("Error");
          }
        })
        .catch((err) => alert(err));
    }
  };
  return (
    <div className="main_down">
      <ToastContainer />
      <div className="container my_box">
        <div className="register">
          <p style={{ fontSize: "2rem" }} className="text-center mt-2">
            Register
          </p>
          <form className="container">
            <div className="row">
              <div className="mb-3 col-6 ">
                <label htmlFor="exampleInputEmail21" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleInputEmail21"
                  aria-describedby="emailHelp"
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                />
              </div>
              <div className="mb-3 col-6 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={value.email}
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Balance
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={value.balance}
                onChange={(e) =>
                  setValue({ ...value, balance: e.target.value })
                }
              />
            </div>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              value={value.gender}
              onChange={(e) => setValue({ ...value, gender: e.target.value })}
            >
              {/* <option value="none" selected>
                Select your gender
              </option> */}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className="d-grid gap-2">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-outline-info mt-5"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
