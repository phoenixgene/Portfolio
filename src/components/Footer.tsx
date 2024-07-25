const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <section className="flex justify-center items-center h-[80px]">
      <p>&copy; {getYear()} Eugene Shokare. All rights reserved.</p>
    </section>
  );
};

export default Footer;
