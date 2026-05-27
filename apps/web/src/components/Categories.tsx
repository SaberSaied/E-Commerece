import category1 from '../assets/category_1.png'
import category2 from '../assets/category_2.png'
import category3 from '../assets/category_3.png'

const Categories = () => {
  const categories = [
    {name: 'Menswear', image: category1},
    {name: 'Womenswear', image: category2},
    {name: 'Objects', image: category3}
  ]

  return (
    <div id="categories" className='px-8 py-8'>
      <h2 className="title">The Categories</h2>
      <div className='flex justify-between gap-8'>
        {categories.map((category) => (
          <div key={category.name} className="relative h-125 overflow-hidden category-box cursor-pointer">
            <img src={category.image} alt={category.name} className='h-full filter brightness-50 transition-all duration-500' />
            <h2 className='absolute left-8 bottom-8 z-10 text-4xl transition-all duration-500'>{category.name}</h2>
            <p className='absolute opacity-0 left-9 bottom-8 z-10 transition-all duration-500'>Explore</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories