<template>
  <v-card>
    <v-card-text>
      <v-row class="justify-space-between">
        <v-col class="pt-4" cols="12">
          <span>ایمیل :</span>
          <span>{{ email }}</span>
          <v-icon :color="email_check(email_verified)[0]" small
            >{{email_check(email_verified)[1]}}</v-icon
          >
        </v-col>
        <v-spacer />
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    email_verified: false,
    email: "pouria.hamzeh@gmail.com",
  }),
  mounted(){
   
  },
  methods: {
    email_check(email) {
      let color = "";
      let icon=""
      if (email) {
        color = "green";
        icon = "mdi-check-circle"
      } else {
        color = "red";
        icon = "mdi-close-circle"
      }
      return [color,icon];
    },
  },
};
</script>