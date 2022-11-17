import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

// const to track the orientation so that
// can be used to further check in the logic
// without to have any string equality checks
export enum ORIENTATION {
    PORTRAIT = 'PORTRAIT',
    LANDSCAPE = 'LANDSCAPE',
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
        const listener = Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation(ORIENTATION.PORTRAIT);
            } else {
                setOrientation(ORIENTATION.LANDSCAPE);
            }
        });
        // call remove listener as soon as it un-mounts
        return listener.remove;
    }, []);
    return orientation;
}

/**
 *
 * @param api
 * @description Takes an API call and returns the common data structure with fields
 * like loading, error and data which is important for any API call to have better
 * user experience
 */
export const useApiData = <T>(api: () => Promise<T>) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api()
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
            });
    }, [api]);

    return {
        isLoading,
        error,
        data,
    };
};

/**
 * @description custom hook to determine row item,by calling
 * another hook `useOrientation` which listens orientation changes of device,
 * this can be further modified depending on the use case of various device size
 * like tablets or smaller device
 * @returns count of rowItem based on the orientation
 */
export const useRowItemCount = () => {
    const orientation = useOrientation();
    const [rowItem, setRowItem] = useState(0);
    useEffect(() => {
        if (orientation === ORIENTATION.LANDSCAPE) {
            setRowItem(2);
        } else {
            setRowItem(1);
        }
    }, [orientation]);

    return rowItem;
};
