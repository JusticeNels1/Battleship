function createShip (length) {
  const Ship = {
    times_hit:0,
    sunken: false,
    length:length,
    hit,
    isSunk
  }

    function hit(){
        Ship.times_hit++ 
        if (isSunk()){
            return "sunk"
        }
    }

    function isSunk(){
        if (Ship.length == Ship.times_hit) {
              Ship.sunken = true
        }
    }

    return Ship
}



function createGameBoard(size) {
    // Create the game board array filled with empty cells (e.g., water)
    const board = Array.from({ length: size }, () => Array(size).fill('water'));
  
    // Function to place a ship on the board
    function placeShip(ship, row, col, orientation) {
      if (row < 0 || row >= size || col < 0 || col >= size) {
        throw new Error('Invalid placement: Out of bounds');
      }
  
      const shipLength = ship.length;
      const endRow = orientation === 'horizontal' ? row : row + shipLength - 1;
      const endCol = orientation === 'horizontal' ? col + shipLength - 1 : col;
  
      if (endRow >= size || endCol >= size) {
        throw new Error('Invalid placement: Ship goes beyond the board');
      }
  
      // Check if the cells for placing the ship are already occupied
      for (let i = row; i <= endRow; i++) {
        for (let j = col; j <= endCol; j++) {
          if (board[i][j] !== 'water') {
            throw new Error('Invalid placement: Cells are already occupied');
          }
        }
      }
  
      // Place the ship on the board
      for (let i = row; i <= endRow; i++) {
        for (let j = col; j <= endCol; j++) {
          board[i][j] = 'ship';
        }
      }
  
      return true;
    }
  
    // Function to receive an attack at the specified position
    function receiveAttack(row, col) {
      if (row < 0 || row >= size || col < 0 || col >= size) {
        throw new Error('Invalid attack: Out of bounds');
      }
  
      if (board[row][col] === 'water') {
        // Mark as a miss if the cell contains water
        board[row][col] = 'miss';
      } else if (board[row][col] === 'ship') {
        // Mark as a hit if the cell contains a ship
        board[row][col] = 'hit';
      }
  
      // Return true if the attack was successful (hit or miss), false if the cell was attacked before
      return board[row][col] === 'hit' || board[row][col] === 'miss';
    }
  
    // Function to check if all ships on the board are sunk
    function allShipsSunk() {
      return board.every(row => row.every(cell => cell !== 'ship'));
    }
  
    // Function to display the game board (for debugging purposes)
    function displayBoard() {
      for (let i = 0; i < size; i++) {
        console.log(board[i].join(' '));
      }
    }
  
    return {
      size,
      board,
      placeShip,
      receiveAttack,
      allShipsSunk,
      displayBoard,
    };
}

const bismarck = createShip(4)

// bismarck.hit()
// bismarck.hit()
// bismarck.hit()
// bismarck.hit()

// console.log(bismarck)


module.exports = createShip;