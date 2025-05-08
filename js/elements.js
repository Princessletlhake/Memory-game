class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber;
    this.playground = document.querySelector('.playground')
    this.createCard()
  }

  createCard(){
    console.log(this.cardsNumber)
    this.playground.style.gridTemplateRows =`repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`
    this.playground.style.gridTemplateColumns =`repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`
  }
}

export default Elements;
