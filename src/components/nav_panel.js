import Link from 'next/link';
import '@/css/general.css';
import '@/css/bubbles.css';

export default function Navigation() {
  return (
    <div className='navBar'>
        <Link href="/">Search</Link>
        <Link href="/playlists">Playlists</Link>   
        <Link href="/about">About</Link>
    </div>
  );
}