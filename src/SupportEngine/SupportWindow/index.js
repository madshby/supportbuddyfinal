import React from "react";
import { styles } from "../../Resources/styles";

function onSubmitLiveChat() {
    let firstNameField = document.getElementById('firstName').value;
    let lastNameField = document.getElementById("lastName").value;
    let emailField = document.getElementById("email").value;
    let phoneNumberField = document.getElementById("phoneNumber").value;

    const sendObj = {
        firstName: firstNameField,
        lastName: lastNameField,
        email: emailField,
        phoneNumber: phoneNumberField
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendObj)
    };

    fetch('https://localhost:5001/api/livechat', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                console.log(data);
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            openWebSocket(data.id);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function openWebSocket(id) {
    document.getElementById('chatWindow').innerHTML = '' +
        '<textarea class="form-control" style="height:90%;resize: none;" id="chatTextArea" disabled="disabled"></textarea>' +
        '<div class="row" style="height:10%"><div class="col-8"><input placeholder="Type message here..." type="text" class="form-control form-control-lg" id="messageToSend" /></div><div class="col-4"><button id="sendMessageBtn" class="btn btn-lg btn-primary w-100">Send</button></div></div>';

    const ws = new WebSocket("wss://localhost:5001/ws/"+ id);

    ws.onmessage = function(event) {
        console.log(event.data);
        const currentMessages = document.getElementById('chatTextArea').value;
        document.getElementById('chatTextArea').value = currentMessages + event.data + '\r\n';
    };

    document.getElementById("sendMessageBtn").onclick = function() {
        ws.send(document.getElementById("messageToSend").value);
        document.getElementById("messageToSend").value = '';
        document.getElementById("chatTextArea").scrollTop = document.getElementById("chatTextArea").scrollHeight;
    }
}

const SupportWindow = (props) => {
  return (
    <div
      style={{
        ...styles.supportWindow,
          ...{ display: props.visible ? "block" : "none"}
      }}
    class='text-center' id='chatWindow'>
        <h2>Live Chat</h2>
        <p>Start a live chat here, to connect with one of our great supporters!</p>
        <div class='row'>
            <div class='col px-4'>
                <label for='firstName' class='form-label'>First Name:</label>
                <input type='text' class='form-control mb-3' id='firstName' />

                <label htmlFor='lastName' className='form-label'>Last Name:</label>
                <input type='text' className='form-control mb-3' id='lastName'/>

                <label htmlFor='email' className='form-label'>E-mail:</label>
                <input type='email' className='form-control mb-3' id='email'/>

                <label htmlFor='phoneNumber' className='form-label'>Phone Number:</label>
                <input type='tel' className='form-control mb-4' id='phoneNumber'/>

                <button type='submit' onClick={() => onSubmitLiveChat()} class='btn btn-primary w-100'>Start Live Chat</button>
            </div>
        </div>
    </div>
  );
};

export default SupportWindow;
