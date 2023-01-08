import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllCustome = () => {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
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
  const fetchData = () => {
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
  let slno = 0;

  const handleTransfer = (id) => {
    navigate("/transfer", { state: { id } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main_down">
      <ToastContainer />
      <div className="container text-white">
        <p style={{ fontSize: "2rem" }} className="text-center">
          Bank's Customer
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="table text-white my_table">
            <thead>
              <tr>
                <th scope="col">Sl no.</th>
                <th scope="col">Name</th>
                <th scope="col">email</th>
                <th scope="col">Gender</th>
                <th scope="col">Balance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allUser?.map((data) => {
                slno += 1;
                return (
                  <tr key={data.id}>
                    <th scope="row">{slno}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>₹{data.balance}</td>
                    <td>
                      <button
                        onClick={() => handleTransfer(data.id)}
                        className="btn btn-info"
                      >
                        Transfer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCustome;
