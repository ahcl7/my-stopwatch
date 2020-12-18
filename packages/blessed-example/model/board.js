const { LEFT, RIGHT } = require('./cons')
class Board {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.bitmap = []
    for(let i = 0 ; i < height; i++) {
      this.bitmap.push(new Array(width).fill(0))
    }
  }

  canAdd(piece, x, y) {
    const sz = piece.n
    for(let i = 0 ; i < sz; i++) {
      for(let j = 0 ; j < sz; j++) {
        const x1 = x + i
        const y1 = y + j
        if (piece.bitmap[i][j] && (x1 >= this.height || y1 >= this.width)) return false
        if (piece.bitmap[i][j] && this.bitmap[x + i][y + j]) return false
      }
    }
    return true
  }
  add(piece, x, y) {
    const sz = piece.n
    while (x < this.height && this.canAdd(piece, x, y)) {
      x ++
    }
    x --;
    for(let i = 0 ; i < sz; i++) {
      for(let j = 0 ; j < sz; j++) {
        if (piece.bitmap[i][j]) this.bitmap[x + i][y + j] += piece.bitmap[i][j]
      }
    }
  }

  clear() {
    const newBitmap = []
    let numberOfLinesCleared = 0
    for(let i = 0 ; i < this.height; i++) {
      let t = 0
      for(let j = 0 ; j < this.width; j++) {
        if (this.bitmap[i][j]) t++
      }
      if (t !== this.width) {
        newBitmap.push(this.bitmap[i])
      } else numberOfLinesCleared ++
    }
    while (newBitmap.length < this.height) {
      newBitmap.unshift(new Array(this.width).fill(0))
    }
    this.bitmap = newBitmap
    return numberOfLinesCleared
  }

  canMoveLeft(piece, x, y) {
    const sz = piece.n
    for(let i = 0 ; i < sz; i++) {
      for(let j = 0; j < sz; j++) {
        if (piece.bitmap[i][j] && y + j === 0) return false
      }
    }
    return this.canAdd(piece, x, y - 1)
  }

  canMoveRight(piece, x, y) {
    const sz = piece.n
    for(let i = 0 ; i < sz; i++) {
      for(let j = 0; j < sz; j++) {
        if (piece.bitmap[i][j] && j + y === this.width - 1) return false
      }
    }
    return this.canAdd(piece, x, y + 1)
  }

  canMoveDown(piece, x, y) {
    return this.canAdd(piece, x + 1, y)
  }

  canRotateLeft(piece, x, y) {
    const clone = piece.clone()
    clone.rotateLeft()
    return this.canAdd(clone, x, y)

  }
  canRotateRight(piece, x, y) {
    const clone = piece.clone()
    clone.rotateRight()
    return this.canAdd(clone, x, y)
  }
  canRotate(piece, x, y, dir) {
    if (dir === LEFT) {
      return this.canRotateLeft(piece, x, y)
    }
    if (dir === RIGHT) {
      return this.canRotateRight(piece, x, y)
    }
  }
  clone() {
    const res = new Board(this.height, this.width)
    res.bitmap = this.bitmap.map((row) => row.slice())
    return res
  }
}

module.exports = Board
