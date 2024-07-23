import Background from '../assets/images/duel.jpg';

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed h-screen"
    >
      <div className="flex place-items-start mt-5">
        <h3 className="font-sans text-3xl p-6 px-32 bg-red-400 bg-opacity-50 text-black rounded">
          Monstrosity
        </h3>
      </div>
    </div>
  );
}

export default Home;