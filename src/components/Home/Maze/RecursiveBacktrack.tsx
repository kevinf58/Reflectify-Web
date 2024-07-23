import { useSelector } from "react-redux";

import { Cell, Coords, MazeAlgoProps } from "../../../types/Maze.type";
import { pause } from "../../../helpers/maze/pause";
import { RootState } from "../../../state/store";
import { updateWalls } from "../../../helpers/maze/updateWalls";
import { initializeGrid } from "../../../helpers/maze/initializeGrid";
import { useEffect, useRef, useState } from "react";
import { Link } from "../../common/Link";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export const RecursiveBacktrack = (props: MazeAlgoProps) => {
  const [gridState, setGridState] = useState<Cell[][]>([]);
  const [onClickDisabled, setOnclickDisabled] = useState(false);

  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);
  const isAnimated = useSelector(
    (state: RootState) => state.animations.toggled,
  );

  const isGenerating = useRef(false);
  const currBreakpoint = useBreakpoint();

  const path: Cell[] = [];
  let tilesGenerated = 0;

  const COLUMNS =
    currBreakpoint.current === "2xl"
      ? 40
      : currBreakpoint.current === "xl"
        ? 35
        : 25;
  const ROWS =
    currBreakpoint.current === "2xl"
      ? 25
      : currBreakpoint.current === "xl"
        ? 22
        : 25;

  const updateGrid = (props: Coords) => {
    const newGrid = [...gridState];
    newGrid[props.y][props.x].visited = true;
    setGridState(newGrid);
  };

  //TODO: CHANGE THIS FUNC LATER TO USE KRUSKALS/PRIM'S AS WELL
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
      setGridState(initializeGrid({ y: ROWS, x: COLUMNS }));
      return;
    }
    // if the current cell has no neighbors, backtrack until a cell with neighbors is found
    else if (nextCell.neighbors.length === 0) {
      // prevent an error being thrown if all cells are visited and maze generation is complete
      if (tilesGenerated === COLUMNS * ROWS - 1) return;
      else nextCell = path.pop() as Cell;
    } else {
      const neighborArr = nextCell.neighbors;

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

  useEffect(() => {
    setGridState(initializeGrid({ y: ROWS, x: COLUMNS }));
  }, [ROWS, COLUMNS]);

  return (
    <>
      <div
        className={`m-1 mx-auto grid w-fit grid-cols-40 box-border border-default border-solid border-black xl:grid-cols-35 lg:grid-cols-25`}
      >
        {gridState.flat().map((cell, index) => (
          <div
            key={index}
            id="grid"
            className={`h-2 w-2 border-solid border-black border-opacity-20 bg-white ${
              onClickDisabled ? "cursor-default" : "cursor-pointer"
            } ${cell.walls.top && "border-t-[1px]"} ${
              cell.walls.right && "border-r-[1px]"
            } ${cell.walls.bottom && "border-b-[1px]"} ${
              cell.walls.left && "border-l-[1px]"
            } ${!cell.visited && !onClickDisabled && "duration-100 hover:scale-[1.6]"} ${
              isDarkMode ? "hover:bg-primary/85" : "hover:bg-secondary/75"
            }`}
            onClick={() => !onClickDisabled && generate(cell)}
            title={`Cell (${cell.coords.x + 1}, ${cell.coords.y + 1})`}
          />
        ))}
      </div>
      <h6>
        {props.description}
        <Link
          onClick={() => {
            isGenerating.current = false;
            setOnclickDisabled(false);
            setGridState(initializeGrid({ y: ROWS, x: COLUMNS }));
          }}
          children={"Reset"}
          bgColor={isDarkMode ? "before:bg-white" : "before:bg-black"}
          textColor={isDarkMode ? "hover:text-black" : "hover:text-white"}
          underline
        />
      </h6>
    </>
  );
};
