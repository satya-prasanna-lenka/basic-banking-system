import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const [userData, setUserData] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [transferDetails, setTransferDetails] = useState({
    to: "",
    amount: "",
  });
  const navigate = useNavigate();

  const location = useLocation();

  const notify = (msg) => {
    toast.warning(msg, {
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

  const fetchDataOfAll = () => {
    const url = "http://localhost/all/basic-banking-system/register.php?all";
    axios
      .get(url)
      .then((res) => {
        if (res.data === "No data available") {
          notify(res.data);
        } else {
          setAllUser(res.data);
        }
      })
      .catch((err) => {
        notify("Network connection failed");
      });
  };

  const fetchData = () => {
    if (!location || !location.state) {
      navigate("/");
    } else {
      const url =
        "http://localhost/all/basic-banking-system/register.php?id=" +
        location.state.id;
      axios
        .get(url)
        .then((res) => {
          if (res.data === "No data available") {
            notify(res.data);
          } else {
            setUserData(res.data);
          }
        })
        .catch((err) => {
          notify("Network connection failed");
        });
    }
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!transferDetails.to || !transferDetails.amount) {
      notify("all fiels are required", "warn");
    } else if (
      userData &&
      userData[0] &&
      parseInt(userData[0].balance) < parseInt(transferDetails.amount)
    ) {
      notify("Insufficient balance");
    } else {
      const url =
        "http://localhost/all/basic-banking-system/register.php?fromUpdate";
      const fData = new FormData();
      fData.append("fromId", location.state.id);
      fData.append("toEmail", transferDetails.to);
      fData.append("amount", parseInt(transferDetails.amount));

      axios
        .post(url, fData)
        .then((res) => {
          if (res.data === "success") {
            fetchData();
            // notify("Successfull");
            toast.success("Successful");
            setTransferDetails({ ...transferDetails, amount: "" });
          }
        })
        .catch((err) => alert(err));
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataOfAll();
  }, []);
  return (
    <div className="main_down text-white">
      <ToastContainer />
      <div className="container">
        <p style={{ fontSize: "3rem" }} className="text-center">
          Make a Transaction
        </p>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="register text-dark p-5">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Transform money to
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) =>
                  setTransferDetails({ ...transferDetails, to: e.target.value })
                }
              >
                <option selected>Choose account to transfer</option>
                {allUser?.map((data) => {
                  return (
                    <option key={data.id} value={data.email}>
                      {data.email}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Transform money from
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={userData && userData[0] && userData[0].name}
                readOnly="readonly"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1d" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1d"
                value={transferDetails.amount}
                onChange={(e) =>
                  setTransferDetails({
                    ...transferDetails,
                    amount: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={(e) => handleTransfer(e)}
              className="btn btn-primary"
            >
              Transfer
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <p style={{ fontSize: "3rem" }} className="text-center">
          Customer Details
        </p>
      </div>
      <div style={{ overflowX: "auto" }} className="container ">
        <table className="table text-white">
          <thead>
            <tr className="table-primary">
              <th scope="col">Slno.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{userData && userData[0] && userData[0].name}</td>
              <td>{userData && userData[0] && userData[0].email}</td>
              <td>{userData && userData[0] && userData[0].gender}</td>
              <td>{userData && userData[0] && userData[0].balance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transfer;
