import "../styles/App.css";

const Error = message => {
  return (
    <div className="error-container">
      <p className="error-message">{Object.values(message)[0]}</p>
    </div>
  );
};

export { Error };
