import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SimpleMenu({ title, menuItems, onSelect, id }) {
  return (
    <NavDropdown
      title={title + " "}
      menuVariant="dark"
      className="text-white text-sm font-bold font-plex bg-reddit_greenyDark mt-2"
    >
      {menuItems.map((item, i) => {
        return (
          <NavDropdown.Item
            id={`${id}-${item.name.toLowerCase()}`}
            key={item.name}
            className="text-md bg-reddit_menu hover:bg-reddit_search"
            onClick={() => onSelect(item.name)}
          >
            {item.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
export default SimpleMenu;
