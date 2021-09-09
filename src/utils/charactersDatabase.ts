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
  characters: ObjectDetails[];
}

const database: Object[] = [
  {
    map: "First map",
    characters: [
      { name: "Tom", found: false, xy: { x: 0, y: 0 }, processing: false },
      { name: "Yubaba", found: false, xy: { x: 0, y: 0 }, processing: false },
      { name: "Neo", found: false, xy: { x: 0, y: 0 }, processing: false },
    ],
  },
];
export default database;
