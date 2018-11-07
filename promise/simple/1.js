/// Réécrire cette fonction asynchone utilisant les callbacks vers des promises
/// Le but de cette fonction est d'afficher un message après 2 secondes

const delay = (callback, delay = 2000) => {
    setTimeout(() => {
        callback();
    }, delay)
}

const consumer = () => {
    console.log('IT IS DONE !')
}

delay(consumer);