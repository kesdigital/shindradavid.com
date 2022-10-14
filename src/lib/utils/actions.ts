export function clickOutsideNav(node: HTMLElement) {
	const burger = document.getElementById('burger');
	const handleClick = (event: MouseEvent) => {
		if (burger?.contains(event.target as HTMLElement)) return;
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside_nav'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
