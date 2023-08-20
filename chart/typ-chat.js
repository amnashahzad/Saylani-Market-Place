document.addEventListener("DOMContentLoaded", function () {
    // Get the input field and send icon elements
    const inputField = document.querySelector(".form-control");
    const sendIcon = document.querySelector(".bi-send");
    const msgPage = document.querySelector(".msg-page");

    // Function to create and append a new message to the chat page
    function appendMessage(message, isOutgoing) {
        const chatContainer = document.createElement("div");
        chatContainer.className = isOutgoing ? "outgoing-chats" : "received-chats";

        const imgContainer = document.createElement("div");
        imgContainer.className = isOutgoing ? "outgoing-chats-img" : "received-chats-img";

        const img = document.createElement("img");
        img.src = isOutgoing ? "../Images/images (4).jpg" : "../Images/Ellipse 4 (1).png";

        const msgContainer = document.createElement("div");
        msgContainer.className = isOutgoing ? "outgoing-msg" : "received-msg";

        const msgInbox = document.createElement("div");
        msgInbox.className = isOutgoing ? "outgoing-chats-msg" : "received-msg-inbox";

        const msgText = document.createElement("p");
        msgText.textContent = message;

        const timeSpan = document.createElement("span");
        const currentDate = new Date();
        const timeString = currentDate.getHours() + ":" + currentDate.getMinutes() + " | " + currentDate.toDateString();
        timeSpan.textContent = timeString;

        msgInbox.appendChild(msgText);
        msgInbox.appendChild(timeSpan);

        msgContainer.appendChild(msgInbox);

        imgContainer.appendChild(img);

        chatContainer.appendChild(imgContainer);
        chatContainer.appendChild(msgContainer);

        msgPage.appendChild(chatContainer);

        // Scroll to the bottom of the chat container to show the latest messages
        msgPage.scrollTop = msgPage.scrollHeight;
    }

    // Function to handle sending messages
    function sendMessage() {
        const message = inputField.value.trim();
        if (message !== "") {
            appendMessage(message, true);
            inputField.value = "";
        }
    }

    // Event listener for clicking the send icon
    sendIcon.addEventListener("click", sendMessage);

    // Event listener for pressing the enter key in the input field
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});