import { useEffect, useState, useContext, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Html, Sky, Stars } from "@react-three/drei";
import { DarkModeContext } from "../components/Context/DarkModeProvider";
import ProjectCards from "../components/ProjectCards";
import axios from "axios";
import style from "./styles/Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`, {
        withCredentials: true,
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Canvas
        style={{
          height :"100vh",
          width: "100vw",
          position: "absolute",
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
          <div className={style.project_card_container}>

          <h1 className={darkMode ? style.title_dark : style.title}>Projets</h1>
          <div className={style.project_cards}>
            {projects.map((project) => {
              return <ProjectCards key={project.id} project={project} />;
            })}
          </div>
            </div>
        </Html>
      </Canvas>
    </>
  );
};

export default Projects;
