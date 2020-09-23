const trimInputValue = (event) => {
  const isTargetValue = Boolean(event.target.value);
  const targetValue = event.target.value;

  if (isTargetValue) {
    const trimmedValue = targetValue.trim();

    // eslint-disable-next-line no-param-reassign
    event.target.value = trimmedValue;

    return trimmedValue;
  }

  return '';
};

export default trimInputValue;
