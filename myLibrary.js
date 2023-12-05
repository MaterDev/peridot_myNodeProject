function checkoutBook(bookToCheckout) {
 return 'Checking out: ' + bookToCheckout
}

let library = {
    book1: "Mist Born",
    book2: "Neuromancer",
    book3: "Headfirst Javascript",
    book4: "Im not a hacker I promise.",
    checkout: checkoutBook
}

module.exports = library