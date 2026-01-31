import DesktopCarousel3D from "./DesktopCarousel3D";
import MobileCarousel from "./MobileCarousel";

export default function Carousel3D({ images, scrollYProgress, enabled }) {
  return enabled ? (
    <DesktopCarousel3D
      images={images}
      scrollYProgress={scrollYProgress}
    />
  ) : (
    <MobileCarousel images={images} />
  );
}
