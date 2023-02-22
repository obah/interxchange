function Card({ pageUrl, image, heading, body, btnImg }) {
  return (
    <div>
      <a href={pageUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={heading} />
        <span>
          <h3>{heading}</h3>
          <p>{body}</p>
        </span>
        <button>
          <img src={btnImg} alt="" />
        </button>
      </a>
    </div>
  );
}

export default Card;
