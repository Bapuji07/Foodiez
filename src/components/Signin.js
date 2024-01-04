import React, { useEffect } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../Schema";
import { useNavigate, Link} from "react-router-dom";

const initialValues = {
  name: "",
  number: "",
  email: "",
  password: ""
};

const SignIn = () => {
    const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      localStorage.setItem("userDetails", JSON.stringify(values));
      console.log(values);
      // Redirect to login page after successful signup
      navigate('/UserLogin');
    }
  });

  return (
    <div className="user-signup">
      <h1 className="text-3xl mb-5 text-center">User Signup</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white border border-gray-300 rounded shadow-md">
        <div className="mb-3">
          <label htmlFor="name" className="block mb-2 font-bold">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" value={values.name} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-500" />
          {errors.name && touched.name ? (<p className="login-error text-red-500 mt-2 text-sm">{errors.name}</p>) : null}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" value={values.email} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-500" />
          {errors.email && touched.email ? (<p className="login-error text-red-500 mt-2 text-sm">{errors.email}</p>) : null}
        </div>
        <div>
          <label htmlFor="number" className="block mb-2 font-bold">Phone Number</label>
          <input type="number" name="number" id="number" placeholder="Phone Number" autoComplete="off" value={values.number} onChange={handleChange} onBlur={handleBlur} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-500"/>
          {errors.number && touched.number ? (<p className="login-error text-red-500 mt-2 text-sm">{errors.number}</p>) : null}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-bold">Password</label>
          <input type="password" name="password" id="password" placeholder="password" autoComplete="off" value={values.password} onChange={handleChange} onBlur={handleBlur}className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-500" />
          {errors.password && touched.password ? (<p className="login-error text-red-500 mt-2 text-sm">{errors.password}</p>) : null}
        </div>
        <div>
          <button type="submit" className="submit-button bg-orange-500 text-white px-6 py-3 border rounded w-full hover:bg-orange-600">Signup</button>
        </div>
        <div className="mt-4 text-center text-sm text-blue-500 no-underline hover:underline">
          already have an account <Link to='/UserLogin'>login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
