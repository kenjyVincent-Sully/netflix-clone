export const truncateText = (string: string, nb: number) => {
  const text = string;
  return text?.length > nb ? text.slice(0, nb - 1) + "..." : "Pas description";
};

export const getRandomNumber = (maxNumber: number) => {
  Math.floor(Math.random() * maxNumber);
};

export const formatMinuteToReadable = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes - h * 60;

  if (h > 0) {
    return `${h}h ${m}m`;
  } else {
    return `${m}m`;
  }
};
