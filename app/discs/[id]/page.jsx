import "../discs.css";

async function fetchDiscData(pageName) {
  const response = await fetch(`https://discrr.com/api/discs?name=${pageName}`);
  const discData = await response.json();
  return discData[0];
}

export async function generateMetadata({ params }) {
  const pageName = params?.id;
  const disc = await fetchDiscData(pageName);
  return {
    title: disc?.name,
  };
}

export default async function Page({ params }) {
  const discName = params?.id;
  const disc = await fetchDiscData(discName);

  return (
    <div>
      {/* <LittleSearchbar /> */}
      <div className="disc-main">
        <div className="name-brand">
          <div>
            <span className="brand">{disc?.brand}</span>
          </div>
          <div>
            <span className="name">{disc?.name}</span>
          </div>
        </div>
        <div className="right">
          <div className="stability">
            <div className="tag">{disc?.stability}</div>
            <div className="tag">{disc?.category}</div>
          </div>
          <div className="stats">
            <div className="stat-box">
              <div className="stat">{disc?.speed}</div>
              <div className="category">Speed</div>
            </div>
            <div className="stat-box">
              <div className="stat">{disc?.glide}</div>
              <div className="category">Glide</div>
            </div>
            <div className="stat-box">
              <div className="stat">{disc?.turn}</div>
              <div className="category">Turn</div>
            </div>
            <div className="stat-box">
              <div className="stat">{disc?.fade}</div>
              <div className="category">Fade</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rr-section">
        <div className="review-header">
          <span className="review-title">Reviews</span>
          <button className="review-button">
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
              className="bubble"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>
        <div className="split">
          <div className="ratings-section">
            {/* <span>Overall Rating</span>
            <span>4/5 </span> */}
            <div className="coming-soon">
              <p>Coming Soon</p>
            </div>
          </div>
          {/* <div className="reviews-section">reviews here</div> */}
        </div>
      </div>
    </div>
  );
}
