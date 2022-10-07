import { data } from "./main.js";
import printView from "./printView.js";
let index = 0;
const handleHero = {
  nextHero: () => {
    index++;
    if (index === 3) index = 0;
    printView(data[index]);
  },
  prevHero: () => {
    index--;
    if (index === -1) index = 2;
    printView(data[index]);
  },
};
export default { index, ...handleHero};