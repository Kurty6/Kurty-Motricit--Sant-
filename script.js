document.addEventListener("DOMContentLoaded", function() {
    function showOverlay(day, hour) {
        const overlay = document.getElementById("overlay");
        const overlayTitle = document.getElementById("overlay-title");
        overlayTitle.textContent = `${day} - ${hour}`;
        overlay.style.display = "flex";
    }

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    function showTab(tabId) {
        document.querySelector(".table-container").style.display = "none"; // Hide all table containers initially
        if (tabId === 'adherents') {
            document.getElementById("adherents-container").style.display = "block";
            document.getElementById("main-title").textContent = "Adhérents";
            document.getElementById("content").style.display = "none";
        } else {
            document.getElementById("main-title").textContent = tabId;
            document.getElementById("content").innerHTML = `<p>Content for ${tabId}</p>`;
            document.getElementById("content").style.display = "block";
        }
        document.querySelector(".back-btn").style.display = "block";
    }

    function goBack() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        document.getElementById("content").style.display = "block";
        document.querySelector(".back-btn").style.display = "none";
        document.querySelector(".table-container").style.display = "none";
    }

    function goHome() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        document.getElementById("content").style.display = "block";
        document.querySelector(".back-btn").style.display = "none";
        document.querySelector(".table-container").style.display = "none";
    }

    function addRow() {
        const table = document.querySelector(".table-container table tbody");
        const newRow = document.createElement("tr");
        for (let i = 0; i < 8; i++) {
            const cell = document.createElement("td");
            cell.contentEditable = "true";
            newRow.appendChild(cell);
        }
        table.appendChild(newRow);
    }

    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("click", function(event) {
            event.preventDefault();
            const day = cell.getAttribute("data-day");
            const hour = cell.getAttribute("data-hour");
            showOverlay(day, hour);
        });

        cell.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            const day = cell.getAttribute("data-day");
            const hour = cell.getAttribute("data-hour");
            showOverlay(day, hour);
        });
    });

    document.querySelector(".close-btn").addEventListener("click", closeOverlay);
    document.querySelector(".add-row-btn").addEventListener("click", addRow);
});
