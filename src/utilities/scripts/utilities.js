const generateKey = () => {
  return Math.floor(Math.random() * 100000 + 1);
};

const cleanStrings = (props) => {
  if (props) {
    return props.replace(/[^a-zA-Z0-9.!@#$%^&*()]/g, "");
  } else {
    return "";
  }
};

const urlbase = "https://8bx5031sr8.execute-api.us-west-2.amazonaws.com/prod/";

export { cleanStrings, generateKey, urlbase };
