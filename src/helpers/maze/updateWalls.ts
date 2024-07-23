import { Cell } from "../../types/Maze";

export const updateWalls = (props: { prevCell: Cell; nextCell: Cell }) => {
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