import Loader from "react-loader-spinner";
// loading component
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Rings" color="black" height={100} width={100} />
    </div>
  );
}
