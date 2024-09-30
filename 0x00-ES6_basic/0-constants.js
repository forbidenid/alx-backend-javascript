export function taskFirst() {
	const task = "I prefer const when i can.";
	return talk;
}

export function getLast() {
	return "is okay";
}

export function taskNext() {
	let combination = "but some times let";
	combination += getLast();
	return combination;
}
