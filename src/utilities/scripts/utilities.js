const generateKey = () => {
  return Math.floor(Math.random() * 100000 + 1);
};

const cleanStrings = (props) => {
  if (props) {
    return props.replace(/[^a-zA-Z0-9!@#$%^&*()]/g, "");
  } else {
    return "";
  }
};
export { cleanStrings, generateKey };
