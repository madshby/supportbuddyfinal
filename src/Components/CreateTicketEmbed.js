function CreateTicketEmbed() {
  const doCreateTicket = () => {
    console.log("BOOBA");
  };

  return (
    <>
      <h1>Create a ticket</h1>
      <p>
        Here you are able to create a support ticket manually, in case of an
        user calling on the phone etc.
      </p>

      <div className="row">
        <div className="col-12 col-md-6">
          <h4>User Information</h4>
          <div className="input-group mb-3">
            <span className="input-group-text sb-form-text">First Name</span>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="First Name..."
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text sb-form-text">Last Name</span>
            <input
              id="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name..."
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text sb-form-text">E-mail</span>
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="E-mail..."
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text sb-form-text">Phone Number</span>
            <input
              id="phoneNumber"
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
            className="form-control mb-3"
            placeholder="Ticket message..."
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <button
            onClick={doCreateTicket}
            className="btn btn-primary w-100 mb-3"
          >
            Submit
          </button>
        </div>
        <div className="col-12 col-md-6">
          <button className="btn btn-danger w-100 mb-3">Reset</button>
        </div>
      </div>
    </>
  );
}

export default CreateTicketEmbed;
