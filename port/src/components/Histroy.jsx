import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

const Histroy = () => {
  const [history, setHistory] = useState([]);
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
  let slno = 0;
  const fetchData = () => {
    const url =
      "http://localhost/all/basic-banking-system/register.php?history";
    axios
      .get(url)
      .then((res) => {
        if (res.data === "No data available") {
          notify(res.data);
        } else {
          setHistory(res.data);
        }
      })
      .catch((err) => {
        notify("Network connection failed");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main_down">
      <ToastContainer />
      <div className="container text-white">
        <p style={{ fontSize: "2rem" }} className="text-center">
          Transaction History
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="table text-white ">
            <thead>
              <tr>
                <th scope="col">Sl no.</th>
                <th scope="col">Sender's Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Reciever's Name</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((data) => {
                slno += 1;
                return (
                  <tr key={data.id}>
                    <th scope="row">{slno}</th>
                    <td>{data.sName}</td>
                    <td>{data.amount}</td>
                    <td>{data.rName}</td>
                    <td>{moment(new Date(data.date)).format("LLLL")}</td>
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

export default Histroy;
