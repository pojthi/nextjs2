import Image from "next/image";
import Link from 'next/link';
import localImage from '../public/images/school.jpg';

const Navbar = () => {
  return (
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
    <h1>Home Page</h1>
    <hr/>
    <Image className="img-fluid rounded shadow"
              style={{ objectFit: 'cover' }}
      src={localImage} 
      alt="Description of the school" 
    />
      </div>
    
      
    
  );
};

export default Navbar;
