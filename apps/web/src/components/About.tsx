import { Button } from './ui/button'

const About = () => {
  return (
    <div id='about' className='bg-[#070d13]/70 h-110 mb-30 text-center flex flex-col justify-center items-center gap-12'>
      <h1 className='lg:text-5xl text-3xl'>Join the Inner Circle</h1>
      <p className='w-lg text-sm'>Receive exclusive access to new collections, private events, and editorial content.</p>
      <form action="" className='w-xl border-b border-border flex items-center gap-2 p-1'>
        <input className='flex-3/4 text-lg outline-0 p-2' type="text" />
        <Button className='flex1/4 w-20 bg-transparent text-foreground uppercase'>Subscribe</Button>
      </form>
    </div>
  )
}

export default About