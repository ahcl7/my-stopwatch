const { I_PIECE, J_PIECE, L_PIECE, O_PIECE, S_PIECE, T_PIECE, Z_PIECE } = require('./piece')

const { Piece } = require('./piece')

class Rng {
  getRandomPack() {
    const res = [I_PIECE.clone(), J_PIECE.clone(), T_PIECE.clone(), S_PIECE.clone(), L_PIECE.clone(), Z_PIECE.clone(), O_PIECE.clone()]
    for (let i = 0; i < res.length; i++) {
      const t = Math.floor(Math.random() * res.length)
      const tmp = res[i]
      res[i] = res[t]
      res[t] = tmp
    }
    return res
  }

  constructor() {
    this.pieces = this.getRandomPack().concat(this.getRandomPack())
  }

  getNextPiece() {
    return this.pieces[this.pieces.length - 1]
  }

  getNextNextPiece() {
    return this.pieces[this.pieces.length - 2]
  }

  getNextPieceWithId(id) {
    return this.pieces[this.pieces.length - id]
  }

  pop() {
    this.pieces.pop()
    if (this.pieces.length < 7) {
      this.pieces = this.getRandomPack().concat(this.pieces)
    }
  }
}

module.exports = Rng
