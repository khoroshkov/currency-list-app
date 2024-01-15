export const validateString = (input: string | undefined) => {
  if (!input) {
    return false;
  }

  const onlyLettersRegex = /^[a-zA-Z]+$/;
  return onlyLettersRegex.test(input);
};
