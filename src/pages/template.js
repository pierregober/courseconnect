import { generateKey } from "../utilities/scripts/utilities.js";
function Banner(props) {
  if (props) {
    // return (
    //   <img
    //     className="Banner"
    //     src={"../utilities/design/media/" + props}
    //   ></img>
    // );
    return <div className="Banner"></div>;
  } else {
    return <div></div>;
  }
}

function Menu(props) {
  if (!props) throw new Error("Menu Props' empty");
  let menuItems = [];
  props.forEach((item) => {
    menuItems.push(
      <a key={generateKey()} href={item.location}>
        {item.name}
      </a>
    );
  });
  return <div className="Menu">{menuItems}</div>;
}

function generateMenu(location, name) {
  return { location: location, name: name };
}

function Body(props) {
  // if (!props) throw new Error("Body Props' empty");
  return props;
}

function Footer(props) {
  // if (!props) throw new Error("Footer Props' empty");
  return props;
}

export { Banner, Body, Footer, Menu, generateMenu };
