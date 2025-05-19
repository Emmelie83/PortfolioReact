
class HttpService {

static async request(
		url: string,
		method: "GET" | "POST" | "PUT" | "DELETE",
		body?: unknown
	): Promise<unknown> {
		try {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
				},
				...(body ? { body: JSON.stringify(body) } : {}),
			});

			if (!response.ok) throw new Error("Request failed");

			return await response.json();
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}

export default HttpService;
