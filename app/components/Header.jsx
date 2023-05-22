import Link from "next/link";
import SignInButton from "./SignInButton";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/protected/server">Protected (server)</Link>
          </li>
          <li>
            <Link href="/protected/client">Protected (client)</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
