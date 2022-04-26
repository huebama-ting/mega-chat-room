import * as signalR from '@microsoft/signalr';

const hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:5073/hub').build();
const sendButton = document.getElementById('send-button')!;
const username = new Date().getTime();

sendButton.addEventListener('click', sendMessage);
hubConnection.start().catch((err) => console.log(err));

hubConnection.on('messageReceived', (username: number, message: string) => {
  console.log(`${username}: ${message}`);
})

function sendMessage(): void {
  const message = document.getElementById('message-input')! as HTMLInputElement;

  hubConnection.send('sendMessage', username, message.value);
}
