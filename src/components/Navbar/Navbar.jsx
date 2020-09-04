import React from "react";
import "antd/dist/antd.css";
import { Popover, Button } from "antd/es";
import classes from "./Navbar.module.css";

function Navbar() {
  const text = <span>Title</span>;
  const content = (
    <div className="" style={{ width: "40rem" }}>
      <div class="card flex-row">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">
            remove
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="mr-lg-5 pr-lg-5">
            <Popover placement="bottom" title={text} content={content} trigger="click">
              <Button>Cart</Button>
            </Popover>
          </div>
          <div className="row pr-lg-5 align-items-center mr-lg-5">
            <div className="border rounded-circle " style={{ height: "45px", width: "45px" }}></div>
            <span className="p-2">Username</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
