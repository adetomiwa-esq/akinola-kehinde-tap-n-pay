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
      date: "Today"
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
      date: "Today"
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
      date: "Today"
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
      date: "Today"
    },

    {
      id: "tx_102",
      amount: 220.12,
      currency: "$",
      type: "topup",
      status: "success",
      receiver: {
        name: "Top up",
        img: "./accountsIcon/Topup.png",
      },
      createdAt: new Date().toISOString(),
      date: "Today"
    },
  ],

  yesterday: [
    {
      id: "tx_102",
      amount: 430.00,
      currency: "$",
      type: "topup",
      status: "success",
      receiver: {
        name: "Top up",
        img: "Wallet Balance",
      },
      createdAt: new Date(
        Date.now() - 24 * 60 * 60 * 1000
      ).toISOString(),
    },
  ],

  earlier: [
    {
      id: "tx_103",
      amount: 13.00,
      currency: "$",
      type: "transfer",
      status: "success",
      receiver: {
        name: "Amazon",
        img: "Wallet Balance",
      },
      createdAt: "2025-01-05T14:32:00.000Z",
    },
    {
      id: "tx_104",
      amount: 10000,
      currency: "NGN",
      type: "transfer",
      status: "success",
      receiver: {
        name: "My Wallet",
        account: "Wallet Balance",
      },
      createdAt: "2025-01-03T09:15:00.000Z",
    },
  ],
}
