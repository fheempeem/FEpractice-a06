import styles from "./banner.module.css"
import Image from 'next/image'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src = {'/img/cover.jpg'}
            alt = 'cover'
            fill = {true}
            priority
            objectFit="cover"/>
            <div className = "relative top-[100px] z-20 text-center text-white">
                <h1 className="text-4xl">where every event finds its venue</h1>
                <h3 className = "text-xl">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
            </div>
        </div>
    );
}