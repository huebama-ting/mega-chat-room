const sendButton = document.getElementById('send-button')!;

sendButton.addEventListener('click', sendMessage);

function sendMessage(): void {
  const message = document.getElementById('message-input')! as HTMLInputElement;

  console.log(message.value);
}
