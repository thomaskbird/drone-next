import Link from "next/link";
import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  variant?: 'solid' | 'outlined';
  color?: 'primary' | 'transparent' | 'danger';
  type: 'button' | 'link';
  handleClick?(): void;
  href?: string;
}

const Button = ({label, type, handleClick, variant = 'solid', color = 'primary', href}: ButtonProps) => {
  if(type === 'link' && !href) {
    throw new Error('You must define the href prop if type is link');
  }

  if(type === 'button' && !handleClick) {
    throw new Error('You must define the handleClick prop if type is button');
  }

  const allClasses = `${styles.btn} ${styles[variant]} ${styles[color]}`;

  return type === 'link' ? (
    <Link className={allClasses} href={href!}>{label}</Link>
  ) : (
    <button className={allClasses} onClick={() => handleClick!()}>
      {label}
    </button>
  )
}

export default Button;
