document.addEventListener("DOMContentLoaded", function() {
    function showTabs() {
        document.querySelector('.tabs').style.display = 'flex';
        document.querySelector('.nouvelle-seance').style.display = 'block';
        showBanner("Nouvelle adhésion");
    }

    function showBanner(text) {
        const banner = document.getElementById('banner');
        banner.innerHTML = `
            <input type="text" id="searchBar" placeholder="Rechercher..." class="search-bar">
            <button class="accordion" onclick="showTabs()">Nouvelle adhésion</button>
        `;
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
        window.location.href = 'fiche_suivi.html';
    });

    // Ensure the tabs and banner remain visible on any tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.tabs').style.display = 'flex';
            document.querySelector('.banner').style.display = 'block';
        });
    });

    // Make the "Nouvelle séance" rectangle visible on the homepage
    document.querySelector('.nouvelle-seance').style.display = 'block';
});
