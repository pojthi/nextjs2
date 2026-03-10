import Link from 'next/link';
import localImage from '../../public/images/sample.png';
import Image from 'next/image';

export default function about(){
    return(<div>
      <nav>
      <Link href="/">
        Home
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/about">
        About
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/user">
        User
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/contact">
        Contact
      </Link>
    </nav>
    <hr/>
            About Page
            <hr/>
            <Image 
      src={localImage} 
      alt="Description of the star" 
    />
            <hr/>
            <Link href="/">
        Home
      </Link>
        </div>
    );
}