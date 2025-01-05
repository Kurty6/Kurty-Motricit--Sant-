document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        // Masquer tout le contenu des onglets
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.style.display = 'none';
        });
        
        // Afficher le contenu de l'onglet sélectionné
        document.getElementById(tabId).style.display = 'block';
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
        
        // Créer 19 colonnes
        for (let i = 0; i < 19; i++) {
            const th = document.createElement('th');
            th.textContent = `Colonne ${i + 1}`;
            headerRow.appendChild(th);
        }
        table.appendChild(headerRow);
        
        // Créer 3 lignes
        for (let i = 0; i < 3; i++) {
            const row = document.createElement('tr');
            for (let j = 0;
