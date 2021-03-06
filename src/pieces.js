// function GamePiece () {
//     piece = document.getElementById("pieces")
//     const ctx = piece.getContext('2d');

//     ctx.beginPath();
//     ctx.arc(300, 250, 50, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "black"
//     ctx.stroke();
// }

// module.exports = GamePiece;

class Bubble {
  constructor(pieceColor, pieceValue, description){
    this.pieceColor = pieceColor;
    this.pieceValue = pieceValue;
    this.description = description;
  }

  color() {
    return pieceColor;
  }

  value() {
    return pieceValue;
  }

  description() {
    return description;
  }

  addDescription(add) {
    description += add;
  }


}

export default GamePiece;

// [[],[],[],[],[],[]] <= board.size 6 ==>
// [[],[],[],[],[]] <= board.size 5
// [[],[],[],[],[],[],[]] <= board.size 7
// [
//   [],[],[],[],[],
//   [],[],[],[],[],
//   [],[],[],[],[],
//   [],[],[],[],[],
// ] <= board.size 7
