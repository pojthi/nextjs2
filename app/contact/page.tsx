import Link from 'next/link';
import localImage from '../../public/images/flower.jpg';
import Image from 'next/image';

export default function contact(){
    return(<div>
            Contact Page
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