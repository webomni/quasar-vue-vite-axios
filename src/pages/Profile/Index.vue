<template>
  <q-page class="flex">
    <div class="full-width row items-center justify-between bg-grey-2">
      <q-btn flat color="primary" label="Cancel" />
      <strong>Edit Profile</strong>
      <q-btn flat color="primary" label="Done" />
    </div>
    <div class="full-width column items-center justify-center">
      <q-avatar size="95px" class="avatar-story">
        <img class="avatar" :src="avatar" />
      </q-avatar>
      <q-btn flat color="primary" label="Change Profile Photo" />
    </div>

    <div class="full-width column q-px-sm">
      <div class="container-input row justify-center items-center">
        <span>Name</span>
        <q-input v-model="name" placeholder="Name" />
      </div>
      <div class="container-input row justify-center items-center">
        <span>User Name</span>
        <q-input v-model="userName" placeholder="User Name" />
      </div>
      <div class="container-input row justify-center items-center">
        <span>Web site</span>
        <q-input v-model="webSite" placeholder="Web site" />
      </div>
      <div class="container-input row justify-center items-center">
        <span>Bio</span>
        <q-input v-model="bio" autogrow placeholder="Bio" />
      </div>
    </div>

    <div class="column full-width q-px-sm items-start q-px-sm">
      <q-separator class="full-width q-my-sm" />
      <q-btn flat color="primary" label="Switch to profissional account" />
      <strong class="q-ml-md">Private Information</strong>

      <div class="full-width column q-px-sm">
        <div class="container-input row justify-center items-center">
          <span>E-mail</span>
          <q-input v-model="email" placeholder="E-mail" />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Phone</span>
          <q-input v-model="phone" placeholder="Phone" />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Gender</span>
          <q-input v-model="gender" placeholder="Gender" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      name: "",
      userName: "",
      webSite: "",
      bio: "",
      email: "",
      phone: "",
      gender: "",
      avatar: "",
    };
  },
  mounted() {
    this.loadProfileData();
  },
  methods: {
    loadProfileData() {
      const userData = this.$store.getters["user/getUserData"];
      this.name = userData.name;
      this.userName = userData.user_name;
      this.bio = userData.bio;
      this.email = userData.email;
      this.phone = userData.phone;
      this.gender = userData.gender;
      this.avatar = userData.avatar;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-input {
  font-size: 15px;
  span {
    width: 22%;
  }
  .q-textarea,
  .q-input {
    width: 70%;
  }
}
strong {
  font-size: 16px;
}
.q-btn {
  text-transform: none;
  font-size: 16px;
}
</style>
