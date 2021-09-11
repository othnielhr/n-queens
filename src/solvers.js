/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// time: O(n^3)
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme
  for (let row = 0; row < n; row++) {
    for (let coln = 0; coln < n; coln++) {
      solution.togglePiece(row, coln);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(row, coln);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution), solution.rows());
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

//time: O(2^n)
window.countNRooksSolutions = function(n) {
  // var solutionCount = undefined; //fixme

  var solution = new Board({n: n});
  var solutionCount = 0;
  var findRooks = function(currRow, n, solution) {
    if (currRow === n) {
      solutionCount++;
      return;
    }
    for (let coln = 0; coln < n; coln++) {
      solution.togglePiece(currRow, coln);
      if (!solution.hasAnyRooksConflicts()) {
        findRooks(currRow + 1, n, solution);
      }
      solution.togglePiece(currRow, coln);
    }
  };
  findRooks(0, n, solution);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

// time: O(2^n)
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var result = solution.rows();

  var findQueens = function(currRow, n, solution) {
    if (currRow === n) {
      result = solution.rows();
      return result;
    }
    for (let coln = 0; coln < n; coln++) {
      solution.togglePiece(currRow, coln);
      if (!solution.hasAnyQueensConflicts()) {
        let temp = findQueens(currRow + 1, n, solution);
        if (temp) {
          return temp;
        }
      }
      solution.togglePiece(currRow, coln);
    }
  };
  findQueens(0, n, solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other

//time: O(2^n)
window.countNQueensSolutions = function(n) {
  var solution = new Board({n: n});
  var solutionCount = 0;
  var findQueens = function(currRow, n, solution) {
    if (currRow === n) {
      solutionCount++;
      return;
    }
    for (let coln = 0; coln < n; coln++) {
      solution.togglePiece(currRow, coln);
      if (!solution.hasAnyQueensConflicts()) {
        findQueens(currRow + 1, n, solution);
      }
      solution.togglePiece(currRow, coln);
    }
  };
  findQueens(0, n, solution);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

