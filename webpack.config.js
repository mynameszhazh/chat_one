
export default {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}
