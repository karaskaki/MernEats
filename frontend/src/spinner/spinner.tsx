import { ClipLoader } from "react-spinners";
import "./spinner.css";

type Props = {
  isLoading?: boolean;
};
const spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading">
        <ClipLoader
          color="#FFA500"
          loading={isLoading}
          size={45}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};
export default spinner;
