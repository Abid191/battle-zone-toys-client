// import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full h-[38rem] mb-10 mt-5 rounded-xl font-montserrat">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/g60rMF2/image.png"
          className="w-full object-cover"
        />
        <div className="absolute  flex items-center    h-full gap-5 left-0 top-0 bg-gradient-to-r from-black/50 to-black/50">
          <div className="text-white space-y-5 text-center">
            <h2  className="md:text-6xl text-4xl font-bold md:w-1/2 w-full mx-auto">
              Explore an Exciting Collection
            </h2>
            <p className="md:w-2/3  w-full px-2 md:px-0 mx-auto ">
              Discover a vast assortment of action figures that will take your
              imagination to new heights. From superheroes to sci-fi icons, our
              website offers an extensive selection to cater to every collectors
              taste.
            </p>

            <div className="text-center" >
              <button className="button-primary !px-7 !py-3 text-xl ">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center gap-24  left-5 right-5 bottom-10">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* slider 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/8mt4WXQ/image.png"
          className="w-full object-cover object-top"
        />
        <div className="absolute  flex items-center  pl-0  h-full gap-5 left-0 top-0 bg-gradient-to-r from-black/60 to-black/60">
          <div className="text-white space-y-5 text-center">
            <h2 className="md:text-6xl text-4xl font-bold md:w-1/2 w-full mx-auto">
              Unleash Your Inner Hero
            </h2>
            <p className="md:w-2/3  w-full px-2 md:px-0 mx-auto">
              Step into a world of adventure with our action figures. Whether
              you are a fan of classic heroes or seeking the latest releases,
              our website has the perfect figurine to ignite your heroic spirit
              and bring epic battles to life.
            </p>

            <div className="">
              <button className="button-primary !px-7 !py-3 text-xl ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-24  left-5 right-5 bottom-10">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/WpxVZ09/image.png"
          className="w-full object-cover object-top"
        />
        <div className="absolute  flex items-center  pl-0  h-full gap-5 left-0 top-0 bg-gradient-to-r from-black/60 to-black/60">
          <div className="text-white space-y-5 text-center">
            <h2 className="md:text-6xl text-4xl font-bold md:w-1/2 w-full mx-auto">
              Immerse Yourself in Detail
            </h2>
            <p className="md:w-2/3  w-full px-2 md:px-0 mx-auto">
              Experience the meticulous craftsmanship of our action figures.
              Each figure is intricately designed with attention to detail,
              capturing the essence of your favorite characters. From lifelike
              facial expressions to finely sculpted accessories, our figures are
              a collectors dream.
            </p>

            <div className="">
              <button className="button-primary !px-7 !py-3 text-xl ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-24  left-5 right-5 bottom-10">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slider 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/NtxmHmf/image.png"
          className="w-full object-cover"
        />
        <div className="absolute  flex items-center  pl-0   h-full gap-5 left-0 top-0 bg-gradient-to-r from-black/60 to-black/60">
          <div className="text-white space-y-5 text-center">
            <h2 className="md:text-6xl text-4xl font-bold md:w-1/2 w-full mx-auto">
              Build Your Collection
            </h2>
            <p className="md:w-2/3  w-full px-2 md:px-0 mx-auto">
              Start or expand your action figure collection with ease. Our
              website provides a wide range of options, allowing you to curate
              your own personal lineup. From limited editions to iconic series,
              our collection has something for every enthusiast to cherish.
            </p>

            <div className="">
              <button className="button-primary !px-7 !py-3 text-xl ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center gap-24  left-5 right-5 bottom-10">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent md:text-4xl text-2xl border-0 hover:bg-slate-600"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
