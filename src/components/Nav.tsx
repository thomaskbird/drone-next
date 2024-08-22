import styles from './Nav.module.scss';
import Link from "next/link";
import Menu from "@mui/icons-material/Menu";

const navItems = [
  {
    id: 1,
    text: 'Home',
    link: '/'
  },
  {
    id: 2,
    text: 'About',
    link: '/about'
  },
  {
    id: 3,
    text: 'Services',
    link: '/services'
  },
  {
    id: 4,
    text: 'Gear',
    link: '/gear'
  },
  {
    id: 5,
    text: 'Pricing',
    link: '/pricing'
  },
  {
    id: 6,
    text: 'Blog',
    link: '/blog'
  },
  {
    id: 7,
    text: 'Contact',
    link: '/contact'
  },
];

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Link href="/" className={styles.branding}>
          <b className={styles.brandingLogoBold}>Airborne</b>
          <span className={styles.brandingLogoThin}>
            Artists
          </span>
        </Link>
      </div>
      <div className={styles.right}>
        <Menu className={styles.menuIcon} />
        <ul>
          {navItems.map(item => (
            <Link key={item.id} href={item.link}>{item.text}</Link>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Nav;
