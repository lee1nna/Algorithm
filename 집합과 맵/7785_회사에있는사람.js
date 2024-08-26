let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./7785_회사에있는사람.txt"
  )
  .toString()
  .trim()
  .split("\n");

  const N = +input.shift()
  const employee = new Map()
  const arr = []

  input.forEach(el => {
    const [name, status] = el.split(' ')
    employee.set(name, status)
  })

  for(let i of employee.keys()) {
    if(employee.get(i) === 'enter') {
        arr.push(i)
    }
  }
  
  console.log(arr.sort((a,b) => {
    if(a>b) {
        return -1
    } else {
        return 0
    }
  }).join('\n'))