// Transformer le code ci dessous pour utiliser les promises

function conversation() {
    parole('You have earned one Schrute Bucks.', () => {
        parole('I don\'t want it.', () => {
            parole('Then you have been deduced 50 Schrute Bucks.', () => {
                parole('Make it a hundred.', () => {
                    parole('Don\'t you want to earn Schrute Bucks ?', () => {
                        parole('No. In fact, I will give you a billion Stanley Nickels if you never talk to me again.', () => {
                            parole('What is the ration of Stanley Nickels to Schrute bucks ?', () => {
                                parole('The same as the ratio of unicors to leprechauns.', () => {
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function parole(text, cb) {
    setTimeout(() => {
        console.log(text)
        cb()
    }, 2000)
}

conversation();