const { Piece } = require('./piece')
const Board = require('./board')
const Rng = require('./rng')
const { HEIGHT, WIDTH } = require('./cons')

const Score = {
  0: 0,
  1: 5000,
  2: 15000,
  3: 50000,
  4: 100000
}
class Game {
  constructor() {
    this.board = new Board(HEIGHT, WIDTH)
    this.rng = new Rng()
    this.curPiece = this.rng.getNextPiece()
    this.curX = 0;
    this.curY = Math.floor(WIDTH / 2) - Math.floor(this.curPiece.n / 2)
    this.nxtPiece = this.rng.getNextNextPiece()
    this.score = 0
  }

  moveDown() {
    if (this.canMoveDown()) this.curX += 1
    else {
      this.hardDrop()
    }
  }

  moveRight() {
    if (this.canMoveRight()) this.curY += 1
  }

  moveLeft() {
    if (this.canMoveLeft()) this.curY -= 1
  }

  rotateLeft() {
    if (this.canRotateLeft()) this.curPiece.rotateLeft()
  }

  rotateRight() {
    if (this.canRotateRight()) this.curPiece.rotateRight()
  }

  rotate(dir) {
    if (this.canRotate(dir)) this.curPiece.rotate(dir)
  }

  updateNextPiece() {
    this.rng.pop()
    this.curPiece = this.rng.getNextPiece()
    this.nxtPiece = this.rng.getNextNextPiece()
    this.curX = 0
    this.curY = Math.floor(WIDTH / 2) - Math.floor(this.curPiece.n / 2)
  }
  hardDrop() {
    this.board.add(this.curPiece, this.curX, this.curY)
    const numberOfLineCleared = this.board.clear()
    this.updateNextPiece()
    this.score += Score[numberOfLineCleared]
  }

  canMoveLeft() {
    return this.board.canMoveLeft(this.curPiece, this.curX, this.curY)
  }

  canMoveRight() {
    return this.board.canMoveRight(this.curPiece, this.curX, this.curY)
  }

  canMoveDown() {
    return this.board.canMoveDown(this.curPiece, this.curX, this.curY)
  }

  canRotateLeft() {
    return this.board.canRotateLeft(this.curPiece, this.curX, this.curY)
  }
  canRotateRight() {
    return this.board.canRotateRight(this.curPiece, this.curX, this.curY)


  }
  canRotate(dir) {
    return this.board.canRotate(this.curPiece, this.curX, this.curY, dir)

  }
}

module.exports = Game
