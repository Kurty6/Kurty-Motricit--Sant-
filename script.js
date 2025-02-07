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
        if (tabId === 'adherents') {
            fadeOut(document.body, function() {
                document.getElementById("adherents-container").style.display = "block";
                document.getElementById("main-title").textContent = "Fiche de contact";
                fadeIn(document.getElementById("adherents-container"));
            });
        } else {
            document.querySelector(".table-container").style.display = "none";
            document.getElementById("main-title").textContent = tabId;
            document.getElementById("content").innerHTML = `<p>Content for ${tabId}</p>`;
            document.querySelector(".back-btn").style.display = "block";
        }
    }

    function goBack() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        document.querySelector(".back-btn").style.display = "none";
        document.querySelector(".table-container").style.display = "none";
    }

    function goHome() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
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

    // Add event listener for 'Adhérents' tab
    document.getElementById("adherents-tab").addEventListener("click", function(event) {
        event.preventDefault();
        showTab('adherents');
    });

    // Define fadeOut and fadeIn functions
    function fadeOut(element, callback) {
        element.style.transition = "opacity 0.5s";
        element.style.opacity = 0;
        setTimeout(function() {
            if (callback) callback();
        }, 500);
    }

    function fadeIn(element) {
        element.style.display = "block";
        element.style.transition = "opacity 0.5s";
        element.style.opacity = 1;
    }
});
