import { Play } from 'lucide-react'
import video from '../assets/video_poster.png'

const Video = () => {
  return (
    <div className='h-200 my-40 w-lvw relative filter grayscale-100'>
      <img src={video} alt="Video" className='h-full w-full' />
      <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 text-center flex flex-col items-center gap-12 text-white/70'>
        <h2 className='text-4xl'>Campaign AW24</h2>
        <div className='size-20 glassy flex justify-center items-center rounded-md cursor-pointer hover:scale-110 transition-transform duration-500'><Play /></div>
        <p className='text-xs uppercase tracking-widest'>WATCH THE FILM</p>
      </div>
    </div>
  )
}

export default Video