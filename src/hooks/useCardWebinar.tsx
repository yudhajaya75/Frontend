import { useEffect, useState } from 'react'

function useCardWebinar() {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [countdownTime, setCountdownTime] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products?populate=*&filters[category][$eq]=Webinar`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);

                const calculateCountdown = () => {
                    const currentTime = new Date();
                    const webinarStartTime = new Date("2023-08-31T12:00:00");
                    const timeRemaining = webinarStartTime.getTime() - currentTime.getTime();

                    setCountdownTime(timeRemaining);
                };

                calculateCountdown();
                const interval = setInterval(calculateCountdown, 1000);

                return () => {
                    clearInterval(interval);
                };
            })
    }, []);

    return {
        content,
        loading,
        countdownTime
    }
}

export default useCardWebinar