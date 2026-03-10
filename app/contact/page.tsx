import Link from 'next/link';
import localImage from '../../public/images/flower.jpg';
import Image from 'next/image';

export default function contact(){
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
            Contact Page
            <hr/>
            <Image 
      src={localImage} 
      alt="Description of the flower" 
    />
            <hr/>
            <Link href="/">
        Home
      </Link>
        </div>
    );
}