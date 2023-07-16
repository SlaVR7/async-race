function hslToRgb(h: number, s: number, l: number): number[] {
  const newH: number = h / 360;
  const newS: number = s / 100;
  const newL: number = l / 100;

  let r;
  let g;
  let b;

  if (newS === 0) {
    r = newL;
    g = newL;
    b = newL;
  } else {
    const hueToRgb = (p: number, q: number, currentT: number): number => {
      let t = currentT;
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

    const q = newL < 0.5 ? newL * (1 + newS) : newL + newS - newL * newS;
    const p = 2 * newL - q;

    r = hueToRgb(p, q, newH + 1 / 3);
    g = hueToRgb(p, q, newH);
    b = hueToRgb(p, q, newH - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
