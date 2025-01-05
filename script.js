document.addEventListener("DOMContentLoaded", function() {
    function showAdhesionPage() {
        alert('Nouvelle adhésion');
    }

    // Fonction pour afficher la bonne tab
    function showTab(tabId) {
        // Masquer tout le contenu des onglets
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.style.display = 'none';
        });
        
        // Afficher le contenu de l'onglet sélectionné
        document.getElementById(tabId).style.display = 'block';
    }

    // Fonction pour afficher la bannière
    function showBanner(text) {
        const banner = document.getElementById('banner');
        banner.textContent = text;
        banner.style.display = 'block';
    }

    // Gestion de la recherche et redirection
    function handleSearchAndRedirect(query) {
        // Logique pour rechercher et rediriger vers la page de l'adhérant
        // Exemple : Si le nom correspond à un adhérant
        if (query === "Nom de l'adhérant") {
            showBanner(query);
            window.location.href = 'memberPage.html';
        }
    }

    // Création de la table
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
            for (let j = 0; j < 19; j++) {
                const td = document.createElement('td');
                td.textContent = `Cell ${i + 1}-${j + 1}`;
                row.appendChild(td);
            }
            table.appendChild(row);
        }
        
        // Effacer tout contenu existant et ajouter le tableau
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    }

    // Événement de recherche
    document.getElementById('searchBar').addEventListener('input', function() {
        handleSearchAndRedirect(this.value);
    });

    // Événement d'adhésion
    document.querySelector('.accordion').addEventListener('click', function() {
        showAdhesionPage();
    });

    // Afficher l'onglet par défaut (Fiche de renseignement)
    showTab('fiche-renseignement');

    // Validation du formulaire de fiche de renseignement
    document.getElementById('ficheRenseignementForm').addEventListener('submit', function(event) {
        let isValid = true;
        this.querySelectorAll('input[required]').forEach(function(input) {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Veuillez remplir tous les champs requis.');
        } else {
            document.getElementById('confirmationMessage').style.display = 'block';
        }
    });

    // Validation du formulaire de nouvelle adhésion
    document.getElementById('adhesionForm').addEventListener('submit', function(event) {
        let isValid = true;
        this.querySelectorAll('input[required]').forEach(function(input) {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Veuillez remplir tous les champs requis.');
        } else {
            document.getElementById('confirmationAdhesionMessage').style.display = 'block';
        }
    });
});
