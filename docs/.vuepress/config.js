module.exports = {
  title: 'Tite of the doc',
  description: "Documentions for __insert_name_of_the_project__",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    }
  },
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', 'getting-started']
    }
  ]
}