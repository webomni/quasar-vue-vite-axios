import { api } from "src/boot/axios";
export async function listAllPosts(context, params) {
  const { token } = params;
  try {
    const { data } = await api.get("/posts", {
      "Content-Type": "application/json",
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    console.log("error");
    console.log(error);
    return false;
  }
}
export async function listMyPosts(context, params) {
  const { token } = params;
  try {
    const { data } = await api.get("/posts/my-posts", {
      "Content-Type": "application/json",
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    console.log("error");
    console.log(error);
    return false;
  }
}
