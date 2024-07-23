import backgroundImage from '../assets/images/daniel-jensen-NMk1Vggt2hg-unsplash.jpg'

const About = (): JSX.Element => {
  return (
    <div
      className="bg-gray-100 text-gray-800 font-sans m-0 p-0 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto p-5">
        <div className="bg-white bg-opacity-75 p-5 mt-8 rounded-lg shadow-md text-center">
          <h1 className="text-red-600 font-bold text-3xl mb-4">About Monstrosity</h1>
          <p className="leading-relaxed mb-4">
            Welcome to Monstrosity, the ultimate destination for unleashing your creativity
            and bringing your wildest monster imaginations to life! 
            Our website allows you to design and create your very own unique monsters from scratch.
            Whether you want a friendly monster or a fearsome creature, our easy-to-use datatabe will
            make it possible for everyone to become a monster creator.
          </p>
          <p className="leading-relaxed mb-4">
            At Monstrosity, we believe that creativity knows no bounds. That’s why we offer a wide
            range of customization options, including different body parts, colors, textures, and accessories.
            With just a few clicks, you can mix and match various elements to create a monster that’s truly one-of-a-kind.
          </p>
          <p className="leading-relaxed mb-4">
            Our mission is to provide a fun and engaging platform for monster enthusiasts of all ages. 
            Whether you’re a kid looking for a fun project, an artist seeking inspiration, or just someone who loves monsters, 
            you’ll find endless possibilities here.
          </p>
          <p className="leading-relaxed mb-4">
            Thank you for visiting Monstrosity. We can’t wait to see what incredible monsters you’ll create!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;