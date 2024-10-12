export const bannersArray = [
  {
    settings: {
      bannerPosition: 'bottom',
      bannerStyle: 'fixed',
      background: '#f0f0f0',
    },
    actions: {
      actionType: 'reactions',
      properties: {
        reactions: {
          reactionsList: ['👍', '🔥', '😂'],
        },
        url: {
          urlText: 'Learn More',
          url: 'https://dummy1.com',
          isUrlOpenedInNewTab: false,
          closeBannerOnClick: true,
        },
      },
    },
    avatar: 'avatar1.jpg',
    behavior: 'default',
    content: 'Welcome to our site! Click to learn more.',
    dismissButton: true,
    showSender: false,
    token: 'token-xyz-456',
    _id: 'banner-xyz-456',
  },
  {
    settings: {
      bannerPosition: 'bottom',
      bannerStyle: 'fixed',
      background: '#ccccff',
    },
    actions: {
      actionType: 'reactions',
      properties: {
        reactions: {
          reactionsList: ['😂', '🎉', '👏'],
        },
        url: {
          urlText: 'More Info',
          url: 'https://dummy3.com',
          isUrlOpenedInNewTab: true,
          closeBannerOnClick: true,
        },
      },
    },
    avatar: 'avatar3.gif',
    behavior: 'default',
    content: 'Enjoy our latest features!',
    dismissButton: true,
    showSender: true,
    token: 'token-opq-101',
    _id: 'banner-opq-101',
  },
  {
    settings: {
      bannerPosition: 'top',
      bannerStyle: 'fixed',
      background: '#ccccff',
    },
    actions: {
      actionType: 'reactions',
      properties: {
        reactions: {
          reactionsList: ['😂', '🎉', '👏'],
        },
        url: {
          urlText: 'More Info',
          url: 'https://dummy3.com',
          isUrlOpenedInNewTab: true,
          closeBannerOnClick: true,
        },
      },
    },
    avatar: 'avatar3.gif',
    behavior: 'default',
    content: 'Enjoy our latest features!',
    dismissButton: true,
    showSender: true,
    token: 'token-opq-101',
    _id: 'banner-opq-101',
  },
];
