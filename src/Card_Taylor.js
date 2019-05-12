import React from 'react';
import "../card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayed = <img onClick={(e) => this.props.handleClick(e, this.props.card.id, this.props.card.flipped, this.props.card.trueFlip)} src={this.props.card.imgSrc} height="100px" width="100px" alt={this.props.card.pic} />
    if (this.props.card.flipped === false) {
      displayed = <img onClick={(e) => this.props.handleClick(e, this.props.card.id, this.props.card.flipped, this.props.card.trueFlip)} src="./img/card-back.jpg" height="100px" width="100px" alt="flippity-doo-dah" />
    }
    // if (this.props.trueFlipped === true) {
    //   displayed = <img src={this.props.imgSrc} height="100px" width="100px" alt={this.props.pic} />
    // }
    return (
      <div className="gridItem">
        {displayed}
      </div>
    )
  }
}

export default Card;