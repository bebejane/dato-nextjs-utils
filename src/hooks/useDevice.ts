import { useEffect, useState } from 'react';
import { useMediaQuery, useWindowSize } from 'usehooks-ts';

export default function useDevice() {
	const breakpoints = {
		tablet: 768,
		desktop: 1024,
		laptop: 1280,
	};
	const mobile = useMediaQuery(`(max-width: ${breakpoints.tablet}px)`);
	const desktop = !useMediaQuery(`(min-width: ${breakpoints.desktop}px)`);
	const tablet = !useMediaQuery(`(min-width: ${breakpoints.tablet}px)`);

	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const { height, width } = useWindowSize();

	useEffect(() => {
		setIsMobile(mobile);
		setIsDesktop(!mobile && !tablet ? true : false);
		setIsTablet(desktop && !mobile ? true : false);
	}, [mobile, desktop, tablet, height, width]);

	return { isMobile, isDesktop, isTablet };
}
