import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username Required";
  } 

  
  return errors;
};


export default function CommentForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });
   
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     });
    // };


    // let handleSubmit = (event) => {
    //   console.log(formData);
    //   addNewComment(formData)
    //   event.preventDefault();
    //   setFormData({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    //   });
    // };

    return (
      <div>
        <h4>Give Comments Here</h4>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
          <br />
          <br />
          <label htmlFor="remarks">Remarks : </label>
          <textarea
            name="remarks"
            id="remarks"
            placeholder="Remarks"
            value={formik.values.remarks}
            onChange={formik.handleChange}
          ></textarea>
          <br />
          <br />
          <br />
          <label htmlFor="rating">Rating : </label>
          <input
            type="number"
            name="rating"
            id="rating"
            placeholder="rating"
            min={0}
            max={5}
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
          <br />
          <br />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
}