document.addEventListener("DOMContentLoaded", function () {
    const friendOrder = [
        { name: "Ying He zesty Power", value: 1 },
        { name: "Shaik muad'dib", value: 2 },
        { name: "Jia Yan Fatty", value: 3 },
        { name: "Ernest Long shai hulud", value: 4 },
        { name: "Christie Dog eater", value: 5 }
    ];

    let currentIndex = 0;

    const friendAButton = document.getElementById("friend-a");
    const friendBButton = document.getElementById("friend-b");


    displayFriends();

    friendAButton.addEventListener("click", function () {
        declareWinner(friendOrder[currentIndex], friendOrder[currentIndex + 1]);
    });

    friendBButton.addEventListener("click", function () {
        declareWinner(friendOrder[currentIndex + 1], friendOrder[currentIndex]);
    });

    function displayFriends() {
        friendAButton.textContent = friendOrder[currentIndex].name;
        friendBButton.textContent = friendOrder[currentIndex + 1].name;
    }

    function declareWinner(friendA, friendB) {
        const expectedWinner = friendA.value > friendB.value ? friendA : friendB;

        // Move to the next pair of friends
        currentIndex += 1;
        if (currentIndex + 1 < friendOrder.length) {
            displayFriends();
        } else {
            // End of the game
            friendAButton.disabled = true;
            friendBButton.disabled = true;

            // Redirect to the lose page
            window.location.href = "win.html";
        }
        // Check if the clicked friend is not the expected winner
        if (expectedWinner.name !== friendA.name && expectedWinner !== friendB.name) {
            // Redirect to the lose page
            window.location.href = "lose.html";
        }
    }
});

