for(let a = 0; a < 5; a++){
  let b = '';
  for(let c = 0; c < a; c++) b += ' ';
  for(let c = 0; c <= 4 - a; c++){
    if(c > 0) b += ' ';
    let d = 1;
    for(let e = 1; e <= c; e++) d = d * (4 - a - e + 1) / e;
    b += d;
  }
  console.log(b);
}