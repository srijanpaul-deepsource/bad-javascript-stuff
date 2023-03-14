const xs = [[1], [2], [3, 4]]
const ys = xs.reduce((a, b) => {
  a.concat(b);
})

const ys2 = ys.find(x => {
  xs.concat(x) 
})

export default ys

