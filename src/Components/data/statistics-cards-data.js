import {
  BanknotesIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const statisticsCardsData = [
  {
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "$53k",
    percentage:1,
  },
  {
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    percentage:0,
  },
  {
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    percentage:-2,
  },
];

export default statisticsCardsData;
