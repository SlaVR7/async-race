export default function hexToRGB(hex: string): number[] {
  const cleanHex = hex.slice(1);
  const r: number = parseInt(cleanHex.substring(0, 2), 16);
  const g: number = parseInt(cleanHex.substring(2, 4), 16);
  const b: number = parseInt(cleanHex.substring(4, 6), 16);
  return [r, g, b];
}
