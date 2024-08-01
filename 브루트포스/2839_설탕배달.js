let input = +require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2839_설탕배달.txt"
  )
  .toString()
  .trim();

let num = 0;

while (input > 0) {
  if (input < 5 && input % 3 !== 0) {
    console.log(-1);
    return;
  }

  if (input % 5 === 0) {
    num += input / 5;
    console.log(num);
    return;
  } else {
    input -= 3;
    num++;
  }
}

console.log(num);
