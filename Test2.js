for (let i = 0; i < 5; i++) {
  let ln = ' '.repeat(i);
  let n = 4 - i; 
  for (let k = 0; k <= n; k++) {
    let bnm = 1;
    for (let j = 0; j < k; j++) {
      bnm = bnm * (n - j) / (j + 1);
    }
    ln += bnm + (k < n ? ' ' : ''); 
  }
  console.log(ln);
}
