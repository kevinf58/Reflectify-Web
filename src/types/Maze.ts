export type Coords = {
  x: number;
  y: number;
};

export type Cell = {
  coords: Coords;
  visited: boolean;
  walls: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
  neighbors: Cell[];
};

export type CellPos = {
  coords: Coords;
  gridState: Cell[][];
};
