import { useState } from "react"
import { Link } from "react-router";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";


const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const [smallMenu, setSmallMenu] = useState(false);

  const firstLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Atelier', href: '#atelier' },
    { name: 'Archive', href: '#archive' },
    { name: 'About', href: '#about' },
  ]

  const secondLinks = [
    { name: 'Search', href: '#search' },
    { name: 'ShoppingBag', href: '#cart' },
    { name: 'User', href: '#profile' },
  ]

  return (
    <header className="glassy w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-50 border-none">
      <ul className={`lg:flex space-x-6 ${smallMenu ? 'absolute top-full left-0 w-full min-h-screen flex bg-background/70 flex-col justify-around text-3xl p-4' : 'hidden'}`}>
        {firstLinks.map((link) => (
          <li key={link.href}>
            <a
              onClick={() => {setIsActive(link.href); setSmallMenu(false); }}
              href={link.href}
              className={`relative pb-2 before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-foreground before:transition-all before:duration-500 before:ease-in-out hover:before:w-full ${isActive === link.href ? 'before:w-full' : ''}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className='fixed lg:left-1/2 transform lg:-translate-x-1/2 transition-transform duration-300 hover:scale-105'>
        <Link onClick={() => {setIsActive(''); setSmallMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} to='/' className='text-3xl tracking-wider'>ELYSIA</Link>
      </div>

      <Icons.Menu size={16} className='lg:hidden cursor-pointer absolute right-4' onClick={() => setSmallMenu(!smallMenu)} />
      
      <ul className='flex gap-8 items-center justify-end w-full'>
        {secondLinks.map((link) => {

        const LucideIcon = Icons[link.name as keyof typeof Icons] as LucideIcon;

        return (
          <li key={link.href} className='mr-3 lg:mr-6'>
            <a href={link.href}><LucideIcon key={link.name} className="lg:size-6 size-4" /></a>
          </li>
        )})}
      </ul>
    </header>
  )
}

export default Navbar