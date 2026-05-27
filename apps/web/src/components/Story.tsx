import story from '@/assets/story.png'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Story = () => {
  return (
    <div id='story' className="flex justify-between flex-col md:flex-row items-center mt-20">
      <div className='p-15 flex-1'>
        <img src={story} alt="Story" />
      </div>
      <div className="bg-[#070d13]/70 flex flex-col gap-10 flex-1 pl-20 py-30">
        <span className='text-xs font-light'>ATELIER NOTES</span>
        <h2 className="flex flex-col text-4xl"><span>Precision in</span><span>Absence</span></h2>
        <p className='w-3/4 text-sm'>True luxury whispers; it does not shout. In a world saturated with noise, we find profound elegance in reduction. Every seam, every textile choice, is a deliberate act of stripping away the unnecessary.</p>
        <p className='w-3/4 text-sm'>Our garments are not merely worn; they are inhabited. They form a silent architecture around the body, allowing the wearer's inherent grace to become the focal point.</p>
        <Link to="/manifesto" className='flex items-center gap-2 pt-10 border-b-white border-b w-fit pb-2'>READ THE MANIFESTO <ArrowRight /></Link>
      </div>
    </div>
  )
}

export default Story;