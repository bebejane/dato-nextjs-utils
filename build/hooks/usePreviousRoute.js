import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
const usePreviousRoute = () => {
    const storage = globalThis.localStorage;
    const router = useRouter();
    const [prevRoute, setPrevRoute] = useState(typeof storage !== 'undefined' ? storage.getItem('previousRoute') : null);
    useEffect(() => {
        const prevRoute = storage.getItem('currentRoute') || null;
        if (prevRoute === router.asPath)
            return;
        storage.setItem('previousRoute', prevRoute);
        storage.setItem("currentRoute", router.asPath);
        setPrevRoute(prevRoute);
    }, [router.asPath, storage]);
    useEffect(() => {
        const handleWindowReload = () => {
            storage.removeItem('previousRoute');
            storage.removeItem("currentRoute");
        };
        window.addEventListener('unload', handleWindowReload);
        return () => window.removeEventListener('unload', handleWindowReload);
    }, []);
    return prevRoute;
};
export default usePreviousRoute;
//# sourceMappingURL=usePreviousRoute.js.map