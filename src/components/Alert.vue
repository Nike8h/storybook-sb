<template>
<div> 

  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
   
      <div class="ml-3">
        <h3 class="text-sm font-medium text-green-800">A Team Member has been added</h3>
        <div class="mt-2 text-sm text-green-700">
          <p>Ryan will be notified about your new base.</p>
        </div>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">View status</button>
            <button type="button" class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  <br>
    <div class="rounded-md bg-red-50 p-4">
    <div class="flex">
     
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc pl-5 space-y-1">
            <li>Your password must be at least 8 characters</li>
         
          </ul>
        </div>
      </div>
    </div>
  </div>
    


  </div>


</template>

<script>


export default {
  components: {
   
  },
  props: {
    variant: {
      default: 'error',
      type: String
    },
    message: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      showAlert: true
    }
  },
  computed: {
    alertClass() {
      return this.variant === 'error' ? 'alert-error' : ''
    },
  },
  methods: {
    dismiss() {
      this.$emit('alert-dismissed')
    }
  }
};
</script>

<style lang="css" scoped>
  .alert-error {
    @apply bg-red-600 text-white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
