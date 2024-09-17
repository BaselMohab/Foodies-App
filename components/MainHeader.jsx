import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css'

export default function MainHeader() {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo} >
            <Image src={logoImg} alt="Logo" priority  />
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Foodies Community </Link>
        </nav>
    </header>
  )
}
