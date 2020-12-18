const { LEFT, RIGHT } = require('./cons')

class Piece {
  constructor(bitmap) {
    this.bitmap = bitmap
    this.n = bitmap[0].length
  }

  rotateLeft() {
    const clone = this.bitmap.map(x => x.slice())
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.bitmap[this.n - j - 1][i] = clone[i][j];
      }
    }
  }

  rotateRight() {
    const clone = this.bitmap.map(x => x.slice())
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.bitmap[j][this.n - i - 1] = clone[i][j];
      }
    }
  }

  rotate(dir) {
    if (dir === LEFT) {
      this.rotateLeft()
    }
    if (dir === RIGHT) {
      this.rotateRight()
    }
  }
  clone() {
    const tmp = this.bitmap.map(x => x.slice())
    return new Piece(tmp)
  }
}

module.exports = Piece
const I_PIECE = new Piece([
  [0, 0, 0, 0],
  [7, 7, 7, 7],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
])
const L_PIECE = new Piece([
  [0, 6, 0],
  [0, 6, 0],
  [0, 6, 6],
])
const J_PIECE = new Piece([
  [0, 5, 0],
  [0, 5, 0],
  [5, 5, 0],
])
const T_PIECE = new Piece([
  [0, 4, 0],
  [4, 4, 4],
  [0, 0, 0],
])
const S_PIECE = new Piece([
  [0, 3, 3],
  [3, 3, 0],
  [0, 0, 0],
])
const Z_PIECE = new Piece([
  [2, 2, 0],
  [0, 2, 2],
  [0, 0, 0],
])
const O_PIECE = new Piece([
  [1, 1],
  [1, 1]
])

module.exports = {
  Piece,
  I_PIECE,
  O_PIECE,
  T_PIECE,
  S_PIECE,
  Z_PIECE,
  L_PIECE,
  J_PIECE
}
