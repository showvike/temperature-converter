function rounded(temp) {
  return Math.round(temp * 1000) / 1000;
}

function cToFK(c) {
  const f = rounded((c * (9 / 5)) + 32);
  const k = rounded(c + 273.15);

  return  { f, k, c };
}

function fToKC(f) {
  const k = rounded(((f - 32) * (5 / 9)) + 273.15);
  const c = rounded(k - 273.15);

  return { k, c, f };
}

function kToCF(k) {
  const c = rounded(k - 273.15);
  const f = rounded((c * (9 / 5)) + 32);

  return { c, f, k };
}

function converter(temp, func) {
  const input = parseFloat(temp);
  
  let c = "", f = "", k = "";

  if (Number.isNaN(input)) return { c, f, k };

  ({ c, f, k } = func(input));

  c = c.toString();
  f = f.toString();
  k = k.toString();

  return { c, f, k };
}

export { cToFK, fToKC, kToCF, converter };
