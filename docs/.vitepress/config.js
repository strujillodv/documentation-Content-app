module.exports = {
  // site config
  lang: 'es-CO',
  title: 'Jumper - GSSystems',
  description: 'Generador de Contenido para multiples dispositivos en tiempo real.',
    logo: '/logo.png',
    plugins: [
        '@vuepress/medium-zoom',
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ]

}
