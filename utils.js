import fs from "fs";

const values = (filePath) => {
  return fs.readFileSync(filePath, "utf-8").trim().split("\n");
};
export { values };


export const asLines = (fname) => {
    return fs.readFileSync(fname).toString()
      .split('\n')
      .filter((l) => l.length > 0);
  }
  
