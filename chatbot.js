document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.createElement("div");
    chatbox.id = "chatbox";
    chatbox.innerHTML = `
        <div id="chat-header">Chat with Us</div>
        <div id="chat-body">
            <p class="bot-message">Hello! Need help with skincare? Ask me anything!</p>
        </div>
        <div id="chat-footer">
            <input type="text" id="chat-input" placeholder="Type a message..." />
            <button id="send-btn">Send</button>
        </div>
    `;
    document.body.appendChild(chatbox);

    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        addMessage(userMessage, "user-message");
        chatInput.value = "";

        setTimeout(() => {
            const botReply = getBotResponse(userMessage);
            addMessage(botReply, "bot-message");
        }, 1000);
    }

    function addMessage(message, className) {
        const msgElement = document.createElement("p");
        msgElement.className = className;
        msgElement.innerText = message;
        chatBody.appendChild(msgElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        if (userMessage.includes("cleanser")) {
            return "For cleansers, we recommend Minimalist Salicylic Acid Cleanser for oily skin and CeraVe Hydrating Cleanser for dry skin!";
        } else if (userMessage.includes("serum")) {
            return "Looking for a serum? Try Minimalist Niacinamide Serum for acne or The Ordinary Hyaluronic Acid for hydration!";
        } else if (userMessage.includes("moisturizer")) {
            return "For a good moisturizer, consider Plum Green Tea Moisturizer for oily skin or CeraVe Moisturizing Cream for dry skin.";
        } else if (userMessage.includes("sunscreen")) {
            return "Sunscreen is a must! We recommend Foxtale Matte Sunscreen for oily skin and Cetaphil Sun SPF 50+ for sensitive skin.";
        } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
            return "Hello! How can I assist you with your skincare today?";
        } else {
            return "I'm here to help! Ask me about skincare products, routines, or recommendations.";
        }
    }
});
