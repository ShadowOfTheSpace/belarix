import heroImage from "@assets/images/hero-image.webp";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center mt-[40px] sm:mt-[25px] md:mt-[19px] overflow-hidden">
      <img
        alt="hero"
        className="md:w-[1840px] md:aspect-[1840/700] rounded-[10px] md:rounded-[20px] aspect-[340/180] object-cover"
        src={heroImage}
      />
    </section>
  );
};

export { Hero };
