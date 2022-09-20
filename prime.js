let number = 10;
for (i = 1; i <= number; i++) {
  let factors = 0;
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    console.log(i, "Prime");
  } else {
    console.log(i, "Not Prime");
  }
}