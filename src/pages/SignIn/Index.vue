<template>
  <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon
      name="fas fa-chevron-left"
      size="18px"
      class="absolute-left q-ma-lg"
      color="grey"
    ></q-icon>
    <div class="full-width column items-center justify-center">
      <q-img
        class="logo q-mb-lg"
        src="../../../src/assets/instadev-logo.svg"
      ></q-img>
      <q-form class="full-width" @submit="onSubmit">
        <q-input
          filled
          v-model="credential"
          label="E-mail ou usuário"
          class="full-width q-mb-md"
        />
        <q-input
          filled
          v-model="password"
          label="Password"
          type="password"
          class="full-width q-mb-md"
        />
        <div class="full-width column items-end">
          <a class="q-mt-md link" href="">Forgot Password</a>
        </div>
        <q-btn
          type="submit"
          color="primary"
          label="Log in"
          :disable="!credential || !password"
          class="Sign-in-button full-width q-mt-lg"
        />
      </q-form>
      <div class="flex row items-center justify-center q-mt-xl">
        <q-img
          src="../../../src/assets/facebook-logo.svg"
          class="facebook-icon"
        ></q-img>
        <a class="link q-ml-xs" href="">Log With facebook</a>
      </div>

      <div
        class="full-width row items-center justify-center q-my-xl text-black-opacity"
      >
        <q-separator class="separator" inset /> OR
        <q-separator class="separator" inset />
      </div>
      <div
        class="full-width row items-center justify-center absolute-bottom q-my-lg"
      >
        <span class="text-black-opacity"> Don't have an account? </span>
        <a class="link q-ml-xs" href="">Sign up.</a>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      credential: "camila@dev2dev.dev.br",
      password: "12345678",
    };
  },
  methods: {
    async onSubmit() {
      const result = await this.$store.dispatch("auth/makeLogin", {
        credential: this.credential,
        password: this.password,
      });

      if (result) {
        await this.loadProfileData(result.token);
        this.$router.push({ path: "main" });
      } else {
        this.$q.notify({
          type: "warning",
          textColor: "yellow-1",
          icon: "warning",
          message: "Verifique as credenciais!",
          position: "top",
          timeout: 3000,
        });
      }

      /* const response = await this.$api.post("/auth", {
        email: this.credential,
        password: this.password,
      });
      console.log("response");
      console.log(response); */
    },
    async loadProfileData(token) {
      await this.$store.dispatch("user/getUserProfile", {
        token,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 49px;
  width: 182px;
}
.Sign-in-button {
  height: 44px;
  border-radius: 5px;
  background-color: $instaBlue;
}
.facebook-icon {
  height: 17px;
  width: 17px;
}
.separator {
  width: 35%;
}
</style>
