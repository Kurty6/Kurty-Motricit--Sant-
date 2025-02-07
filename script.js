document.addEventListener("DOMContentLoaded", function() {
    // Function to show the overlay for editing cell content
    function showOverlay(day, hour) {
        const overlay = document.getElementById("overlay");
        const overlayTitle = document.getElementById("overlay-title");
        overlayTitle.textContent = `${day} - ${hour}`;
        overlay.style.display = "flex";
        
        // Load existing content for the cell
        const cellContent = localStorage.getItem(`${day}-${hour}`) || "";
        document.querySelectorAll(".overlay-table td[contenteditable='true']").forEach(td => {
            td.textContent = cellContent;
        });
    }

    // Function to close the overlay and save cell content
    function closeOverlay(day, hour) {
        document.getElementById("overlay").style.display = "none";
        
        // Save the content of the cell
        const cellContent = document.querySelector(".overlay-table td[contenteditable='true']").textContent;
        localStorage.setItem(`${day}-${hour}`, cellContent);
        
        // Update the corresponding cell in the calendar
        document.querySelector(`.cell[data-day='${day}'][data-hour='${hour}']`).textContent = cellContent;
    }

    // Add event listeners to each cell in the calendar
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

    // Close overlay event listener
    document.querySelector(".close-btn").addEventListener("click", function() {
        const overlayTitle = document.getElementById("overlay-title").textContent;
        const [day, hour] = overlayTitle.split(" - ");
        closeOverlay(day, hour);
    });
});
