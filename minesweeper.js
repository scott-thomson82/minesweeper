document.addEventListener('DOMContentLoaded', startGame)


var board = {
  cells: [
    { row: 1, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 3, isMine: true, hidden: true, isMarked: false },
    { row: 2, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 3, isMine: true, hidden: true, isMarked: false },
    { row: 3, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 3, isMine: false, hidden: true, isMarked: false }
  ]
}

function startGame() {
  for (var i = 0; i < board.cells.length; i++) {
    countSurroundingMines(board.cells[i])
  }
  addEventListener("click", checkForWin)
  addEventListener("contextmenu", checkForWin)
  lib.initBoard()
}

function countSurroundingMines(cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var counter = 0
  for (var i = 0; i < surroundingCells.length; i++)
    if (surroundingCells[i].isMine == true) {
      counter++;
    }
  return cell.surroundingMines = counter
}



function checkForWin() {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false) {
      return
    } else if (board.cells[i].isMine == false && board.cells[i].hidden == true) {
      return
    }
  }
  return lib.displayMessage('You win!')

}



