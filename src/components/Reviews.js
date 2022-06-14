const Reviews = () => {
  return (
    <a className="w-auto md:w-full mx-2" target="_blank" href="https://www.google.com/search?q=lincoln+square+barbershop&rlz=1C5CHFA_enUS990US990&ei=mfSnYtXMFtDXptQPmK-j8Aw&gs_ssp=eJzj4tFP1zcsNMsyzzC0NDdgtFI1qLCwMEhLMTIwSTU2NklLMTa2MqhITTOySEyyMDdMNE8yM0i18JLMycxLzs_JUyguLE0sSlVISixKSi0qzsgvAACEiRiH&oq=lincoln+square+barbershop&gs_lcp=Cgdnd3Mtd2l6EAEYADILCC4QgAQQxwEQrwEyAggmMgIIJjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6CggAEEcQsAMQyQM6CAgAEJIDELADOgcIABBHELADSgQIQRgASgQIRhgAUJUNWJUNYLgXaAJwAXgAgAF5iAF5kgEDMC4xmAEAoAEByAEKwAEB&sclient=gws-wiz#lrd=0x880fd204e334fd33:0xef28ab871a7b60e8,3,,,">
    <div className="group border-solid h-full flex flex-col items-center justify-between border-2 rounded-sm cursor-pointer py-5 shadow hover:shadow-lg hover:-translate-y-0.5 transition-shadow">
      <h3 className="group-hover:underline underline-offset-1 font-semibold my-5">Leave A Review</h3>
      <img className="w-1/3 xl:w-1/4 mb-16 lg:mb-16 xl:mb-10" src="./imgs/reviews.svg" alt="Leave a review icon"/>
    </div>
    </a>
  );
};

export default Reviews;
