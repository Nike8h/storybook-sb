<template>
  <div>
       <nav class="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-4 py-3 lg:px-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <a href="#" class="flex items-center mr-4 font-semibold text-md dark:text-white">
                <img src="https://stylebase.ai/wp-content/uploads/2022/04/cropped-Group-18-1.png" class="h-8 mr-4">
              
              </a>
              <div class="hidden sm:flex sm:ml-6">
                <ul class="flex space-x-8">
                  
                </ul>
              </div>
            </div>
            
       
          </div>
        </div>
      
      </nav>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      required: true,
      type: String
    }
  }
}
</script>
