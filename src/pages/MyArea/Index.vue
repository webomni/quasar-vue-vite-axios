<template>
  <q-page class="flex column">
    <MenuDrawer :drawerRight="drawerRight" @close="drawerRight = false" />
    <div
      class="column q-pt-xl q-pb-md q-px-md full-width bg-grey-2"
      :class="drawerRight && 'drawer-open'"
    >
      <q-icon
        @click="drawerRight = !drawerRight"
        name="fas la-bars"
        color="black"
        size="31px"
        class="absolute-right q-ma-lg cursor-pointer"
      />
      <div class="full-width row justify-center">
        <q-icon name="fas fa-lock" color="black" size="11px" class="q-mr-xs" />
        <strong>{{ user.user_name }}</strong>
        <q-icon
          name="fas fa-chevron-down"
          color="black"
          size="11px"
          class="q-ml-xs"
        />
      </div>
      <!-- avatar -->
      <div class="row items-center justify-between full-width q-mt-lg">
        <q-avatar size="96px" class="avatar-Profile">
          <img
            class="avatar"
            :src="
              user.avatar ||
              'https://static.wixstatic.com/media/8c80d0_a7717bbe054f4a8b9d0624bceecd2966.png/v1/fill/w_740,h_740,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8c80d0_a7717bbe054f4a8b9d0624bceecd2966.png'
            "
          />
        </q-avatar>
        <div class="column items-center">
          <strong>{{ posts.length }}</strong>
          <span>Posts</span>
        </div>
        <div class="column items-center">
          <strong>834</strong>
          <span>Followers</span>
        </div>
        <div class="column items-center">
          <strong>162</strong>
          <span>Following</span>
        </div>
      </div>

      <div class="column q-mt-md">
        <strong>{{ user.user_name }}</strong>
        <span v-if="user.bio"> {{ user.bio }}</span>
        <span v-else>Adicione uma descrição em sua bio.</span>
        <span> Everything is designed. </span>
      </div>
      <q-btn
        flat
        dense
        color="white"
        class="btn-edit full-width q-my-md"
        text-color="black"
        label="Edit Profile"
        @click="goTo('profile')"
      />

      <!-- avatar -->
      <div class="row">
        <div class="column items-center q-mr-md">
          <q-avatar size="64px" class="avatar-story">
            <q-icon name="fas fa-plus" size=""></q-icon>
          </q-avatar>
          <span>New</span>
        </div>
        <div class="column items-center q-mr-md" v-for="item in 3" :key="item">
          <q-avatar size="64px" class="avatar-story">
            <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <span>Friends</span>
        </div>
      </div>
    </div>
    <q-separator />
    <div class="full-width" :class="drawerRight && 'drawer-open'">
      <q-tabs v-model="tab" class="text-teal" active-color="grey-8">
        <q-tab name="grid">
          <q-img src="src/assets/grid.svg" width="22px" />
        </q-tab>
        <q-tab name="profile">
          <q-img src="src/assets/profile.svg" width="22px" />
        </q-tab>
      </q-tabs>
      <div class="row q-mb-lg">
        <q-img
          :ratio="1"
          v-for="item in posts"
          :key="item.id"
          class="cursor-pointer col-4"
          :src="item.image"
        />
      </div>
    </div>
    <!-- Componente BottomBar -->
    <div
      class="full-width q-pb-lg"
      :class="drawerRight ? 'bottom-menu-draer-open' : 'container-bottom'"
    >
      <q-separator class="full-width q-mb-sm" />
      <BottomBar />
    </div>
  </q-page>
</template>

<script>
import BottomBar from "src/components/BottomBar/Index.vue";
import MenuDrawer from "src/components/MenuDrawer/Index.vue";
export default {
  name: "MyArea",
  data() {
    return {
      tab: "grid",
      drawerRight: false,
      user: {},
      token: this.$store.getters["auth/getJWT"],
      posts: [],
    };
  },
  components: {
    BottomBar,
    MenuDrawer,
  },
  async mounted() {
    this.loadProfileData();
    await this.loadAllPosts();
  },
  methods: {
    loadProfileData() {
      this.user = this.$store.getters["user/getUserData"];
    },
    async loadAllPosts() {
      const { data } = await this.$store.dispatch("posts/listMyPosts", {
        token: this.token,
      });
      console.log("data");
      console.log(data);
      this.posts = data;
    },
    goTo(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-Profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 2px;
  .avatar {
    width: 91px;
    height: 91px;
  }
}

.avatar-Profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 2px;
  .avatar {
    width: 91px;
    height: 91px;
  }
}
.avatar-story {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: solid 2px #c7c7cc;
  padding: 4px;
  .avatar {
    width: 60px;
    height: 55px;
  }
}
.btn-edit {
  height: 35px;
  border-radius: 6px;
  text-transform: none;
  padding: 5px;
  border: solid 1px rgba(60, 60, 67, 0.18);
}
.drawer-open {
  position: relative;
  right: 70%;
}
.bottom-menu-draer-open {
  position: absolute;
  right: 70%;
  bottom: 0px;
}
.menu-drawer {
  right: 70%;
}
</style>
