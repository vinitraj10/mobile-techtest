import { useEffect, useState } from "react"


export const useApiData = <T>(api: () => Promise<T>) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        api()
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
        .catch((e) => {
            setError(e)
            setIsLoading(false);
        })
    }, [])
    
    return {
        isLoading,
        error,
        data,
    }
}