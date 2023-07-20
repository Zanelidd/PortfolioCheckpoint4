import { useForm } from "react-hook-form";
import style from "./styles/Login.module.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
  console.log(data);

    // axios
    //   .post(`${import.meta.env.VITE_BACKEND_URL}/login`, data)
    //   .then(() => {
    //     setTimeout(() => {
    //       navigate("/logged/admin");
    //     }, 500);
    //   })
    //   .catch((err) => {
    //     console.error(err);

    //   }); 
  console.log(errors);

  return (
    <div className={style.login_container}>
      <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          value="Email"

          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="password"
          placeholder="Password"
          value="Password"
          {...register("Password", { max: 20, min: 5, maxLength: 20 })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input className={style.submit_button} type="submit" />
      </form>
    </div>
  );
};

export default Login;
