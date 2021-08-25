type NavigationPathType = {
  name: string,
  params?: unknown,
  query?: unknown,
}

export type NavigationLinkNameType = {
  title: string,
  path: NavigationPathType,
}

export type NavigationLinkPathType = {
  title: string,
  path: string,
}
