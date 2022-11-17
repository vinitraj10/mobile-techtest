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
