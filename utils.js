export const sliceText = (text, range) => {
  if (text.length > range) {
    return text.slice(0, range) + "...";
  } else {
    return text;
  }
};
