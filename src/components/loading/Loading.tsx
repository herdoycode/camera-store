import "./Loading.scss";

const Loading = () => {
  return (
    <svg className="spinner" viewBox="0 0 30 30">
      <circle
        className="path"
        cx="15"
        cy="15"
        r="10"
        fill="none"
        stroke-width="4"
      ></circle>
    </svg>
  );
};

export default Loading;
