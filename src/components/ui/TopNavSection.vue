<script setup lang="ts">
import { defineComponent } from "vue";
import OhVueIcon from "oh-vue-icons";

defineComponent({
  components: {
    "v-icon": OhVueIcon,
  },
});
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="flex justify-between h-full max-w-lg mx-auto font-medium">
      <router-link to="/">
        <button
          type="button"
          class="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-caret-back-outline"
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          ></v-icon>
        </button>
      </router-link>
      <router-link
        to="/"
        class="h-full inline-flex flex-col items-center justify-center px-5 text-white font-bold"
      >
        SMARTGYM
      </router-link>
      <router-link to="/profile">
        <button
          type="button"
          class="h-full inline-flex flex-col items-end justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-person"
            class=" dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
        </button>
      </router-link>
    </div>
  </div>
</template>
