import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='hero'>
      <div />
      <div className="z-10 flex flex-col items-center gap-6">
        <p className='tracking-[5px] text-lg mb-6 text-center'>ESTABLISHED MMXXIV</p>
        <h1 className='text-5xl lg:text-8xl text-center font-extralight mb-6'>The Art of Silence</h1>
        <Button className='md:text-lg text-sm glassy p-8 hover:scale-103 uppercase tracking-wider md:w-sm w-3xs'>Discover the archive</Button>
      </div>
      <div className="z-10 flex flex-col items-center gap-4 fade-in-up">
        <p className='tracking-[3px] uppercase text-foreground/80 text-sm'>Scroll</p>
        <div className='w-0.5 h-12 bg-transparent rounded-b-3xl bg-gradient-to-t from-transparent via-foreground/20 to-foreground' />
      </div>
    </div>
  )
}

export default Hero;