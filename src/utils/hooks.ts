import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

// const to track the orientation so that
// can be used to further check in the logic
// without to have any string equality checks
export enum ORIENTATION {
    PORTRAIT = "PORTRAIT",
    LANDSCAPE = "LANDSCAPE"
}

/**
 * 
 * @description custom hook to detect change in orientation
 * @see https://stackoverflow.com/a/64559463/6717724
 * @description to be quick i have just copied the code and have tweaked a little
 */
export function useOrientation() {
    const [orientation, setOrientation] = useState(ORIENTATION.PORTRAIT);
    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation(ORIENTATION.PORTRAIT)
            } else {
                setOrientation(ORIENTATION.LANDSCAPE)

            }
        })

    }, []);
    return orientation;
}



/**
 * 
 * @param api 
 * @returns common data structure with common API tracker fields like loading, error
 * to serve better UI experience to users
 */
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