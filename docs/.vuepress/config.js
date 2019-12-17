module.exports = {
  title: 'Unidata FED',
  description: 'Docs of unidata fe group.',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '代码风格', link: '/style/' },
    ],
    sidebar: {
      '/style/': [
        {
          title: '代码风格',
          collapsable: false,
          children: [
            '', 'html', 'css', 'js', 'vue'
          ]
        },
        {
          title: '项目开发',
          collapsable: false,
          children: [
            'document', 'tool', 'version', 'dependencies'
          ]
        }
      ]
    }
  }
}
