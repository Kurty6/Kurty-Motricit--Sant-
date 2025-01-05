document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        // Masquer tout le contenu des onglets
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.style.display = 'none';
        });
        
        // Afficher le contenu de l'onglet sélectionné
        document.getElementById(tabId).style.display = 'block';
    }

    function handleSearchAndRedirect(query) {
        // Logique pour rechercher et rediriger vers la page de l'adhérant
        // Exemple : Si le nom correspond à un adhérant
        if (query === "Nom de l'adhérant") {
            window.location.href = 'memberPage.html';
        }
    }

    function showTabs() {
        document.querySelector('.tabs').style.display = 'flex';
        document.querySelector('.nouvelle-seance').style.display = 'block';
    }

    document.getElementById('searchBar').addEventListener('input', function() {
        handleSearchAndRedirect(this.value);
    });

    document.querySelector('.accordion').addEventListener('click', showTabs);

    // Afficher l'onglet par défaut (Fiche de renseignement)
    showTab('fiche-renseignement');
});
