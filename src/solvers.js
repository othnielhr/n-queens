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
window.findNQueensSolution = function(n) {
  // var solution = new Board({n: n}); //fixme
  // var temp = solution;
  // var count = 0;
  // var initialC = 0;
  // var findQ = function(initialC, temp){
  //   temp.togglePiece(0, initialC);
  //   for (let row = 0; row < n; row++) {
  //     for (let coln = 0; coln < n; coln++) {
  //       if (temp.get[row][coln] === 1) {
  //         break;
  //       }
  //       temp.togglePiece(row, coln);
  //       if (solution.hasAnyQueensConflicts()) {
  //         temp.togglePiece(row, coln);
  //       }
  //       count++;
  //     }
  //   }
  // }
  // findQ(initialQ, temp);
  // if (count === n) {
  //   solution = temp;
  //   return solution.rows();
  // } else {
  //    initialC++;
  //    temp = solution;
  //    findQ(initialC, temp);
  // }
  var solution = new Board({n: n});
  var result = [];
  var temp = {};
  var findRooks = function(currRow, n, solution) {
    if (currRow === n) {

      result.push(JSON.stringify(solution.rows()));
      for (let i = 0; i < n; i++) {
        temp[i] = solution.rows();
      }
      // console.log('result', result);
      // for (let i = 0; i < solution.rows().length; i++) {
      //   console.log('solution2: ' + solution.rows());
      // }
      return;
    }
    for (let coln = 0; coln < n; coln++) {
      solution.togglePiece(currRow, coln);
      if (!solution.hasAnyQueensConflicts()) {
        findRooks(currRow + 1, n, solution);
      }
      solution.togglePiece(currRow, coln);
    }
  };
  findRooks(0, n, solution);
  console.log('lens:' + result.length, result, temp);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

