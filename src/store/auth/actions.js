import { api } from "src/boot/axios";

export async function makeLogin({ commit }, body) {
  console.log("commit");
  console.log(commit);
  console.log("makeLogin", body);

  const { credential, password } = body;
  const formattedCredential = {};

  if (credential.includes("@")) {
    formattedCredential.email = credential;
  } else {
    formattedCredential.user_name = credential;
  }

  try {
    const { data } = await api.post("/auth", {
      ...formattedCredential,
      password,
    });
    commit("setToken", data.token);

    return data;
  } catch (error) {
    console.log("error");
    console.log(error);
    return false;
  }
}
