import { useRef, useEffect } from 'react';

export default function useSafeSet() {
    const ref = useRef(true);

    useEffect(() => {
        return () => (ref.current = false);
    }, []);

    const safeSetRef = useRef((func) => {
        if (ref.current && func) {
            func();
        }
    });

    return safeSetRef.current;
}
