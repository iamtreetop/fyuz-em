class GamePiece {
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

  drawPiece(x, y) {
    ellipse(x, y, 60, 60);
    fill(0,0,0);
    textSize(12);
    if (pieceValue != -1) {
      fill(255, 255, 255);
      text(description, x - 12, y - 2);
      text("" + pieceValue, x - 7, y + 9);
    } else {
      text(description, x - 5, y + 2);
    }
  };
}