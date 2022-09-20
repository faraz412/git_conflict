let num = 10;
for (i = 1; i <= num; i++) {
  let count = 0;
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(i, "Prime");
  } else {
    console.log(i, "Not Prime");
  }
}