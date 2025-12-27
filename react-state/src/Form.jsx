import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
      fullName: "",
      userName: "",
      password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => { return { ...currData, [event.target.name]: event.target.value }; });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
          fullName: "",
          userName: "",
          password: "",
        });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">fullname : </label>
        <input
          type="text"
          placeholder="enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        />
        <br />
        <br />
        <label htmlFor="userName">UserName : </label>
        <input
          type="text"
          placeholder="enter your userName"
          value={formData.userName}
          onChange={handleInputChange}
          id="userName"
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          placeholder="enter your password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    );
}