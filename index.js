
loop1:
for (let i = 0; i < 5; i++) {
    if (i % 2 == 0)
      break loop1;
}
// Expected output: "0234"
