import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const themeConfig = resolveConfig(tailwindConfig).theme

export default {
  title: 'Base/Typography',
  argTypes: {
    text: { control: 'text', name: 'Text' },
  },
  args: {
    themeConfig,
    text: 'Stylebase Header Text',
    shortText: 'Brand Management Platform with brandOS',
    longText: 'A power all-in-one management platform that covers your styleguides, design systems, content, design data, and anything related to your brand!',
  },
}

export const Headings = (args) => ({
  props: {
    text: {
      default: args.text
    },
  },
  template: `
<div>
  <h1>H1 &ndash; {{ text }}</h1>
  <h2>H2 &ndash; {{ text }}</h2>
  <h3>H3 &ndash; {{ text }}</h3>
  <h4>H4 &ndash; {{ text }}</h4>
  <h5>H5 &ndash; {{ text }}</h5>
  <h6>H6 &ndash; {{ text }}</h6>

</div>
`
})

export const TextSizes = (args) => ({
  props: {
    shortText: {
      default: args.shortText
    },
    longText: {
      default: args.longText
    },
    themeConfig
  },
  template: `
<div class="space-y-3">
  <div v-for="(value, name, i) in themeConfig.fontSize" :key="i" class="space-y-1">
    <div><code>.text-{{ name }}</code></div>
    <div :class="['text-' + name ]">{{ shortText }}</div>
    <div :class="['text-' + name ]">This is for demonstrating associated <code>line-height</code> and <strong>this is bold</strong> &ndash; {{ longText }}</div>
  </div>
</div>
`
})

export const FontWeights = (args) => ({
  props: {
    text: {
      default: args.text
    },
    themeConfig
  },
  template: `
<div class="space-y-3">
  <div><code>No Utility Class</code> &ndash; {{ text }}</div>
  <div v-for="(value, name, i) in themeConfig.fontWeight" :key="i">
    <code>.text-{{ name }}</code> &ndash; <span :class="['font-' + name ]">{{ text }}</span>
  </div>
</div>
  `
})
