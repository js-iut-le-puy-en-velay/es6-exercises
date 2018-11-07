// transformer le code ci dessous en utilisant des promises
// Le code ci dessous, lit un fichier CSV, formatte les informations et enregistre au format json dans un nouveau fichier
// Vous devez transformer ce code en trois fonctions qui renvoient des promises : 
// - une pour lire le fichier csv
// - une pour traiter les données
// - Une pour écrire dans le fichier 
// N'oubliez pas de vous rendre dans le dossier via ligne de commande et d'éxécuter la commande 'npm install' avant de lancer le script

const fs = require('fs');
const csv = require('csv');

const file = fs.readFileSync('music.csv') // On lit le fichier

csv.parse(file, {
    delimiter: ';'
}, (err, data) => { // On parse le fichier pour transformer le CSV en quelque chose de lisible pour nous
    if(err) throw err; // Si une erreur survient on arrète le programme
    const [header, ...songs] = data; // On enlève les headers du fichiers

    const formattedSongs = songs.map((song) => { // On formattele fichier comme il faut en json
        return  {
            name: song[0],
            artist: song[1],
            album: song[2],
            trackNumber: Number(song[3]),
            length: Number(song[4]) / 1000 / 60, // On transforme les milisecondes en minutes,
            date: new Date(song[5]).toLocaleDateString('fr-FR') // On formate la date pour la rendre plus lisible
        }
    })

    fs.writeFileSync('music.json', JSON.stringify(formattedSongs, null, 2)); // On encode notre tableau en json et on l'enregistre dans le fichier music.json
})