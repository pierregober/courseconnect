import { v4 as uuidv4 } from "uuid";

const generateKey = () => {
  return uuidv4();
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
