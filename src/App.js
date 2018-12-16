import React, { Component } from 'react';
import Tile from "./components/tile/Tile";
import Menu from "./components/menu/Menu";
import Score from "./components/score/Score";
import './App.css';


// before each render check to see if any state variables are false

const cards = [
  "images/0uqxfkljdewz.jpg",
  "images/eye_cn3_palsey3.jpg",
  "images/eyes.jpg",
  "images/makeup_620.jpg",
  "images/Makeup-Artist-Who-Uses-Bugs-Eye-Shadow.jpg",
  "images/maxresdefault-1.jpg",
  "images/maxresdefault.jpg",
  "images/MM8355_150911_24310.ngsversion.1497983407079.adapt.1900.1.jpg",
  "images/saturn-585x390.jpg",
  "images/01-animal-eyes-nationalgeographic_2347532.ngsversion.1538656201270.adapt.1900.1.jpg",
  "images/1-animal-eyes.jpg",
  "images/closeup-eye-photos.jpg",
];
const randomizeCards = (cards)=> {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

class App extends Component {
  state = {
    score: 0,
    gameOver: false
  };
  
  
  // answerKey = ()=> {

  // }
  
  toggleState = (name)=> {
    if(this.state[name]){
      console.log("game over");
      this.setState(() => ({
        gameOver: true
      }))
      // build a modal to take the place of the alert
      // when it comes up it will reset the score and allow the user to play again
    }else{
      this.setState(state => ({
        [name]: !state[name],
        score: state.score + 1
      }));
    }
  }
  
  restart = (name)=> {
    console.log("restart", name);
    this.setState(()=> ({
      gameOver: "restart"
    }))
  }



  render() {
    switch(this.state.gameOver) {
      case true:
        console.log("game overs");
        return (
          <Menu 
            state={this.state} 
            callback={this.restart} 
          />
        );
      case false:
        console.log("game on");
        randomizeCards(cards);
        return (
          <div>
            <Score state={this.state} />
            <section className="cardTable">
              {cards.map((card) =>
                <Tile 
                  state={this.state} 
                  callback={this.toggleState} 
                  className="tile" 
                  key={card} 
                  name={card} 
                />
              )}
            </section>
          </div>
        );
      case "restart":
        return <App />
      default:
        return <Menu state={this.state} callback={this.restart} />
    }

    
    // if(this.state.gameOver){
    //   console.log("game overs");
    //   return (
    //     <Menu 
    //       state={this.state} 
    //       callback={this.restart} 
    //     />  
    //   )
    // }else{
    //   randomizeCards(cards);
    //   return (
    //     <div className="cardTable">
    //       {cards.map((card) =>
    //         <Tile 
    //           state={this.state} 
    //           callback={this.toggleState} 
    //           className="tile" 
    //           key={card} 
    //           name={card} 
    //         />
    //       )}
    //     </div>
    //   );
    // }

  }
}



export default App;
