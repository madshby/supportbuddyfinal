class Ticket {
  constructor(
    id,
    status,
    subject,
    message,
    email,
    firstName,
    lastName,
    phoneNumber,
    timeStamp
  ) {
    this.id = id;
    this.status = status;
    this.subject = subject;
    this.message = message;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.timeStamp = timeStamp;
  }
}

export default Ticket;
