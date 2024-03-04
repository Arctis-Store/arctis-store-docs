export default defineAppConfig({
  docus: {
    title: 'Arctis',
    description: 'Arctis Store Documentation',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      discord: 'dc.arctis-store.pl',
      github: 'Arctis-Store/arctis-store-docs',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
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
        icon: 'https://cdn.discordapp.com/attachments/1206034530432196700/1213190963133157416/logostore.png?ex=65f49321&is=65e21e21&hm=6e7fdb444620cbfccbd1b5ef03702e813e99ebda277e756c2f0c4ae1a329bfc1&',
        text: 'Arctis Store',
        href: 'https://arctis-store.pl'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
  }
})
