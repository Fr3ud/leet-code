const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  
  const m = matrix.length
  const n = matrix[0].length

  let i = 0
  let j = n - 1

  while(i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    }

    if (matrix[i][j] > target) {
      j--
    } else {
      i++
    }
  }

  return false
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 5

console.log(searchMatrix(matrix, target)) // true
