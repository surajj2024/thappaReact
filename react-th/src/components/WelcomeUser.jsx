const WelcomeUser = ({ onClick, onMouseEnter }) => {
  const handleGreeting = () => {
    console.log(`Hey user namaste`);
    onClick();
  };

  return (
    <>
      <button onClick={onClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};

export default WelcomeUser;
