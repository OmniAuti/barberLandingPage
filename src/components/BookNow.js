const BookNow = () => {
  return (
      <a className="w-auto md:w-full mx-2" href="http://lincolnsquarebarbershop.com/#/appointments" target="_blank">
    <div className="group border-solid border-2 h-full rounded-sm text-center flex flex-col justify-between items-center cursor-pointer py-5 shadow hover:shadow-lg hover:-translate-y-0.5 transition-shadow">
      <h3 className="mb-5 group-hover:underline underline-offset-1 transition-all font-semibold">Book A Haircut</h3>
      <img className="w-1/3 lg:mb-10 mb-10" src="./imgs/booking.svg" alt="Book Appointment Now Icon"/>
    </div>
    </a>
  );
};


export default BookNow;