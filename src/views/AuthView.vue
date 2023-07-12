<template>
  <div
    class="h-full bg-slate-200 flex flex-col justify-center mx-auto p-4 mt-16"
  >
    <div class="my-5">
      <button
        class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center bg-gray-700 border-gray-700 rounded-lg text-gray-200 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          class="w-6 h-6"
          alt=""
        />
        <span>Login with Google</span>
      </button>
    </div>

    <label
      for="input-group-1"
      class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-600"
      >Your Email</label
    >
    <div class="relative mb-2">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          ></path>
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="input-group-1"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
      />
    </div>
    <label
      for="website-admin"
      class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-600"
      >Username</label
    >
    <div class="flex">
      <span
        class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
      >
        @
      </span>
      <input
        type="text"
        id="website-admin"
        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="elonmusk"
      />
    </div>
    <div class="flex flex-row justify-between mt-6">
      <div>
        <label for="remember" class="">
          <input
            type="checkbox"
            id="remember"
            class="w-4 h-4 border-slate-200 focus:bg-indigo-600"
          />
          Remember me
        </label>
      </div>
      <div>
        <a href="#" class="font-medium text-indigo-600">Forgot Password?</a>
      </div>
    </div>
    <button
      class="w-full mt-6 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
      <span>Login</span>
    </button>
    <p class="text-center mt-2">
      Not registered yet?
      <a
        href="#"
        class="text-indigo-600 font-medium inline-flex space-x-1 items-center"
        >
        <span>Register now</span>
        <v-icon name="io-arrow-redo"></v-icon>
      </a>
    </p>
  </div>
</template>
