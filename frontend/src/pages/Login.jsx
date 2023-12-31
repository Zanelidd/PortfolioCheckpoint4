import { useForm } from "react-hook-form";
import style from "./styles/Login.module.css";
import { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Html, Sky, Stars } from "@react-three/drei";
import { DarkModeContext } from "../components/Context/DarkModeProvider";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
    <Canvas
      style={{
        height: "92vh",
        width: "100vw",
        position: "absolute",
        // zIndex: "-10",
      }}
      camera={{ position: [0, 0, 10], fov: 65 }}
    >
      <ambientLight intensity={darkMode ? 0.2 : 0.5} />
      <pointLight intensity={2} position={[0, 0, -1000]} />

      <Suspense fallback={null}>
        <Cloud position={[-4, -8, -25]} speed={0.2} opacity={1} />
        <Cloud position={[-5, -6, -10]} speed={0.2} opacity={1} />
        <Cloud position={[-35, -10, -10]} speed={0.2} opacity={1} />
        <Cloud position={[20, -10, -10]} speed={0.2} opacity={1} />
        <Cloud position={[0, -15, -10]} speed={0.2} opacity={1} />
        <Cloud position={[4, -6, -15]} speed={0.2} opacity={0.5} />
        <Cloud position={[-18, -10, -15]} speed={0.2} opacity={0.5} />
        <Cloud position={[4, -12, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[-25, -5, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[15, -8, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[-8, -8, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[4, -15, 0]} speed={0.2} opacity={0.75} />
        <Cloud position={[4, -10, 0]} speed={0.2} opacity={0.75} />
        <Cloud position={[-15, -10, 0]} speed={0.2} opacity={0.75} />
        <Cloud position={[10, -15, 0]} speed={0.2} opacity={0.75} />
        <Cloud position={[15, -8, 0]} speed={0.2} opacity={0.75} />

        {darkMode && (
          <Stars
            radius={100}
            depth={100}
            count={10000}
            factor={4}
            saturation={0}
            fade
            speed={3}
          />
        )}
      </Suspense>
      <Sky
        azimuth={0.25}
        turbidity={15}
        rayleigh={darkMode ? -0.15 : 0.2}
        inclination={0.75}
        distance={1000}
        sunPosition={[90, 10, 15]}
      />

      <Html center>
      <button
            className={darkMode ? style.buttonDarkMode : style.buttonLightMode}
            type="button"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            Dark Mode
          </button>
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
      </Html>
    </Canvas>
  );
};

export default Login;
