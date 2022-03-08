var state = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    login: false,
  },
  schedule: [],
  classes: [],
  class: {},
};

function getState() {
  return state;
}

function updateState(props) {
  switch (props.key) {
    case "user":
      state.user = props.user;
      break;
    case "schedule":
      state.schedule = props.schedule;
      break;
    case "class":
      state.class = props.class;
      break;
    case "classes":
      state.classes = props.classes;
      break;
    default:
      throw new Error("Failed to update state.  Key not found " + key);
      break;
  }
}

export { getState, updateState };
