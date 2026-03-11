import Link from 'next/link';
import localImage from '../../public/images/flower.jpg';
import Image from 'next/image';

export default function contact(){
    return(
    <div className="container my-9">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
      <div className="container">
      <Link href="/" className="navbar-brand">
        Home
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/about" className="navbar-brand">
        About
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/contact" className="navbar-brand">
        Contact
      </Link>&nbsp;&nbsp;&nbsp;
      <Link href="/user" className="navbar-brand">
      User
      </Link>&nbsp;&nbsp;&nbsp;
      </div>
    </nav>
    <hr/>
            <h1>Contact Page</h1>
            <hr/>
            <Image className="img-fluid rounded shadow"
              style={{ objectFit: 'cover' }}
      src={localImage} 
      alt="Description of the flower" 
    />
            <hr/>
            <Link href="/" className="btn btn-primary">
        Home
      </Link>
        </div>
    );
}