import Link from 'next/link';

export default async function UsersPage() {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const users = await response.json();

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
      <h1>Users Page</h1>
      <hr/>
      <ul className="list-group shadow-sm" style={{ maxWidth: '400px' }}>
        {users.map((user: any) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">{user.name}</li>
        ))}
      </ul>
      <hr/>
      <Link href="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}