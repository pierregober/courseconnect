var state = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    login: false,
    schedule: [],
  },
  seats: {},
  classes: [],
  class: {},
};

function getState() {
  return state;
}

function updateState(props) {
  switch (props.key) {
    case "user":
      if (props.user.id) state.user.id = props.user.id;
      if (props.user.firstName) state.user.firstName = props.user.firstName;
      if (props.user.lastName) state.user.lastName = props.user.lastName;
      if (props.user.email) state.user.email = props.user.email;
      if (props.user.login) state.user.login = props.user.login;
      if (props.user.password) state.user.password = props.user.password;
      if (props.user.schedule) state.user.schedule = props.user.schedule;
      break;
    case "seats":
      state.seats = props.seats;
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
