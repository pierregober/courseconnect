function Banner(props) {
  if (props) {
    return <img src={props.src}></img>;
  } else {
    return <div></div>;
  }
}

function Menu(props) {
  if (!props) throw new Error("Menu Props' empty");
  let menuItems = [];
  props.foreach((item) => {
    menuItems.push(<a link={item.location}>item.name</a>);
  });
  return <div>{menuItems}</div>;
}

function Body(props) {
  if (!props) throw new Error("Body Props' empty");
  return props;
}

function Footer(props) {
  if (!props) throw new Error("Footer Props' empty");
  return props;
}
