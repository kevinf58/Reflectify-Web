import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import { Cell, Coords, CellPos } from "../../../types/Maze";
import { Link } from "../../common/Link";

const ROWS = 35;
const COLUMNS = 22;
//in ms
const DELAY = 1;

const path: Cell[] = [];

export const GenerateMaze = () => {
  const [gridState, setGridState] = useState<Cell[][]>([]);
  const [onClickDisabled, setOnclickDisabled] = useState(false);

  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);
  const isAnimated = useSelector(
    (state: RootState) => state.animations.toggled,
  );

  const isGenerating = useRef(false);

  let tilesGenerated = 0;

  const pause = () => {
    return new Promise((resolve) => setTimeout(resolve, DELAY));
  };

  const validMove = (props: CellPos) => {
    if (
      0 <= props.coords.x &&
      props.coords.x < ROWS &&
      0 <= props.coords.y &&
      props.coords.y < COLUMNS &&
      props.gridState[props.coords.y][props.coords.x].visited === false
    ) {
      return true;
    } else {
      return false;
    }
  };

  const updateGrid = (props: Coords) => {
    const newGrid = [...gridState];
    newGrid[props.y][props.x].visited = true;
    setGridState(newGrid);
  };

  const updateWalls = (props: { prevCell: Cell; nextCell: Cell }) => {
    const prevCell = props.prevCell;
    const nextCell = props.nextCell;

    if (prevCell.coords.y > nextCell.coords.y) {
      prevCell.walls.top = false;
      nextCell.walls.bottom = false;
    } else if (prevCell.coords.x < nextCell.coords.x) {
      prevCell.walls.right = false;
      nextCell.walls.left = false;
    } else if (prevCell.coords.y < nextCell.coords.y) {
      prevCell.walls.bottom = false;
      nextCell.walls.top = false;
    } else if (prevCell.coords.x > nextCell.coords.x) {
      prevCell.walls.left = false;
      nextCell.walls.right = false;
    }
  };

  const generate = async (props: Cell) => {
    const start = props;

    setOnclickDisabled(true);

    // begin by visiting the starting node
    updateGrid({ x: start.coords.x, y: start.coords.y });

    isGenerating.current = true;

    recursiveBacktrack(start);
  };

  const recursiveBacktrack = async (props: Cell) => {
    let nextCell: Cell;
    let prevCell: Cell;

    nextCell = props;

    if (!isGenerating.current) {
      setGridState(initializeGrid());
      return;
    }
    // if the current cell has no neighbors, backtrack until a cell with neighbors is found
    else if (props.neighbors.length === 0) {
      // prevent an error being thrown if all cells are visited and maze generation is complete
      if (tilesGenerated === ROWS * COLUMNS - 1) return;
      else nextCell = path.pop() as Cell;
    } else {
      const neighborArr = props.neighbors;

      for (let i = 0; i < neighborArr.length; i++) {
        const randIndex = Math.floor(Math.random() * neighborArr.length);

        if (neighborArr[randIndex].visited) {
          neighborArr.splice(randIndex, 1);
          continue;
        } else {
          isAnimated && (await pause());

          tilesGenerated++;

          prevCell = nextCell;

          nextCell = neighborArr[randIndex];
          nextCell.visited = true;
          path.push(nextCell);
          updateWalls({ prevCell, nextCell });
          updateGrid({ x: nextCell.coords.x, y: nextCell.coords.y });
          break;
        }
      }
    }
    recursiveBacktrack(nextCell);
  };

  const initializeGrid = () => {
    const initialGrid: Cell[][] = [];

    // initializing the grid with cells
    for (let i = 0; i < COLUMNS; i++) {
      const currRow: Cell[] = [];
      for (let j = 0; j < ROWS; j++) {
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

      validMove({
        coords: { x: currCell.coords.x, y: currCell.coords.y - 1 },
        gridState: initialGrid,
      }) &&
        neighborArr.push(initialGrid[currCell.coords.y - 1][currCell.coords.x]);
      validMove({
        coords: { x: currCell.coords.x + 1, y: currCell.coords.y },
        gridState: initialGrid,
      }) &&
        neighborArr.push(initialGrid[currCell.coords.y][currCell.coords.x + 1]);
      validMove({
        coords: { x: currCell.coords.x, y: currCell.coords.y + 1 },
        gridState: initialGrid,
      }) &&
        neighborArr.push(initialGrid[currCell.coords.y + 1][currCell.coords.x]);
      validMove({
        coords: { x: currCell.coords.x - 1, y: currCell.coords.y },
        gridState: initialGrid,
      }) &&
        neighborArr.push(initialGrid[currCell.coords.y][currCell.coords.x - 1]);

      currCell.neighbors = neighborArr;
    });

    return initialGrid;
  };

  useEffect(() => {
    setGridState(initializeGrid());
  }, []);

  return (
    <>
      <h6>Click on any tile to generate a maze!</h6>
      <div className="grid-cols-35 m-1 grid border-default border-solid border-black shadow-xl">
        {gridState.flat().map((cell, index) => (
          <div
            key={index}
            id="grid"
            className={`hover: h-2 w-2 border-solid border-black border-opacity-20 ${
              cell.visited ? "bg-white" : "bg-white/95"
            } ${onClickDisabled ? "cursor-default" : "cursor-pointer"} ${
              !cell.visited && "border-[1px]"
            } ${cell.walls.top && "border-t-[1px]"} ${
              cell.walls.right && "border-r-[1px]"
            } ${cell.walls.bottom && "border-b-[1px]"} ${
              cell.walls.left && "border-l-[1px]"
            } ${!cell.visited && !onClickDisabled && "duration-100 hover:scale-[1.75]"}`}
            onClick={() => !onClickDisabled && generate(cell)}
            title={`Cell (${cell.coords.x + 1}, ${cell.coords.y + 1})`}
          />
        ))}
      </div>
      <h6 className="">
        Recursive Division!
        <Link
          onClick={() => {
            isGenerating.current = false;
            setOnclickDisabled(false);
            setGridState(initializeGrid());
          }}
          children={"Reset"}
          bgColor="before:bg-black"
          underline
        />
      </h6>
    </>
  );
};
