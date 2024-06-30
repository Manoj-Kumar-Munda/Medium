
const Hero = () => {
  return (
    <div className="md:home bg-amber-100 h-screen relative pl-4 md:pl-[5%] bg-home-bg bg-contain bg-no-repeat bg-right">
      <div className="absolute top-1/2 -translate-y-1/2 max-w-3xl flex flex-col gap-4 md:gap-8">
        <h1 className="text-hero-sm md:text-hero-md font-hero leading-[4rem] md:leading-[5.5rem] tracking-tighter">
          Human <br /> stories & ideas
        </h1>

        <p className="text-xl">A place to read, write, and deepen your understanding</p>

        <button className="text-start bg-black w-max px-10 py-2 rounded-2xl">
          <span className="text-lg text-white font-medium">Start reading</span>
        </button>
      </div>
    </div>
  )
}

export default Hero