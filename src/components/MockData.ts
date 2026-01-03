import pp1 from "../assets/images/profile-p1.png";
import pp2 from "../assets/images/profile-p2.png";
import pp3 from "../assets/images/profile-p3.png";
import pp4 from "../assets/images/profile-p4.png";

export const recentTransfers = [
  {
    img: pp1,
    name: "Ali",
  },

  {
    img: pp2,
    name: "Steve",
  },

  {
    img: pp3,
    name: "Ahmed",
  },

  {
    img: pp4,
    name: "Mark",
  },
];


export const transactionHistory = {
  today: [
    {
      id: "tx_101",
      amount: 35.23,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Walmart",
        img: "./accountsIcon/Wallmart.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today",
      time: "02:12"
    },

    {
      id: "tx_102",
      amount: 430.24,
      currency: "$",
      type: "topup",
      status: "success",
      receiver: {
        name: "Top up",
        img: "./accountsIcon/Topup.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today",
      time: "01:30"
    },

    {
      id: "tx_103",
      amount: 35.23,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Netflix",
        img: "./accountsIcon/Netflix.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today",
      time: "02:40"
    },

    {
      id: "tx_104",
      amount: 35.23,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Netflix",
        img: "./accountsIcon/Netflix.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today",
      time: "04:40"
    },

    {
      id: "tx_105",
      amount: 220.12,
      currency: "$",
      type: "topup",
      status: "success",
      receiver: {
        name: "Top up",
        img: "./accountsIcon/Topup.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today",
      time: "12:30"
    },
  ],

  yesterday: [
    {
      id: "tx_106",
      amount: 430.00,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Amazon",
        img: "./accountsIcon/amazon.png",
      },
      createdAt: new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toISOString(),
      date: "yesterday",
      time: "12:30"
    },

    {
      id: "tx_107",
      amount: 26.00,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Nike",
        img: "./accountsIcon/Nike.png",
      },
      createdAt: new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toISOString(),
      date: "yesterday",
      time: "11:00"
    },

    {
      id: "tx_108",
      amount: 26.00,
      currency: "$",
      type: "topup",
      status: "success",
      receiver: {
        name: "Top up",
        img: "./accountsIcon/Topup.png",
      },
      createdAt: new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toISOString(),
      date: "yesterday",
      time: "09:00"
    },
  ],

  earlier: [
    {
      id: "tx_109",
      amount: 123.44,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "The Home Depot",
        img: "./accountsIcon/homedepot.png",
      },
      createdAt: "2025-01-05T14:32:00.000Z",
      date: "Dec 31",
      time: "05:00"
    },
    {
      id: "tx_104",
      amount: 50.22,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Amazon",
        img: "./accountsIcon/amazon.png",
      },
      createdAt: "2025-01-03T09:15:00.000Z",
      date: "Jan 1",
      time: "09:00"
    },
  ],
}
