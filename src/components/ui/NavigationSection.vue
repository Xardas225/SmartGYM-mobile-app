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
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <router-link to="/training">
        <button
          type="button"
          class="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-trophy"
            class="dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            >Тренировки</span
          >
        </button>
      </router-link>
      <router-link to="/health">
        <button
          type="button"
          class="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-heart"
            class="dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            >Здоровье</span
          >
        </button>
      </router-link>
      <router-link to="/nutrition">
        <button
          type="button"
          class="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-restaurant"
            class="dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            >Питание</span
          >
        </button>
      </router-link>
      <router-link to="/profile">
        <button
          type="button"
          class="h-full inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <v-icon
            name="io-person-circle"
            class="dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          />
          <span
            class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            >Профиль</span
          >
        </button>
      </router-link>
    </div>
  </div>
</template>
