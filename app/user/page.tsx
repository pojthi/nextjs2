import Link from 'next/link';

export default async function UsersPage() {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const users = await response.json();

  return (
    <div>
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
      <h1>Users List</h1>
      <hr/>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <hr/>
      <Link href="/">
        Home
      </Link>
    </div>
  );
}