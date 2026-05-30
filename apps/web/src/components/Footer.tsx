import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 py-4 px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8 mr-10">
          <h3 className='md:text-5xl text-3xl text-foreground/80 font-light'>ELYSIA</h3>
          <p className='md:text-sm text-xs text-foreground/80'>Curating the silence of new luxury. Precision tailoring for the modern era, rooted in architectural minimalism.</p>
        </div>
        <div className="flex flex-col gap-4 text-foreground/80">
          <h5 className='text-white font-bold mb-4'>EXPLORE</h5>
          <a href="">Latest Collection</a>
          <a href="">The Archive</a>
          <a href="">Our Story</a>
          <a href="">Boutiques</a>
        </div>
        <div className="flex flex-col gap-4 text-foreground/80">
          <h5 className='text-white font-bold mb-4'>CLIENT SERVICES</h5>
          <a href="">Contact Us</a>
          <a href="">Shipping and Returns</a>
          <a href="">Care Guide</a>
          <a href="">FAQ</a>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between items-center text-sm text-foreground/80 mb-6">
        <div className="flex gap-4">
          <a href="">INSTAGRAM</a>
          <a href="">PINTEREST</a>
          <a href="">YOUTUBE</a>
        </div>
        <div className='flex gap-4'>
          <a href="">PRIVACY</a>
          <a href="">TERMS</a>
          <p className='text-xs'>© 2026 ELYSIA</p>
        </div>
      </div>
    </div>
  )
}

export default Footer