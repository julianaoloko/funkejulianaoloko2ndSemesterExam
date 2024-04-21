import { CircularProgress } from "@mui/material";

const LoadingSpinner = ({ viewPortHeight}) => {
  return (
    <div
      className={`flex m-auto ${viewPortHeight} justify-center items-center`}
    >
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
