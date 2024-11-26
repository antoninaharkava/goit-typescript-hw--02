import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <Hearts
        height="80"
        width="80"
        visible={true}
        ariaLabel="hearts-loading"
        color="#ffc0cb"
      />
    </div>
  );
};

export default Loader;