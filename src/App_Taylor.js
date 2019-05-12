import React from "react";
import "./App.css";
import Card from "./components/Card.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //idCount: 20,
      howBadAreYou: 0,
      clickNum: 0,
      clickedId: 0,
      clickedSrc: "",
      clickedId2: 0,
      clickedSrc2: "",
      numOfCorrectPairs: 0,
      numOfPairs: 10,
      cards: [{
        id: 0,
        pic: 'BlackPanther',
        imgSrc: './img/black-panther.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 1,
        pic: 'Iron Man',
        imgSrc: './img/iron-man.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 2,
        pic: 'Iron Man',
        imgSrc: './img/spider-man.jpg',
        flipped: false,
        trueFlip: false
      },
      {
        id: 3,
        pic: 'BlackPanther',
        imgSrc: './img/hulk.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 4,
        pic: 'BlackPanther',
        imgSrc: './img/thor.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 5,
        pic: 'Iron Man',
        imgSrc: './img/xmen-rogue.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 6,
        pic: 'Iron Man',
        imgSrc: './img/xmen-wolverine.jpg',
        flipped: false,
        trueFlip: false
      },
      {
        id: 7,
        pic: 'BlackPanther',
        imgSrc: './img/black-widow.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 8,
        pic: 'BlackPanther',
        imgSrc: './img/captain-america.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 9,
        pic: 'Iron Man',
        imgSrc: './img/captain-marvel.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 10,
        pic: 'Iron Man',
        imgSrc: './img/iron-man.jpg',
        flipped: false,
        trueFlip: false
      },
      {
        id: 11,
        pic: 'BlackPanther',
        imgSrc: './img/black-panther.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 12,
        pic: 'Thor',
        imgSrc: './img/thor.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 13,
        pic: 'Black Widow',
        imgSrc: './img/black-widow.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 14,
        pic: 'Wolverine',
        imgSrc: './img/xmen-wolverine.jpg',
        flipped: false,
        trueFlip: false
      },
      {
        id: 15,
        pic: 'Hulk',
        imgSrc: './img/hulk.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 16,
        pic: 'Rogue',
        imgSrc: './img/xmen-rogue.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 17,
        pic: 'Spider Man',
        imgSrc: './img/spider-man.jpg',
        flipped: false,
        trueFlip: false

      },
      {
        id: 18,
        pic: 'Captain America',
        imgSrc: './img/captain-america.jpg',
        flipped: false,
        trueFlip: false
      },
      {
        id: 19,
        pic: 'Captain Marvel',
        imgSrc: './img/captain-marvel.jpg',
        flipped: false,
        trueFlip: false

      }]
    }
  }
  componentDidUpdate() {
    if (this.state.clickNum === 2) {
      let newCards;
      let timer = 1000;
      let correctPair = 0;
      if (this.state.clickedSrc === this.state.clickedSrc2) {
        timer = 0;
        correctPair++;
        newCards = this.state.cards.map((card) => {
          if (card.id === this.state.clickedId || card.id === this.state.clickedId2) {
            return {
              ...card,
              trueFlip: (!card.trueFlip)
            }
          }
          else {
            return {
              ...card
            }
          }
        })
      }
      else {
        newCards = this.state.cards.map((card) => {
          if (card.id === this.state.clickedId || card.id === this.state.clickedId2) {
            return {
              ...card,
              flipped: (!card.flipped)
            }
          }
          else {
            return {
              ...card
            }
          }
        })
      }
      setTimeout(() => this.setState({ cards: newCards, clickNum: 0, howBadAreYou: this.state.howBadAreYou + 1, numOfCorrectPairs: this.state.numOfCorrectPairs + correctPair }), timer);
      //this.setState({ cards: newCards, clickNum: 0 })
    }
  }

  handleClick = (e, cardId, cardFlipped, trueCardFlipped) => {
    e.preventDefault();

    if (cardFlipped === false && trueCardFlipped === false) {
      //let newCards;
      if (this.state.clickNum === 0) {
        let newCards = this.state.cards.map((card) => {
          if (card.id === cardId) {
            this.setState({ clickNum: (this.state.clickNum + 1), clickedId: card.id, clickedSrc: card.imgSrc });
            return {
              ...card,
              flipped: (!card.flipped)
            }
          }
          else {
            return {
              ...card
            }
          }
        })
        this.setState({ cards: newCards });
      }
      else if (this.state.clickNum === 1) {
        let newCards = this.state.cards.map((card) => {
          if (card.id === cardId) {
            console.log(card.id)
            this.setState({ clickNum: 2, clickedId2: card.id, clickedSrc2: card.imgSrc });
            return {
              ...card,
              flipped: (!card.flipped)
            }
          }
          else {
            return {
              ...card
            }
          }
        });
        //take out case 2, make a delay instead
        this.setState({ cards: newCards });
      }
    }
  }

  // if (card.imgSrc === this.state.clickedSrc){


  // }
  // else{
  //   newCards = this.state.cards.map((card) => {
  //     if (card.id === cardId) {
  //       this.setState({ clickNum: 0 })
  //       return {
  //         ...card,
  //         flipped: (!card.flipped)
  //       }
  //     }
  //     else {
  //       return {
  //         ...card
  //       }
  //     }
  //   });

  // }
  //   break;
  // newCards = this.state.cards.map((card) => {
  //   if (card.id === cardId) {
  //     return {
  //       ...card,
  //       flipped: (!card.flipped)
  //     }
  //   }
  //   else {
  //     return {
  //       ...card
  //     }
  //   }
  // });


  // grid = [id1][id2]
  //        [id2][id1]
  //<img src={card.imgSrc} height="100px" width="100px" alt={card.pic} />


  handleShuffle = () => {
    let copiedCards = this.state.cards.map(card => {
      return { ...card }
    })
    let randomCards = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      let jimothy = Math.round(Math.random() * copiedCards.length);
      randomCards.push(copiedCards.splice(jimothy, 1))
      randomCards = randomCards.map(card => {
        if (card.id === jimothy) {
          return {
            ...card,
            id: i
          }
        }
        else {
          return {
            ...card
          }
        }
      })
    }

    this.setState({cards : randomCards});
  }

  render() {
    const cardGrid = this.state.cards.map(card => {
      return (<Card key={card.id} card={card} handleClick={e =>
        this.handleClick(e, card.id, card.flipped, card.trueFlip)} />)
    });

    return (
      <div>
        <h2>Magnificent Marmot Marvel Memory Match</h2>
        <div className='gridContainer'>
          {cardGrid}
        </div>
        <button onClick={(e) => this.handleShuffle()}> Try Me</button>
      </div>
    );
  }
}

export default App;


/*
Make a card component:
  -back image
  -flipped: boolean
  -check: boolean

Grid Component:
  -how many cards we want
  -handle events to:
      flip cards: tricky
        -keep track of number of cards flipped + both ids
      keep them flipped: medium
        -change boolean value
      reset them: tricky
        -randomize ids and


  Base:
    -grid (w/ reset)
      .card



*/
