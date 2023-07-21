import style from "./styles/Home.module.css";
import { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Html, Sky, Stars } from "@react-three/drei";
import { DarkModeContext } from "../components/Context/DarkModeProvider";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>

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
          <div className={style.home_container}>
            <img
              className={style.homepage_img}
              src=".\src\assets\20171009_120133.jpg"
              alt="image"
            />
            <p className={style.homepage_txt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget dui eget nulla tristique lacinia eu sit amet diam. Maecenas
              placerat sit amet lorem porttitor ultricies. Proin id ipsum sit
              amet tortor pretium rutrum. Pellentesque ut maximus mauris.
              Aliquam eu libero at orci blandit sagittis. Proin feugiat porta
              enim ac tempus. Nunc quis efficitur felis. In non justo interdum,
              hendrerit ligula a, laoreet nisi. Donec ligula magna, egestas non
              aliquet nec, pellentesque a massa. Nam sodales metus metus, vel
              vehicula lacus rutrum vel. Fusce finibus accumsan elit non
              vulputate. Integer ipsum eros, facilisis in nisl et, faucibus
              finibus velit.
            </p>
          </div>
        </Html>
      </Canvas>
    </>
  );
};

export default Home;
