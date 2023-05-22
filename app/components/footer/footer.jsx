import "./footer.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="dev-icon footer-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 7-5 5 5 5"></path>
          <path d="m15 7 5 5-5 5"></path>
        </svg>
      </div>
      <p className="footer-text">
        Built by{" "}
        <Link href={"https://brinkley.dev"} target="_blank" className="footer-link">
          <u>
            <b>Brinkley</b>
          </u>
          .
        </Link>{" "}
        Source code on{" "}
        <Link href={"https://github.com/brinkhill/discrr"} target="_blank" className="footer-link">
          <u>
            <b>Github</b>
          </u>
        </Link>
        .
      </p>
    </footer>
  );
}
