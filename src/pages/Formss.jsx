import { useState } from "react";

export default function Formss() {
  const [data, setData] = useState({
    name: " ",
    email: " ",
    Password: " ",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.Password) {
      setError("All Files are Required");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    if (data.Password.length < 6) {
      setError("Password is too Short");
      return;
    }

    setError("");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="Password" onChange={handleChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
