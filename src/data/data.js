export const data = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: 29.99,
    category: "Skincare",
    description:
      "A lightweight serum that deeply hydrates the skin and improves elasticity for a radiant glow.",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
  },
  {
    id: 2,
    name: "Matte Velvet Lipstick",
    price: 19.99,
    category: "Makeup",
    description:
      "Long-lasting matte lipstick with a smooth finish and intense color payoff.",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
  },
  {
    id: 3,
    name: "Keratin Repair Shampoo",
    price: 24.99,
    category: "Haircare",
    description:
      "Strengthens and matte restores damaged hair while adding shine and softness.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
  },
  {
    id: 4,
    name: "Shea Butter Body Lotion",
    price: 17.99,
    category: "Body Care",
    description:
      "Rich body lotion infused with shea butter to nourish and soften dry skin.",
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58"
  },
  {
    id: 5,
    name: "Waterproof Mascara",
    price: 15.99,
    category: "Makeup",
    description:
      "Smudge-proof waterproof mascara that lengthens and volumizes lashes.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
  },
  {
    id: 6,
    name: "Vitamin C Brightening Serum",
    price: 34.99,
    category: "Skincare",
    description:
      "Brightens skin tone and reduces dark spots with powerful antioxidant protection.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a"
  }
];

export function getProductById(id) {
  return data.find((product) => product.id === parseInt(id));
}
