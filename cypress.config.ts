import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on) {
      // implement node event listeners here
      // some more information here https://docs.cypress.io/guides/tooling/plugins-guide
      on('file:preprocessor', vitePreprocessor())
      on('before:spec', (spec) => {
        console.log('Running ...', spec.relative)
      })
    },
  },
})
