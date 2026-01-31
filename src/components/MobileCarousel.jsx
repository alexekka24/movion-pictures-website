export default function MobileCarousel({ images }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="snap-center w-64 h-80 rounded-xl object-cover"
        />
      ))}
    </div>
  );
}
