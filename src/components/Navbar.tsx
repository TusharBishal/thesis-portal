import Link from 'next/link';
import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-10 pt-3 pb-3 bg-white'>
        <Link href="/" className='flex items-center justify-center h-10'>
            <img src='Macquarie-University-logo.png' alt='Macquarie University' className='h-full'/>
        </Link>
    </div>
}
export default Navbar;