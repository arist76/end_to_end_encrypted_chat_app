import { writable} from "svelte/store";
import { faker } from '@faker-js/faker';
import type { Message, Person } from "$lib/main";

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

const people: Person[] = [
		{ id: 0, avatar: "https://w0.peakpx.com/wallpaper/139/352/HD-wallpaper-gojo-jujutsu-kaisen-gojo-satoru-jjk-satoru-gojo-jujutsu-kaisen-anime.jpg", name: 'Satoru Gojo' },
		{ id: 1, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3e/Mahito.png/revision/latest?cb=20200728162207", name: 'Mahito' },
		{ id: 2, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/ac/Yuji_Itadori_%28Volume_1%29.png/revision/latest/scale-to-width-down/1000?cb=20200611150621", name: 'Yuji Itadori' },
		{ id: 3, avatar: "https://w0.peakpx.com/wallpaper/351/770/HD-wallpaper-sukuna-anime-jujutsu-kaisen.jpg", name: 'Sukuna' },
		{ id: 4, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/61/What_kind_of_girls_do_you_like_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20210124223838", name: 'Aio Todo' },
		{ id: 5, avatar: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/57/Hanami_enjoying_the_thrill_of_the_fight_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20210220043445", name: 'Hanami' }
	];



const messages = writable(messageFeed);
const chatContainer = writable(null);

export {
	messages,
	people,
	chatContainer
}
