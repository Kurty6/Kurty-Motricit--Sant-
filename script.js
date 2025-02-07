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
        document.getElementById("main-title").textContent = tabId;
        document.getElementById("content").innerHTML = `<p>Content for ${tabId}</p>`;
        document.querySelector(".back-btn").style.display = "block";
    }

    function goBack() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        document.querySelector(".back-btn").style.display = "none";
    }

    function goHome() {
        document.getElementById("main-title").textContent = "Calendrier des sports";
        document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        document.querySelector(".back-btn").style.display = "none";
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
});
