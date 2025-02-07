document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        document.getElementById("content").innerHTML = '';
        document.querySelectorAll(".table-container").forEach(container => container.style.display = "none");
        if (tabId === 'calendrier') {
            document.getElementById("main-title").textContent = "Emploi du temps des disciplines";
            document.getElementById("content").innerHTML = document.querySelector(".calendar").outerHTML;
        } else if (tabId === 'adherents') {
            document.getElementById("main-title").textContent = "Fiche de contact";
            document.getElementById("adherents-container").style.display = "block";
        } else {
            document.getElementById("main-title").textContent = tabId;
            document.getElementById("content").innerHTML = `<p>Content for ${tabId}</p>`;
        }
    }

    function goBack() {
        document.getElementById("main-title").textContent = "Bienvenue";
        document.getElementById("content").innerHTML = '';
        document.querySelectorAll(".table-container").forEach(container => container.style.display = "none");
    }

    function goHome() {
        document.getElementById("main-title").textContent = "Bienvenue";
        document.getElementById("content").innerHTML = '';
        document.querySelectorAll(".table-container").forEach(container => container.style.display = "none");
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

    document.querySelector(".add-row-btn").addEventListener("click", addRow);
});
