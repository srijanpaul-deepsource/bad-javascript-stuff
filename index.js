const xs = [[1], [2], [3, 4]]
const ys = xs.reduce((a, b) => {
  a.concat(b);
})

export default ys

