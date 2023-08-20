document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    const cardNumber1 = document.querySelector(".card-number-1");

    // Function to filter the list of chats based on the search input
    function filterChats() {
        const searchTerm = searchInput.value.toLowerCase();
        const chatList = cardNumber1.querySelectorAll(".part-1 a");

        chatList.forEach((chat) => {
            const chatName = chat.innerText.toLowerCase();
            if (chatName.includes(searchTerm)) {
                chat.style.display = "block";
            } else {
                chat.style.display = "none";
            }
        });
    }

    // Event listener for the search input
    searchInput.addEventListener("input", filterChats);

    // Event listener for the search icon (optional)
    searchIcon.addEventListener("click", filterChats);
});