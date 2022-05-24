import React, { Component } from "react";
import axios from "axios";

class CreateTicketEmbed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "",
      message: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://vps.qvistgaard.me:8980/api/ticket", this.state)
      .then((response) => {
        alert("Ticket was created :-)");
        this.resetForm();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  resetForm = () => {
    this.setState({ firstName: "", lastName: "", email: "", phoneNumber: "", subject: "", message: "" });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { subject, message, email, firstName, lastName, phoneNumber } =
      this.state;

    return (
      <>
        <h1>Create a ticket</h1>
        <p>
          Here you are able to create a support ticket manually, in case of an
          user calling on the phone etc.
        </p>

        <form
          ref={(divElement) => {
            this.divElement = divElement;
          }}
          onSubmit={this.submitHandler}
          id="createForm"
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>User Information</h4>
              <div className="input-group mb-3">
                <span className="input-group-text sb-form-text">
                  First Name
                </span>
                <input
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={this.changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="First Name..."
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text sb-form-text">Last Name</span>
                <input
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={this.changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="Last Name..."
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text sb-form-text">E-mail</span>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="E-mail..."
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text sb-form-text">
                  Phone Number
                </span>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.changeHandler}
                  type="tel"
                  className="form-control"
                  placeholder="Phone number..."
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h4>Ticket Content</h4>
              <div className="input-group mb-3">
                <span className="input-group-text sb-form-text">Subject</span>
                <input
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={this.changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="Ticket subject..."
                />
              </div>
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={this.changeHandler}
                className="form-control mb-3"
                placeholder="Ticket message..."
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Submit
              </button>
            </div>
            <div className="col-12 col-md-6">
              <button type="reset" className="btn btn-danger w-100 mb-3">
                Reset
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CreateTicketEmbed;
