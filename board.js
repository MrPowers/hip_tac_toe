//winner, tie, maintain state
var Board = {

  calculateCells : function(){
    var result = [];
    var cells = [$('#cell0'), $('#cell1'), $('#cell2'),
                 $('#cell3'), $('#cell4'), $('#cell5'),
                 $('#cell6'), $('#cell7'), $('#cell8')];
    $.each(cells, function(index, value){
      result.push(value.text());
    });
    return(result);
  },

  //function should be called after checking for a winner
  tieGame : function() {
    var cells = this.calculateCells();
    var result;
    for (var i = 0, l = cells.length; i < l; i ++) {
      if (cells[i] == "") {
        return false;
      }
    }
    return true;
  },

  //board positions
  // 0 1 2
  // 3 4 5
  // 6 7 8
  checkForWinner : function () {
    var winning_positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (var i = 0, l = winning_positions.length; i < l; i ++) {
      var winning_position = this.arrayToCells(winning_positions[i]);
      if (this.winner("X", winning_position)) {
        return "X";
      } else if (this.winner("O", winning_position)) {
        return "O";
      }
    };
    return false;
  },

  arrayToCells : function (array) {
    var cells = this.calculateCells();
    var result = [];
    for (var i = 0, l = array.length; i < l; i ++) {
      result.push(cells[array[i]]);
    }
    return result;
  },

  winner : function (color, winning_position) {
    for (var i = 0, l = winning_position.length; i < l; i ++) {
      if (winning_position[i] != color) {
        return false;
      }
    }
    return true;
  },

  //isUndefined : function (value) {
    //return(value == undefined);
  //}

}
