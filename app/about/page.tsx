import Link from 'next/link';
import localImage from '../../public/images/sample.png';
import Image from 'next/image';

export default function about(){
    return(<div>
            About Page
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