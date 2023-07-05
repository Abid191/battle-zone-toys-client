
const Gallery = () => {
  const galleryItems = [
    {
      image: "https://i.ibb.co/3MQY75q/image.png",
      title: "Marvel Superhero Action Figure",
      description:
        "Unleash your inner hero with this highly detailed Marvel superhero action figure. Join forces with your favorite Marvel characters and save the world!",
    },
    {
      image: "https://i.ibb.co/vwm4Tvz/image.png",
      title: "DC Comics Superhero Action Figure",
      description:
        "Embrace the power of justice with this DC Comics superhero action figure. Team up with iconic DC heroes and protect Gotham City!",
    },
    {
      image: "https://i.ibb.co/3fgqMXR/image.png",
      title: "Star Wars Collectible Figure",
      description:
        "Embark on an epic galactic adventure with this Star Wars collectible action figure. Choose your side and battle against the forces of the Dark Side!",
    },
    {
      image: "https://i.ibb.co/8BzWQRy/image.png",
      title: "Transformers Robot Toy",
      description:
        "Experience the action-packed world of Transformers with this incredible robot toy. Join the Autobots or Decepticons and engage in thrilling battles!",
    },
    {
      image: "https://i.ibb.co/nDVLBb1/image.png",
      title: "Marvel Villain Action Figure",
      description:
        "Embrace your dark side with this Marvel villain action figure. Conquer the universe and challenge the mighty superheroes!",
    },
    {
      image: "https://i.ibb.co/j6KXJRc/image.png",
      title: "DC Comics Heroine Action Figure",
      description:
        "Celebrate female empowerment with this DC Comics heroine action figure. Stand alongside the legendary superheroines and fight for justice!",
    },
    {
      image: "https://i.ibb.co/xfxRq6C/image.png",
      title: "Star Wars Lightsaber-Wielding Figure",
      description:
        "Harness the power of the Force with this lightsaber-wielding Star Wars action figure. Become a Jedi Knight or Sith Lord and shape the destiny of the galaxy!",
    },
    {
      image: "https://i.ibb.co/G5wXD6k/image.png",
      title: "Transformers Collector's Edition Figure",
      description:
        "Indulge in the nostalgia of Transformers with this collector's edition action figure. Relive the classic battles and showcase your love for the franchise!",
    },
  ];

  return (
    <>
      <div className="font-montserrat px-5 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-blue-500 text-center">
              Action Figures Showcase
            </h2>
            <p className="text-gray-500 md:w-2/3 mx-auto">
              Discover a captivating collection of action figures that embody
              the essence of your favorite heroes and villains. Immerse yourself
              in a world of intricate details, dynamic poses, and exceptional
              craftsmanship.
            </p>
          </div>
          <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative transform hover:scale-105 transition-transform duration-300 ease-in-out border rounded p-1 "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64  rounded-t-lg"
                />
                <div className="absolute p-5 top-0 left-0 w-full h-full bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center text-center hover:opacity-100 opacity-0 rounded">
                  <div className="">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
