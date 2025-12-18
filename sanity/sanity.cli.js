import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: '2lmggf9l',
        dataset: 'production'
    },
    deployment: {
        autoUpdates: true
    }
})