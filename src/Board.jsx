import React, { useState } from "react";
import Case from "./Case";

function Board({ rows, cols }) {
  function createArray(number1, number2) {
    const tabCol = [];

    for (let i = 0; i < number1; i++) {
      const tabRow = [];
      for (let j = 0; j < number2; j++) {
        tabRow.push(!([i] - [j]));
      }
      tabCol.push(tabRow);
    }

    return tabCol;
  }
  createArray();

  const [arrayRows, setArrayRows] = useState(createArray(rows, cols));

  return (
    <div className="Board">
      <p>Number of row: {rows} </p>
      <p>Number of columns {cols}</p>

      <div style={{ display: `flex`, flexDirection: `column` }}>
        {arrayRows.map((arrayColumn, index) => {
          return (
            <div key={index} style={{ display: `flex`, flexDirection: `row` }}>
              {arrayColumn.map((element, index) => {
                return <Case key={index} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;

// import React, { Component } from 'react';

// class Chessboard extends Component {
//     render() {
//       const chessboard = [];
//       let currentRow = [];

//       // generate checkerboard
//       for (let row = 0; row < this.props.size; row++) {
//         for(let column = 0; column < this.props.size; column++) {
//           // if the column are both even or odd we add the class 'fill'
//           currentRow.push(
//             <td key={`${row},${column}`}
//               className={row % 2 === column % 2 ? 'fill' : '' }></td>
//           );
//         }
//         chessboard.push(<tr key={row}>{currentRow}</tr>);
//         currentRow = []; // reset the row
//       }

//       return (
//         <table className="chess">
//           <tbody>
//             {chessboard}
//           </tbody>
//         </table>
//       );
//     }
// }

// export default Chessboard;
