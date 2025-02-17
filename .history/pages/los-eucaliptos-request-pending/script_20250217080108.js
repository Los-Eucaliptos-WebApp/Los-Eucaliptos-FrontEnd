document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();

    document.querySelectorAll(".creation-date").forEach(cell => {
        const dateStr = cell.getAttribute("data-date");
        if (dateStr) {
            const createdDate = new Date(dateStr);
            const timeDiff = today - createdDate;
            const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            cell.parentElement.querySelector(".days-passed").textContent = daysPassed;
        }
    });
});
