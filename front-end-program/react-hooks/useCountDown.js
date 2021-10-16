
const useCountDowm = (leftTime, options) => {
    let [ leftTime, setLeftTime ] = useState(initTime);
    const { onEnd , setInterval = 1000} = options;
    
    useEffect({
        const timer = setInterval(() => {
            setLeftTime(leftTime => {
                if(leftTime - 1000 <=0) {
                    clearInterval(timer);
                    onEnd?.();
                    return 0
                }
                return leftTime - 1000;
            });
        }, 1000)
    
        return () => clearInterval(timer);
    }, []);

    return [ leftTime ];
}