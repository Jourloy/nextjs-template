import {create} from "zustand";

export interface IExample {
	username: string;
	id: string;
}

interface IExampleStore {
	example?: IExample;
	setExample: (example: IExample) => void;
}

export const useUserStore = create<IExampleStore>(set => ({
	user: undefined,

	setExample: (example: IExample) => set(state => ({example: example})),
}));
