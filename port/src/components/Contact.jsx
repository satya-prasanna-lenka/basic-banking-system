import React from "react";

const Contact = () => {
  return (
    <div className="main_down">
      <div className="container my_box">
        <div className="register">
          <p style={{ fontSize: "2rem" }} className="text-center mt-2">
            Contact Us
          </p>
          <form className="container">
            <div className="row">
              <div className="mb-3 col-6 ">
                <label htmlFor="exampleInputEmail21" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail21"
                  aria-describedby="emailHelp"
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
                />
              </div>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-outline-info mt-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
