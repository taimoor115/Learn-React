import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}
class UserService {
  getAllUser() {
    const controller = new AbortController();
    const request = apiClient
    .get<User[]>("/users", {
      signal: controller.signal,
    });
    return {request, cancel: () => controller.abort()}
  }
}

export default new UserService();
