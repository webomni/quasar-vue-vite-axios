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
      <q-input
        filled
        v-model="email"
        label="E-mail"
        class="full-width q-mb-md"
      />
      <q-input
        filled
        v-model="userName"
        label="Username"
        class="full-width q-mb-md"
      />
      <q-input
        filled
        v-model="password"
        label="Password"
        type="password"
        class="full-width q-mb-md"
      />
      <q-input
        filled
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        class="full-width q-mb-md"
      />

      <q-btn
        color="primary"
        label="Sign Up"
        class="Sign-in-button full-width q-mt-lg"
      />

      <div
        class="full-width row items-center justify-center q-my-xl text-black-opacity"
      >
        <q-separator class="separator" inset /> OR
        <q-separator class="separator" inset />
      </div>
      <div
        class="full-width row items-center justify-center absolute-bottom q-my-lg"
      >
        <span class="text-black-opacity"> Already have an account? </span>
        <a class="link q-ml-xs" href="">Sign In.</a>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    };
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
