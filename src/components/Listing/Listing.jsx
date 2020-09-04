import React, { Component } from "react";

export default class Listing extends Component {
  render() {
    return (
      <div className="row justify-content-between flex-nowrap m-0 mt-4">
        <div className="col-4">
          <div className="col border">
            {["category1", "category2", "category3"].map((e) => (
              <div class="card m-2">
                <div class="card-body">This is some text within a card body.</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8 border p-0">
          <div className="col p-0">
            <div class="card m-3 border-0">
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <div className="row m-0 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                <div class="card ml-2 mt-3 flex-nowrap" style={{ width: "23%" }}>
                  <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
