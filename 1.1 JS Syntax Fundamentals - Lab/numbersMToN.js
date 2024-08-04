function numbersMToN(m, n) {
    for (i=m; i>=n; i--) {
        console.log(i);
    }
}

numbersMToN(4, 1)

// Variant 2
const numbersMToN = (m, n) => {
  while (m >= n) console.log(m--);
};

numbersMToN(4, 1);
