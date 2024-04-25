import heroImage from "../../../assets/images/hero-image.webp";

const Hero: React.FC = () => {
  return (
    <section className="mt-[40px] sm:mt-[25px] md:mt-[19px] rounded-[10px] md:rounded-[20px] overflow-hidden">
      <img
        alt="hero"
        className="md:w-[1840px] md:aspect-[1840/700] aspect-[340/180] object-cover"
        src={heroImage}
      />
    </section>
  );
};

export { Hero };
