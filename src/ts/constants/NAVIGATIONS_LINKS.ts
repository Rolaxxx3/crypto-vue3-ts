import { NavigationLinkNameType } from "@/ts/types/navigationLink.type";
import deepFreeze from "@/ts/helpers/deepFreeze";

const NAVIGATIONS_LINKS: Array<NavigationLinkNameType> = [
  { path: { name: 'coins' }, title: 'Coins' },
  { path: { name: 'fiat-currencies' }, title: 'Fiat currencies' },
];

deepFreeze(NAVIGATIONS_LINKS);

export default NAVIGATIONS_LINKS;
