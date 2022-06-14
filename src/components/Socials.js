const Socials = () => {
  return (
    <a className="w-auto md:w-full mx-2" href="https://www.instagram.com/the_hoppy_barber/?hl=en" target="_blank">
      <div className="group h-full flex flex-col justify-between items-center border-solid border-2 rounded-sm cursor-pointer shadow hover:shadow-lg hover:-translate-y-0.5 transition-shadow">
        <h3 className="group-hover:underline underline-offset-1 m-5 font-semibold">
          Socials
        </h3>
      <img alt="Instagram Logo" className="w-1/3 mb-20 lg:mb-20 xl:mb-5" src="./imgs/instagram.svg" />
      </div>
    </a>
  );
};

export default Socials;
