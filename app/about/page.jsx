import "./about.css";

export default async function Page() {
  return (
    <div className="about-main">
      <div>
        <h1>About Us</h1>
        <br />
        <div className="about-text-box">
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
            <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
            <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
            <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
            <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
          </svg>
          <p>This page is under construction.</p>
        </div>
      </div>
    </div>
  );
}
