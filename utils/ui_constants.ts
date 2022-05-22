interface NavigationItem {
    label: string,
    href: string,
    clickable?: boolean
  }
  
interface TopNavigationItem extends NavigationItem {
  subLinks?: NavigationItem[]
}

interface News {
  title: string,
  details: string,
  imageUrl: string,
  href: string
}

export const MainNavigation : TopNavigationItem[] = [
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "IP Assets",
    href: "/",
  },
  {
    label: "News",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const NewsMock : News[] = [
  {
    title: 'Decentraland Foundation Update',
    details: 'Lorem ipsum text just to fill the space on this particular section',
    imageUrl: '/img/newsMock.png',
    href: '/'
  },
  {
    title: 'Decentraland Foundation Update',
    details: 'Lorem ipsum text just to fill the space on this particular section',
    imageUrl: '/img/newsMock.png',
    href: '/'
  },
  {
    title: 'Decentraland Foundation Update',
    details: 'Lorem ipsum text just to fill the space on this particular section',
    imageUrl: '/img/newsMock.png',
    href: '/'
  },
];