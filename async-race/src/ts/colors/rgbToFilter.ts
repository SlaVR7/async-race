export default function convertRGBtoFilter(rgb: number[]): string {
  const [red, green, blue] = rgb;


  const invertValue = Math.round((100 - (red / 255) * 100) * 100) / 100;
  const sepiaValue = Math.round((green / 255) * 100) / 100;
  const saturateValue = Math.round((blue / 255) * 100) / 100;
  const hueRotateValue = Math.round((green / 255) * 360);
  const brightnessValue = Math.round((red / 255) * 100);
  const contrastValue = Math.round((green / 255) * 100);

  return `invert(${invertValue}%) sepia(${sepiaValue}%) saturate(${saturateValue}%) hue-rotate(${hueRotateValue}deg) brightness(${brightnessValue}%) contrast(${contrastValue}%);`;
}
