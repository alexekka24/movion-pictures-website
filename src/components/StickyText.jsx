export const StickyTest = () => {
  return (
    <>
      <div className="h-screen bg-red-500" />

      <section className="h-[300vh] bg-black">
        <div className="sticky top-0 h-screen bg-green-500 flex items-center justify-center text-white text-4xl">
          I SHOULD STICK
        </div>
      </section>

      <div className="h-screen bg-blue-500" />
    </>
  );
}
