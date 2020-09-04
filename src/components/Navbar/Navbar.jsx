import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
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
          {/* <div className="row m-0"> */}
          <div class="dropdown pr-lg-5">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              cart
            </button>
            <div class={classes.dropdown_menu + " dropdown-menu"} aria-labelledby="dropdownMenuButton">
              <div className="col">
                <div class="card flex-row">
                  <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div className="col">
                      <button>+</button>
                      <input type="text" />
                      <button>-</button>
                    </div>
                    <button>remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pr-lg-5 align-items-center">
            <div className="border rounded-circle " style={{ height: "45px", width: "45px" }}></div>
            <span className="p-2">Username</span>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
