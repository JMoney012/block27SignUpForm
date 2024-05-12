import { useState } from "react";
import SignUp from "/components/SignUpForm";
import Authenticate from "./components/Authenitcate";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUp token={token} setToken={setToken} />

      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
export default App;