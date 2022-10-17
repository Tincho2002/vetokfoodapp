import { useEffect,useState } from "react";
import { Spinner } from "react-bootstrap";

function LoadingSpinner(props) {
  const [isTimedOut, setTimedOut] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setTimedOut(true), 2000);
    return () => clearTimeout(id);
  }, []);
  return isTimedOut ? (
    props.children
  ) : (
    <>
      <Spinner animation="border" role="status" size="sm"/>
      <Spinner animation="grow" role="status"/>
      <p>{props.loadingText}Loading...</p>
    </>
  );
}
 
export default LoadingSpinner;


