import { useFormik } from "formik";
import appLogo from "../../assets/icons/favicon/logo.svg";
import userLogo from "../../assets/icons/settings/user-logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { userPropsType } from "../../typing/types/User/userProps.type";
import "./LogIn.style.sass";
import { authProtectedApi, publicApi } from "../../config/axios.config";

const initialValues = { email: "", password: "" };

const LogInPage = (props: {
  user: userPropsType;
  dispatch: (args: { type: string; payload: userPropsType }) => void;
}) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const response = await publicApi.post("/auth/local", {
          identifier: values.email,
          password: values.password,
        });
        if (response.data.jwt) {
          localStorage.setItem("token", response.data.jwt);
          const { data } = await authProtectedApi().get("/users/me");
          console.log(data);
          props.dispatch({ type: "SET_USER", payload: data });
          navigate("/welcome", {
            replace: true,
          });
        }
      } catch {
        setErrors({
          password: "Nato'gri foydalanuvchi yoki parol",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <section className="login">
      <div className="container">
        <div className="login-wrapper">
          <header className="login-header flex">
            <h1 className="login-header__title">Log In</h1>
            <div className="login-icons flex">
              <div className="">
                <img src={userLogo} alt="" className="login-icons__icon" />
              </div>

              <div className="login-icons__line"></div>

              <div className="">
                <img src={appLogo} alt="" className="login-icons__icon" />
              </div>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="login-form flex">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="login-form__email"
              placeholder="Email"
              required
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="login-form__password"
              placeholder="Password"
              required
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="login-form__submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
          <div>
            <Link to="/registration">Do not have an account?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapPropsToState = (state: { jwt: string; user: userPropsType }) => ({
  user: state.user,
});
export default connect(mapPropsToState)(LogInPage);
