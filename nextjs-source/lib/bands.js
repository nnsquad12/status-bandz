// Drop 001 — the launch set. Colors carry the meaning; the brand stays black & white.
export const DROP_DATE = "2027-01-01T18:00:00-06:00"; // configure your launch here

export const bands = [
  {
    id: "single",
    name: "Single",
    color: "#ffffff",
    border: true,
    meaning: "Available. The white band. Worn alone, it says everything.",
    price: 30,
    stock: "available",
  },
  {
    id: "taken",
    name: "Taken",
    color: "#000000",
    meaning: "Off the market. The black band. Quiet, final, understood.",
    price: 30,
    stock: "available",
  },
  {
    id: "complicated",
    name: "Complicated",
    color: "#9ca3af",
    meaning: "In between. The grey band. For everything that isn't a yes or a no.",
    price: 30,
    stock: "soldout",
  },
];

export const verifiedTiers = [
  {
    id: "millionaire",
    name: "Millionaire",
    color: "#c9a227",
    meaning:
      "Verified seven figures. Issued only after third-party proof of net worth. Application only.",
    price: null,
    stock: "application",
  },
];

// Placeholder registry for the Verify page. Replace with a real API/database.
export const registry = {
  "SB-0001-A": {
    tier: "Millionaire",
    status: "Verified",
    issued: "2027-01-01",
    owner: "N. Neumann",
  },
  "SB-0002-T": {
    tier: "Taken",
    status: "Registered",
    issued: "2027-01-02",
    owner: "Private",
  },
  "SB-0003-S": {
    tier: "Single",
    status: "Registered",
    issued: "2027-01-02",
    owner: "Private",
  },
};
