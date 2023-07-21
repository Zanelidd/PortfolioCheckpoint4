import style from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={style.home_container}>
      <img
        className={style.homepage_img}
        src=".\src\assets\20171009_120133.jpg"
        alt="image"
      />
      <p className={style.homepage_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget dui eget nulla tristique lacinia eu sit amet diam. Maecenas placerat sit amet lorem porttitor ultricies. Proin id ipsum sit amet tortor pretium rutrum. Pellentesque ut maximus mauris. Aliquam eu libero at orci blandit sagittis. Proin feugiat porta enim ac tempus. Nunc quis efficitur felis. In non justo interdum, hendrerit ligula a, laoreet nisi. Donec ligula magna, egestas non aliquet nec, pellentesque a massa. Nam sodales metus metus, vel vehicula lacus rutrum vel. Fusce finibus accumsan elit non vulputate. Integer ipsum eros, facilisis in nisl et, faucibus finibus velit.
</p>
    </div>
  );
};

export default Home;
