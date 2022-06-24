import InputWrapper from '@/components/InputWrapper.vue';

export default {
  component: InputWrapper,
  title: 'Components/Input Wrapper',
  argTypes: {
    disabled: { control: 'boolean', name: 'Is disabled?' },
    showWithOtherControls: { control: 'boolean', name: 'Show with other controls' },
    showError: { control: 'boolean', name: 'Show error message' },
    help: { control: 'text', name: 'Help Text' },
    label: { control: 'text', name: 'Label' },
    error: { control: 'text', name: 'Error text' },
    optional: { control: 'boolean', name: 'Optional field' },
  },
  args: {
    disabled: false,
    showWithOtherControls: false,
    showError: false,
    help: 'Enter your last name here. If this is a problem, sorry but we can\'t help you.',
    label: 'Last Name',
    error: 'Seriously bro... your last name here',
    optional: false,
  }
};

export const Text = (args) => ({
  components: { InputWrapper },
  props: {
    disabled: {
      default: args.disabled,
    },
    showWithOtherControls: {
      default: args.showWithOtherControls,
    },
    showError: {
      default: args.showError,
    },
    help: {
      default: args.help,
    },
    label: {
      default: args.label,
    },
    error: {
      default: args.error,
    },
    optional: {
      default: args.optional,
    }
  },
  computed: {
    errorMessage() {
      return this.showError ? this.error : null
    }
  },
  template: `
<div>
 
  
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
    </div>
 


</div>
`
});
