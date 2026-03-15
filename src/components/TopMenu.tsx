import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className = 'fixed top-0 left-0 right-0 z-30 flex h-[50px] flex-row items-center justify-end border-y border-solid border-lightgray bg-white'>
            <TopMenuItem title ='Booking' pageRef='/booking'/>
            <Image src={'/img/logo.png'} className= 'h-full w-auto' alt = 'logo' width = {0} height={0} sizes='100vh'/>
            
        </div>
    );
}