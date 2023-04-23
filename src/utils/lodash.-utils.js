import _ from "lodash";

const joinString = (str) => {
  const words = _.words(str);
  const joinedString = _.join(words, "_");
  return joinedString;
};

const data = joinString("App Development");
console.log(data);
export { joinString };
