const FinalCtaSection = () => {
  return (
    <section className="bg-background-primary py-[60px] sm:py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center px-6 text-center md:px-0">
          <h2 className="text-4xl font-bold text-text-primary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Join the community today
          </h2>
          <div className="mt-10 flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center md:gap-4">
            <a
              href="#"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[#00E5A0] px-10 py-[14px] text-base font-semibold text-black transition-all duration-300 ease-in-out hover:scale-[1.03] hover:brightness-110 active:scale-100 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-solid border-white bg-transparent px-10 py-[14px] text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;