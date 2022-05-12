import React, { Component } from 'react'

export class LookAtTicket extends Component {
  render() {
    return (
      <><div class="row">
        <div class="col-12 col-md-2 mb-3 order-1 order-md-1">
          <div class="card">
            <div class="card-header">
              <strong>
//@currentTicket.FirstName @currentTicket.LastName
              </strong>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>E-mail:</strong>
//@currentTicket.Email
                </li>
                <li class="list-group-item"><strong>Phone:</strong>
//@currentTicket.PhoneNumber
                </li>
                <li class="list-group-item"><strong>Ticket Status:</strong>
//@currentTicket.Status
                </li>
              </ul>
            </div>
            <div class="card-footer">
            </div>
          </div>
        </div>

        <div class="col-12 col-md-8 mb-3 order-3 order-md-2">
          <div class="card">
            <div class="card-header">
              <strong>
//@currentTicket.Subject
              </strong>
            </div>
            <div class="card-body">
              <p>
                      //@currentTicket.Message
              </p>
            </div>
            <div class="card-footer">
              <small>
//Created: @currentTicket.TimeStamp
              </small>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-2 mb-3 order-2 order-md-3">
          <div class="card">
            <div class="card-header">
              <strong>Actions</strong>
            </div>
            <div class="card-body">
              <button disabled="@DisableButtons" onclick="SwitchView" class="btn btn-primary w-100 mb-3">Add answer</button>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div><div class="row mb-5">
          <div class="col-12">
            <h4>Answers</h4>
          /*
            @foreach (var answer in currentTicket.Answers)
            {<div class="card mb-3">
              <div class="card-header">
                @answer.AuthorFirstName @answer.AuthorLastName answered:
              </div>
              <div class="card-body">
                @answer.Message
              </div>
              <div class="card-footer">
                <small>@answer.TimeStamp</small>
              </div>
            </div>}
            */
          </div>
        </div><div id="pageOverlay" class="@OverlayCssClass">
          <div id="bottomActionbar" class="bg-light text-center pt-4 px-3">
            <div class="row">
              <div class="col">
                <h2>Add answer</h2>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12 col-md-2"></div>
              <div class="col-12 col-md-8 px-4">
                <textarea /> @bind="NewAnswer" class="form-control" rows="4" placeholder="Enter answer here..."></textarea>
            </div>
            <div class="col-12 col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-2"></div>
            <div class="col-6 col-md-4 px-4">
              <button class="btn btn-primary w-100" /> @onclick="@(async () => await SaveAnswer())">Save Answer</button>
          </div>
          <div class="col-12 col-md-2"></div>
        </div></>
    )
  }
}

export default LookAtTicket