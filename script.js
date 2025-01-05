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

    document.getElementById('searchBar').addEventListener('input', function() {
        handleSearchAndRedirect(this.value);
    });

    document.querySelector('.accordion').addEventListener('click', function() {
        showAdhesionPage();
    });

    // Afficher l'onglet par défaut (Fiche de renseignement)
    document.querySelector('.tab-button').addEventListener('click', function() {
        showTab('fiche-renseignement');
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
