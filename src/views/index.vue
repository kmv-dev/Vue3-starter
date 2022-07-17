<template>
  <div>
    <h1>{{ users }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "getUsers",
    }),
  },
};
</script>
