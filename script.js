document.addEventListener("DOMContentLoaded", function() {
    function showTabs() {
        document.querySelector('.tabs').style.display = 'flex';
        document.querySelector('.nouvelle-seance').style.display = 'block';
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

    document.querySelector('.accordion').addEventListener('click', showTabs);
});
