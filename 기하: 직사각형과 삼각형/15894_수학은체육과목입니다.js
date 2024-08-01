const input = +require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./15894_수학은체육과목입니다.txt"
  )
  .toString()
  .trim();

console.log(input * 4);
