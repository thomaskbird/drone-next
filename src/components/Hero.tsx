'use client';

import styles from './Hero.module.scss';
import Button from "~/components/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1>Take to the sky!</h1>
      <p>We create art, amazing scenes with a whole new perspective that&apos;s rarely scene without a large budget for aircraft and film crew. Our state of the art drones allow us to maintain a single person crew that pilots, records all in one greatly reducing your costs for the same amazing footage you'd get with the traditional methods.</p>

      <div className={styles.ctas}>
        <Button label="See pricing" type="button" handleClick={() => console.log('clicked pricing')} />
        <Button variant="outlined" label="Watch Video" type="button" handleClick={() => console.log('clicked watch video')} />
      </div>
    </div>
  )
}

export default Hero;
