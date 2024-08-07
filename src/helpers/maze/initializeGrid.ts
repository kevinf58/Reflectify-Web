import { Cell, CellPos, Coords } from "../../types/Maze.type";

const isValidMove = (props: CellPos) => {
  if (
    0 <= props.coords.x &&
    props.coords.x < props.gridState[0].length &&
    0 <= props.coords.y &&
    props.coords.y < props.gridState.length &&
    props.gridState[props.coords.y][props.coords.x].visited === false
  ) {
    return true;
  } else {
    return false;
  }
};

export const initializeGrid = (props: Coords) => {
  const initialGrid: Cell[][] = [];

  // initializing the grid with cells
  for (let i = 0; i < props.y; i++) {
    const currRow: Cell[] = [];
    for (let j = 0; j < props.x; j++) {
      const currCell: Cell = {
        coords: {
          x: j,
          y: i,
        },
        visited: false,
        walls: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
        neighbors: [],
      };
      currRow.push(currCell);
    }
    initialGrid.push(currRow);
  }

  // initializing the neighbors for all cells in the grid
  initialGrid.flat().map((currCell) => {
    const neighborArr: Cell[] = [];

    isValidMove({
      coords: { x: currCell.coords.x, y: currCell.coords.y - 1 },
      gridState: initialGrid,
    }) &&
      neighborArr.push(initialGrid[currCell.coords.y - 1][currCell.coords.x]);
    isValidMove({
      coords: { x: currCell.coords.x + 1, y: currCell.coords.y },
      gridState: initialGrid,
    }) &&
      neighborArr.push(initialGrid[currCell.coords.y][currCell.coords.x + 1]);
    isValidMove({
      coords: { x: currCell.coords.x, y: currCell.coords.y + 1 },
      gridState: initialGrid,
    }) &&
      neighborArr.push(initialGrid[currCell.coords.y + 1][currCell.coords.x]);
    isValidMove({
      coords: { x: currCell.coords.x - 1, y: currCell.coords.y },
      gridState: initialGrid,
    }) &&
      neighborArr.push(initialGrid[currCell.coords.y][currCell.coords.x - 1]);

    currCell.neighbors = neighborArr;
  });

  return initialGrid;
};