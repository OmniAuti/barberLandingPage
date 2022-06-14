import "./App.css";
import BookNow from "./components/BookNow";
import Payments from "./components/Payments";
import Socials from "./components/Socials";
import Reviews from "./components/Reviews";

function App() {
  return (
    <main className="relative App over border-solid md:container md:mx-auto w-screen flex flex-col md:h-screen justify-center py-5">
      <h1 className="font-extrabold text-5xl text-center mx-5">
        The Hoppy
        <img className="w-24 inline-block" src="./imgs/hoppyBarberLogo.png" />
        Barber
      </h1>
      <div className="w-full text-right flex flex-col md:flex-row justify-around mt-5">
        <BookNow />
        <Payments />
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full md:mt-5 text-center">
        <Reviews />
        <Socials />
      </div>
    </main>
  );
}

export default App;
