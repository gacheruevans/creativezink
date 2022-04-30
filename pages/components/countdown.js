import {useRef, useEffect , useState} from 'react'
import styles from '../../styles/Home.module.css'

export default function CountDown() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
   
    let interval = useRef();

    const CountdownTimer =() => {
        const countDate = new Date('May 28, 2022 00:00:00').getTime();

        interval = setInterval(()=> {
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
        
            const timerDays = Math.floor(gap / day);
            const timerHours = Math.floor((gap % day) / hour);
            const timerMinutes = Math.floor((gap % hour) / minute);
            const timerSeconds = Math.floor((gap % minute) / second);

            if(gap < 0) {
                //Stop timer
                clearInterval(interval.current);
                const hideContdown = true;
            }else {
                //update timer
                setTimerDays(timerDays);
                setTimerHours(timerHours);
                setTimerMinutes(timerMinutes);
                setTimerSeconds(timerSeconds);
            }

        }, 1000);
    };

    useEffect(() => {
        CountdownTimer();
        return () => {
            clearInterval(interval.current)
        };
    });

    return (
        <>
            <div className={styles.countdown}>
                <div className="container-day">
                    <h3 className={styles.day}>{timerDays}</h3>
                    <h3 className="text-stone-400">Days</h3>
                </div>
                <h3 className={styles.colon} >:</h3>
                <div className="container-hour">
                    <h3 className={styles.hour}>{timerHours}</h3>
                    <h3 className="text-stone-400">Hours</h3>
                </div>
                <h3 className={styles.colon} >:</h3>
                <div className="container-minute">
                    <h3 className={styles.minute}>{timerMinutes}</h3>
                    <h3 className="text-stone-400">Minutes</h3>
                </div>
                <h3 className={styles.colon} >:</h3>
                <div className="container-second">
                    <h3 className={styles.second}>{timerSeconds}</h3>
                    <h3 className="text-stone-400">Seconds</h3>
                </div>
            </div>
            <span className={styles.logo}>
                <img src="/launch.png" alt="Company Logo"/>
            </span>
            <p id="launchtxt" className={styles.description}>
                We are launching soon please stay tuned!
            </p>
            <p className={styles.sub_description}>
                 new content will automatically load
            </p>
        </>
    )
}
