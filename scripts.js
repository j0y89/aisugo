document.addEventListener('DOMContentLoaded', function () {
    const generateSongForm = document.getElementById('generate-song-form');
    const songInput = document.getElementById('song-input');
    const songOutput = document.getElementById('song-output');
    const generatedSong = document.getElementById('generated-song');

    generateSongForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const userInput = songInput.value.trim();
        if (!userInput) {
            alert('Inserisci del testo per generare una canzone.');
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ songInput: userInput })
        };

        fetch('/generate-song', requestOptions)
            .then(response => response.json())
            .then(data => {
                generatedSong.textContent = data.song;
                songOutput.style.display = 'block';
            })
            .catch(error => console.error('Errore:', error));
    });
});
