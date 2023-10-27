import { api } from "src/boot/axios";
export async function getUserProfile({ commit }, params) {
  const { token } = params;
  try {
    const { data } = await api.get("/user", {
      "Content-Type": "application/json",
      headers: { Authorization: `Bearer ${token}` },
    });
    commit("setUserData", data.user);

    return data.user;
  } catch (error) {
    console.log("error");
    console.log(error);
    return false;
  }
}
