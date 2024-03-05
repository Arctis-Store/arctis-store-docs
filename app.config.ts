export default defineAppConfig({
  docus: {
    title: 'Arctis',
    description: 'Arctis Store Documentation',
    image: 'https://cdn.discordapp.com/attachments/1206034530432196700/1213921870764703886/banner.png?ex=65f73bd7&is=65e4c6d7&hm=f7faed0dbfeb42f62a049294f879b7aafba74b2d1214c3bbd67a17e7a6435f6b&',
    socials: {
      ['tebex']: {
        label: 'Tebex',
        icon: 'tebex',
        href: 'https://arctis-store.pl'
      },
      ['discord']: {
        label: 'Discord',
        icon: 'tebex',
        href: 'http://dc.arctis-store.pl'
      },
      youtube: 'https://youtube.com/@ArctisStore',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'tebex',
        text: 'Arctis Store',
        href: 'https://arctis-store.pl'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
  }
})
