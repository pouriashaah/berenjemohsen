<template>
  <v-app style="background-color: #fffbe9">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          dir="ltr"
          class="px-0"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="transparent"
      :clipped-left="clipped"
      fixed
      app
      dir="ltr"
      light
      class="elevation-0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-text-field
        hide-details
        dense
        outlined
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      color="#CEAB93"
      class="justify-space-between"
    >
      <v-btn
        v-for="(item, i) in routes"
        :key="i"
        icon
        router
        exact
        :to="item.route"
      >
        <v-icon>{{ item.icon }}</v-icon></v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          icon: "mdi-account",
          route: "/profile",
        },
        {
          icon: "mdi-map-marker-outline",
          route: "/location",
        },
        {
          icon: "mdi-cart-outline",
          route: "/cart",
        },
        {
          icon: "mdi-message-outline",
          route: "/messages",
        },
        {
          icon: "mdi-apps",
          route: "/",
        },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "Profile",
          to: "/profile",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
