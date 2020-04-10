module.exports = {
  base: '/fed/',
  title: 'ZY FED',
  description: '我正在践行的，用于自我约束的前端编码规范。',
  themeConfig: {
    nav: [
      { text: '规范', link: '/standard/' },
      { text: 'Github', link: 'https://github.com/varzy/fed', target: '_blank' },
      { text: '我', link: 'https://varzy.me', target: '_blank' },
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
      ]
    },
  },
};
