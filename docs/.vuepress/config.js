module.exports = {
  base: '/fed/',
  title: 'ZY FED',
  description: 'FE Docs of Aiden Zhao.',
  themeConfig: {
    nav: [
      { text: '规范', link: '/standard/' },
      { text: '最佳实践', link: '/practice/' },
      // { text: '部署', link: '/deploy/' },
    ],
    sidebar: {
      '/standard/': [
        {
          title: '起步',
          collapsable: false,
          children: [''],
        },
        {
          title: '代码风格',
          collapsable: false,
          children: ['html', 'css', 'js', 'vue'],
        },
        {
          title: '项目开发',
          collapsable: false,
          children: [
            'document',
            'tool',
            'version',
            'dependency',
            'git',
            'vuecli',
            'editorconfig',
            `prettier`,
            'communication',
          ],
        },
      ],
      '/practice/': [
        {
          title: '关于',
          collapsable: false,
          children: [''],
        },
        {
          title: '落地',
          collapsable: false,
          children: [
            // 'compatibility',
            'scss-resources',
            'css-building',
            // 'webpack-bundle-analyzer',
          ],
        },
        // {
        //   title: '玄学',
        //   collapsable: false,
        //   children: ['high-cohesion-and-low-coupling'],
        // },
      ],
      // '/deploy/': [
      //   {
      //     title: '部署',
      //     collapsable: false,
      //     children: ['', 'nginx'],
      //   },
      // ],
    },
  },
};
