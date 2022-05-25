import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class LookAtTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.params.id,
      currentTicket: {
        id: 0,
        status: "",
        subject: "",
        message: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        answers: [],
        timeStamp: ""
      }
    };
  }

  componentDidMount() {
    this.getTicket().then(response => this.setState({ currentTicket: response }));
  }

  getTicket() {
    return fetch('http://vps.qvistgaard.me:8980/api/ticket/'+this.state.currentId)
        .then(response => response.json());
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    axios
        .post("http://vps.qvistgaard.me:8980/api/ticket/"+this.state.currentId, { message: this.state.message })
        .then((response) => {
          this.getTicket().then(response => this.setState({currentTicket: response}));
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    return (
      <>
        <h1 class="pt-4 px-3">Ticket #{this.state.currentId}</h1>
        <div class="row">
          <div class="col-12 col-md-4 mb-3 order-1 order-md-1 pt-3 ps-3">
            <div class="card">
              <div class="card-header">
                <strong>{this.state.currentTicket.firstName} {this.state.currentTicket.lastName}</strong>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>E-mail: </strong>
                    {this.state.currentTicket.email}
                  </li>
                  <li class="list-group-item">
                    <strong>Phone: </strong>
                    {this.state.currentTicket.phoneNumber}
                  </li>
                  <li class="list-group-item">
                    <strong>Ticket Status: </strong>
                    {this.state.currentTicket.status}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8 mb-3 order-3 order-md-2 pt-3 pe-4">
            <div class="card">
              <div class="card-header">
                <strong>{this.state.currentTicket.subject}</strong>
              </div>
              <div class="card-body">
                <p>{this.state.currentTicket.message}</p>
              </div>
              <div class="card-footer">
                <small>CREATED: {this.state.currentTicket.timeStamp}</small>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row mb-5" class="pt-4 px-3">
          <div className="col-12">
            <h4>Answers</h4>
            {
              this.state.currentTicket.answers.map((answer, x) => {
                return (<div key={x} className="card mb-3">
                  <div className="card-header">{answer.authorFirstName} {answer.authorLastName} answered:</div>
                  <div className="card-body">{answer.message}</div>
                  <div className="card-footer">
                    <small>{answer.timeStamp}</small>
                  </div>
                </div>);
              })
            }

          </div>
        </div>

        { this.state.currentTicket.status == 'Open' && (<div id="pageOverlay" className="@OverlayCssClass">
          <div id="bottomActionbar" className="bg-light text-center pt-4 px-3">
            <div className="row">
              <div className="col">
                <h2>Add answer</h2>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8 px-4">
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter answer here..."
                    name="message"
                    onChange={this.changeHandler}
                ></textarea>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-6 col-md-4 px-4">
                <button onClick={this.submitHandler} className="btn btn-primary w-100">Save Answer</button>
              </div>
              <div className="col-6 col-md-4 px-4">
                <button className="btn btn-danger w-100">Cancel</button>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </div>)}
      </>
    );
  }
}

export default withParams(LookAtTicket);
