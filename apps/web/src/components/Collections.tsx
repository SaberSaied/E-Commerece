import { Link } from 'react-router';
import collection1 from '../assets/collection_1.png';
import collection2 from '../assets/collection_2.png';
import { ArrowRight } from 'lucide-react';

const Collections = () => {

  const collections = [
    { name: 'The Obsidian Trench', image: collection1, category: 'OUTERWEAR', price: 2450 },
    { name: 'Ivory Silk Drape', image: collection2, category: 'READY TO WEAR', price: 1535 },
  ]

  return (
    <div id='collections' className='relative'>
      <h1 className='title'>Curated Essentials</h1>
      <Link to="/shop" className='flex items-center gap-2 text-xs float-end mr-8'>View All <ArrowRight size={16} /></Link>
      <div className="w-full flex justify-around items-center gap-4 mb-10 overflow-x-scroll">
        {collections.map((collection, index) => (
          <div key={index} className={`collection-card cursor-pointer p-4 ${index % 2 === 0 ? 'mt-0' : 'mt-20'}`}>
            <div className='shadow-lg shadow-black rounded-lg relative mb-4 overflow-hidden'>
              <div className="collection-img filter grayscale-50 transition-transform duration-1000 h-full">
                <img src={collection.image} alt={collection.name} className='object-cover size-full lg:min-w-100 min-w-80 min-h-125' />
              </div>
            </div>
            <div className="pl-2">
              <p className="text-xs mb-2 font-light">{collection.category}</p>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-2">{collection.name}</h2>
                <p className="font-light">${Intl.NumberFormat().format(collection.price)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections