import { basicSchema } from "../schemas";
import Style from "./Form.module.css";
import { useFormik } from "formik";
import { createContext, useState, useContext } from "react";

// const UserContext = createContext(undefined);

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {  
  // const [user, setUser] = useState({})
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    // <UserContext.Provider value={{user, setUser}}>
    <>
    <form onSubmit={handleSubmit} className={Style.myForm} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? Style.inputError : ""}
      />
            {errors.email && touched.email && <p className={Style.error}>{errors.email.toString()}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? Style.inputError : ""}
      />
            {errors.age && touched.age && <p className={Style.error}>{errors.age.toString()}</p>}

      <label htmlFor="email">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? Style.inputError : ""}
      />
       {errors.password && touched.password && (
        <p className={Style.error}>{errors.password.toString()}</p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword
            ? Style.inputError
            : ""
        }
      />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className={Style.error}>{errors.confirmPassword.toString()}</p>
        )}

      <button disabled={isSubmitting} className={Style.btn} type="submit">
        Submit
      </button>
    </form>
    </>
    // </UserContext.Provider>
  );
};
export default BasicForm;
