import { useState } from "react";

function SignUp({ setToken }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          }),
        }
      );

      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      console.log(error);
    }
  };

  const setChange = (event) => {
    const newObj = { ...form };
    newObj[event.target.name] = event.target.value;
    setForm(newObj);
  };

  return (
    <>
      <h2>Sign up </h2>
      <form onSubmit={submit}>
        <input
          type="text"
          name={"username"}
          onChange={setChange}
          placeholder={"Username"}
          minLength={"4"}
          maxLength={"16"}
        />
        <input
          type="password"
          name={"password"}
          onChange={setChange}
          placeholder={"Password"}
          minLength={"4"}
          maxLength={"16"}
        />
        <input id={"submit"} type="submit" value={"Submit"} />
      </form>
    </>
  );
}
export default SignUp;