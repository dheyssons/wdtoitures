import Carousel from "./carousel";
import CarouselMobile from "./carouselmobile";

export default function OurServices() {
  return (
    <section
      id="services"
      className="container mx-auto flex flex-col gap-y-2 py-4"
    >
      <div className="overflow-hidden max-w-max mx-20">
        <div className="flex flex-row items-center">
          <div className="accent"></div>
          <h4 className="h5 !text-[--primary-color]">Services</h4>
        </div>
        <motion.h2
          variants={lefttoright}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1}
          className="h2"
        >
          Services principaux
        </motion.h2>
      </div>

      <Carousel>{items}</Carousel>

      <CarouselMobile>{itemsMobile}</CarouselMobile>
    </section>
  );
}
