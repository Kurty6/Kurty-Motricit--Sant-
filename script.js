document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        // Masquer tout le contenu des onglets
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.style.display = 'none';
        });

        // Afficher le contenu de l'onglet sélectionné
        document.getElementById(tabId).style.display = 'block';

        // Check if the tabId is 'fiche-suivi' and display the table
        if (tabId === 'fiche-suivi') {
            displayTable();
        }
    }

    function showAdhesionPage() {
        document.querySelector('.tabs').style.display = 'flex';
        showTab('fiche-renseignement');
        showBanner("Nouvelle adhésion");
    }

    function showBanner(text) {
        const banner = document.getElementById('banner');
        banner.textContent = text;
        banner.style.display = 'block';
    }

    function handleSearchAndRedirect(query) {
        // Logique pour rechercher et rediriger vers la page de l'adhérant
        // Exemple : Si le nom correspond à un adhérant
        if (query === "Nom de l'adhérant") {
            showBanner(query);
            window.location.href = 'memberPage.html';
        }
    }

    function displayTable() {
        const tableContainer = document.getElementById('fiche-suivi');
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');

        // Create 19 columns
        for (let i = 0; i < 19; i++) {
            const th = document.createElement('th');
            th.textContent = `Colonne ${i + 1}`;
            headerRow.appendChild(th);
        }
        table.appendChild(headerRow);

        // Create 3 rows
        for (let i = 0; i < 3; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 19; j++) {
                const td = document.createElement('td');
                td.textContent = `Cell ${i + 1}-${j + 1}`;
                row.appendChild(td);
            }
            table.appendChild(row);
        }

        // Clear any existing content and append the table
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    }

    document.getElementById('searchBar').addEventListener('input', function() {
        handleSearchAndRedirect(this.value);
    });

    document.querySelector('.accordion').addEventListener('click', function() {
        showAdhesionPage();
    });

    // Afficher l'onglet par défaut (Fiche de renseignement)
    document.querySelectorAll('.tab-button').forEach(function(button) {
        button.addEventListener('click', function() {
            showTab(button.getAttribute('onclick').match(/'([^']+)'/)[1]);
        });
    });

    // Gestion de la barre de recherche
    const sideBar = document.querySelector('.side-bar');
    const searchBar = document.getElementById('searchBar');

    sideBar.addEventListener('mouseover', function() {
        searchBar.style.display = 'block';
    });

    sideBar.addEventListener('mouseout', function() {
        searchBar.style.display = 'none';
    });
});
