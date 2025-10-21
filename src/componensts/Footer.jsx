function Footer() {
  return (
    <>
      <div style={style.container}>
        <h1>Footer components</h1>
      </div>
    </>
  );
}

const style = {
  container: {
    backgroundColor: "#1d293d",
    height: "50px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    left: 0,
  },
};

export default Footer;
