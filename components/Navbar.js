import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li
            onClick={() => {
              console.log("clicked on Home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              console.log("clicked on About");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              console.log("clicked on Contact");
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              console.log("clicked on Login");
            }}
          >
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
