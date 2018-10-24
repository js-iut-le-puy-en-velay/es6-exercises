// Récupérer les éléments passé à la fonction sous forme de tableau,

const whatYouShallDo = (one, two, three, four, five, six) => {
    const fewWords = [one, two, three, four, five, six];

    const makeASentence = fewWords.join(' ')

    console.log(makeASentence);
}

// Celui là doit marcher
whatYouShallDo('BENN', 'DAAH', 'NEEEY', 'JONNE', 'SENOWWWE', '!!!');

// Celui là seulement la solution trouvée
whatYouShallDo('Faut', 'faire', 'comme', 'avec', 'les', 'scorpions', 'qui', 'se', 'suicident', 'quand', 'ils', 'sont', 'entourés', 'par', 'le', 'feu', ',', 'faut', 'faire', 'un', 'feu', 'en', 'forme', 'de', 'cercle', ',', 'autour', 'd’eux', 'comme', 'ça', 'ils', 'se', 'suicident', ',', 'pendant', 'que', 'nous', 'on', 'fait', 'le', 'tour', 'et', 'on', 'lance', 'de', 'la', 'caillasse', 'de', 'l’autre', 'côté', 'pour', 'brouiller...', 'Non ?');