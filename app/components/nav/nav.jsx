import "./nav.css";

import Link from "next/link";
import ThemeChanger from "../theme/ThemeChanger";
import SignInButton from "../auth-button/SignInButton";

export default function Nav() {
  return (
    <nav>
      <div className="logo-box">
        <Link className="discrr-logo" href="/">
          DISC<span className="colored-rs">RR</span>
        </Link>
        <span className="tag-line">disc ratings & reviews</span>
      </div>
      <div className="right-nav">
        <ThemeChanger />
        <SignInButton />
      </div>
    </nav>
  );
}
