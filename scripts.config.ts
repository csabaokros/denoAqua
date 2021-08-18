import { config as env, DenonConfig } from './src/deps.ts'

const config: DenonConfig = {
  scripts: {
    dev: {
      cmd: 'deno run -A --inspect ./src/main.ts',
      desc: 'Run in debug mode',
      watch: true,
      env: env(),
      unstable: true,
    },
  },
}

export default config
