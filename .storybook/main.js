/**
 *   "../src//.stories.mdx",
 * "../src//.stories.@(js|jsx|ts|tsx)"
 */
module.exports = {
  "stories": ['../src/components/**/stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}