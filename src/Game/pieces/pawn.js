import Piece from "./piece";

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = "pawn";
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  // główna metoda, w której trzeba zapisać wszystkie możliwe ruchy danej bierki.
  findLegalMoves() {
    const possibleMoves = [];

    return posiblesMoves;
  }
}

export default Pawn;