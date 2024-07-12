import WelcomeUser from "./WelcomeUser";

const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Hovered`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

export default EventProps;
