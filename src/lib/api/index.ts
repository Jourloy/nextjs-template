import axios, {AxiosInstance} from "axios";

export default class API {
	private link = process.env.BACKEND_HOST || `http://localhost:3001`;
	public context: AxiosInstance;

	constructor(path?: string) {
		this.link += path;

		this.context = axios.create({
			baseURL: this.link,
			withCredentials: true,
		});
	}

	public getSource() {
		return axios.CancelToken.source();
	}
}
