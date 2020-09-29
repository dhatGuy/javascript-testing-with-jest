const analyze = (arr) => {
  if(arr.length === 0){
    return 0
  }
  return {
    average: arr.reduce((acc, cur) => acc + cur) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
};

module.exports = analyze;
