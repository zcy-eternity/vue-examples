<template>
  <v-app id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <sidebar />
        </v-col>
        <v-col cols="9">
          <router-view v-bind:key="$route.path" />
        </v-col>
      </v-row>
    </v-container>

    <alertdialog />
    <!-- <keep-alive>
      <router-view id="router" />
    </keep-alive> -->
  </v-app>
</template>

<script>
import sidebar from "@/views/Sidebar";
export default {
  components: {
    sidebar,
    alertdialog: () => import("@/components/AlertDialog.vue")
  }
};
</script>
