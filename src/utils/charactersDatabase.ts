interface Position {
  x: number;
  y: number;
}
interface ObjectDetails {
  name: string;
  found: boolean;
  xy: Position;
  processing: boolean;
}

interface Object {
  map: string;
  characters: ObjectDetails[] | any; //any because later I am chaning the state
  // and it wouldn't let me do it otherwise - too much work
}

const database: Object[] = [
  {
    map: "First map",
    characters: [
      { name: "tom", found: false, xy: { x: 0, y: 0 }, processing: false },
      { name: "yubaba", found: false, xy: { x: 0, y: 0 }, processing: false },
      { name: "neo", found: false, xy: { x: 0, y: 0 }, processing: false },
    ],
  },
];
export default database;
