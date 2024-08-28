import { writable} from "svelte/store";
import { faker } from '@faker-js/faker';
import type { Message } from "$lib/main";

// Messages
const lorem = faker.lorem.paragraph();
const satoroGojoAvatar = "https://w0.peakpx.com/wallpaper/139/352/HD-wallpaper-gojo-jujutsu-kaisen-gojo-satoru-jjk-satoru-gojo-jujutsu-kaisen-anime.jpg" ;
const sukunaAvatar = "https://w0.peakpx.com/wallpaper/351/770/HD-wallpaper-sukuna-anime-jujutsu-kaisen.jpg"
const messageFeed: Message[] = [
	{
		id: 0,
		host: true,
		avatar: satoroGojoAvatar,
		name: 'Satoro Gojo',
		timestamp: 'Yesterday @ 2:30pm',
		message: lorem,
		color: 'variant-soft-primary'
	},
	{
		id: 1,
		host: false,
		avatar: sukunaAvatar,
		name: 'Sukuna',
		timestamp: 'Yesterday @ 2:45pm',
		message: lorem,
		color: 'variant-soft-primary'
	},
	{
		id: 2,
		host: true,
		avatar: satoroGojoAvatar,
		name: 'Satoro Gojo',
		timestamp: 'Yesterday @ 2:50pm',
		message: lorem,
		color: 'variant-soft-primary'
	},
	{
		id: 3,
		host: false,
		avatar: sukunaAvatar,
		name: 'Sukuna',
		timestamp: 'Yesterday @ 2:52pm',
		message: lorem,
		color: 'variant-soft-primary'
	}
];

const messages = writable(messageFeed);
const chatContainer = writable(null);

export {
	messages,
	chatContainer
}
