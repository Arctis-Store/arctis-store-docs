export default defineAppConfig({
  docus: {
    title: 'Arctis',
    description: 'Arctis Store Documentation',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'Arctis-Store/arctis-store-docs',
      youtube: 'https://www.youtube.com/channel/UCNp1rijbceQquFAdLy67x-g',
      ['discord']: {
        label: 'Discord',
        icon: 'https://cdn.discordapp.com/attachments/1206034530432196700/1214281120418373682/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png?ex=65f88a6b&is=65e6156b&hm=21075e1cc288781f5461768ef5ef3a5c259ed18db6250a818e1936f5ea1776c3&',
        href: 'dc.arctis-store.pl'
      }
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
        icon: 'IconDocus',
        text: 'Arctis Store',
        href: 'https://arctis-store.pl'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
  }
})
