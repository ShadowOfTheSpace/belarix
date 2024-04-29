import heroImage from "@assets/images/hero-image.webp";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center mt-[24px] sm:mt-[7px] px-[10px] sm:px-[20px] md:px-[40px] overflow-hidden">
      <img
        alt="hero"
        className="md:w-[1840px] md:aspect-[1840/700] rounded-[10px] md:rounded-[20px] aspect-[340/180] object-cover"
        src={heroImage}
      />
    </section>
  );
};

export { Hero };
