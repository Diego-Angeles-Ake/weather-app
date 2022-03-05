export default function farenheit(temp) {
  const ans = `${(parseFloat(temp) * 9) / 5 + 32} °F`;
  return parseFloat(ans).toFixed(2);
}
