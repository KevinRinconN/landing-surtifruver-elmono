import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  type Icon as LucideIcon,
  ArrowDown,
  ArrowUp,
  MoreVertical,
  ShieldCheck,
  RefreshCcw,
  ChartColumnIncreasing,
  Globe,
  ShoppingCart,
  MessageSquareShare,
  Wheat,
  Apple,
  Bean,
  Archive,
  MessageCircleHeart,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export type IconAdminPages = keyof typeof adminPages;
export type IconSettings = keyof typeof settings;
export type IconSocial = keyof typeof social;
export type IconUiIndicator = keyof typeof uiIndicators;
export type Icons = keyof typeof Icons;
export type IconUi = keyof typeof ui;

const settings = {};

const adminPages = {};

const social = {};

const ui = {
  wheat: Wheat,
  apple: Apple,
  bean: Bean,
  archive: Archive,
  message: MessageCircleHeart
}

const uiIndicators = {
  buyCar: ShoppingCart,
  shiledCheck: ShieldCheck,
  refresh: RefreshCcw,
  increasing: ChartColumnIncreasing,
  moreVertical: MoreVertical,
  globe: Globe,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  message: MessageSquareShare,
};

export const Icons = {
  ...uiIndicators,
  ...social,
  ...ui,
  ...adminPages,
  ...settings,
};
