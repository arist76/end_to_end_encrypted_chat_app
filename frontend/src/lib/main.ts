
interface Message {
	id: number;
	host: boolean;
	avatar: string;
	name: string;
	timestamp: string;
	message: string;
	color?: string;
}

// Types
interface Person {
	id: number;
	avatar: string;
	name: string;
}

export function getInitials(name: string) {
	return name
		.split(' ')
		.map((n) => n[0].toUpperCase())
		.join('');
}


export type {
	Person,
	Message,
}
