document.addEventListener("DOMContentLoaded", function() {
    console.log("Le site est chargé !");
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/{1pa3wBesb1MuUYiaFOdzSbjaTKor7FcN8vp8fWb9cskA}/values/{Fiche de renseignements}?key={AIzaSyCFgsSrevhLarhUPfjOkKnhTw41jQAoVDA}')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById('data-container');
        data.values.forEach(row => {
            let rowData = document.createElement('p');
            rowData.textContent = row.join(', ');
            container.appendChild(rowData);
        });
    })
    .catch(error => console.error('Erreur:', error));
});
