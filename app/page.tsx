import Image from "next/image";
import Link from 'next/link';
import localImage from '../public/images/school.jpg';

const Navbar = () => {
  return (
    <div>
      <nav>
      <Link href="/">
        Home
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/about">
        About
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/contact">
        Contact
      </Link>
    </nav>
    <Image 
      src={localImage} 
      alt="Description of the school" 
    />
      </div>
    
      
    
  );
};

export default Navbar;
