<template>
 <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
            <img src="https://stylebase.ai/wp-content/uploads/2022/04/cropped-Group-18-1.png" class="mr-4 h-11" >
           
        </a>
        <!-- Card -->
        <div
            class="items-center mt-6 mb-6 justify-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
            <div class="hidden w-2/3 lg:flex">
                <img class="rounded-l-lg" src="http://52.90.224.249/images/auth/login.jpg">
            </div>
            <div class="w-full p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0">
                <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                    Sign in to brandOS
                </h2>
                <form class="mt-8 space-y-6">
                
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            password</label>
                        <input type="password" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required>
                    </div>
                    <div class="flex items-start">


                      

                    </div>
                    <a href=""
                        class="w-full mt-8 px-5 py-3 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                        to your account</a>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Not registered? <a href=""
                            class="text-red-700 hover:underline dark:text-red-500">Create account</a>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  components: {
 
  },
  data() {
    return {
      username: null,
      password: null,
      errorMessage: null,
      working: false
    }
  },
  methods: {
    clearError() {
      this.errorMessage = null
    },
    onSubmit() {
      this.working = true

      setTimeout(() => {
        this.errorMessage = 'Houston we have a problem!'
        this.working = false
      }, 1000);
    }
  }
}
</script>
