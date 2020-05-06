function getRandColor() {
  const getRandNumber = () => Math.floor(Math.random() * Math.floor(255));
  return `rgb(${getRandNumber()}, ${getRandNumber()}, ${getRandNumber()})`;
}

export default getRandColor;
