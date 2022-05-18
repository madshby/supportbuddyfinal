import React, { Component } from "react";
class LookAtTicket extends Component {
  render() {
    return (
      <>
        <h1 class="pt-4 px-3">Ticket #ID</h1>
        <div class="row">
          <div class="col-12 col-md-4 mb-3 order-1 order-md-1 pt-3 ps-3">
            <div class="card">
              <div class="card-header">
                <strong>FULLNAME HERE</strong>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>E-mail: </strong>
                    EMAIL HERE
                  </li>
                  <li class="list-group-item">
                    <strong>Phone: </strong>
                    PHONENUMBER HERE
                  </li>
                  <li class="list-group-item">
                    <strong>Ticket Status: </strong>
                    STATUS HERE
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8 mb-3 order-3 order-md-2 pt-3 pe-4">
            <div class="card">
              <div class="card-header">
                <strong>SUBJECT HERE</strong>
              </div>
              <div class="card-body">
                <p>MESSAGE HERE</p>
              </div>
              <div class="card-footer">
                <small>CREATED: TIMESTAMP HERE</small>
              </div>
            </div>
          </div>
          {/* Decide wether we want a toggler to add answers or not.

                    <div class="col-12 col-md-2 mb-3 order-2 order-md-3">
                        <div class="card">
                            <div class="card-header">
                                <strong>Actions</strong>
                            </div>
                            <div class="card-body">
                                <button disabled="@DisableButtons" class="btn btn-primary w-100 mb-3">Add answer</button>
                            </div>
                            <div class="card-footer"><
                            /div>
                        </div>
                    </div>

                    */}
        </div>

        <hr />

        <div className="row mb-5" class="pt-4 px-3">
          <div className="col-12">
            <h4>Answers</h4>
            <div className="card mb-3">
              <div className="card-header">AUTHOR FULLNAME answered:</div>
              <div className="card-body">AUTHOR MESSAGE</div>
              <div className="card-footer">
                <small>AUTHOR MESSAGE TIMESTAMP</small>
              </div>
            </div>
          </div>
        </div>

        <div id="pageOverlay" class="@OverlayCssClass">
          <div id="bottomActionbar" class="bg-light text-center pt-4 px-3">
            <div class="row">
              <div class="col">
                <h2>Add answer</h2>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12 col-md-2"></div>
              <div class="col-12 col-md-8 px-4">
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Enter answer here..."
                ></textarea>
              </div>
              <div class="col-12 col-md-2"></div>
            </div>
            <div class="row">
              <div class="col-12 col-md-2"></div>
              <div class="col-6 col-md-4 px-4">
                <button class="btn btn-primary w-100">Save Answer</button>
              </div>
              <div class="col-6 col-md-4 px-4">
                <button class="btn btn-danger w-100">Cancel</button>
              </div>
              <div class="col-12 col-md-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LookAtTicket;
