export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Ethiopian Yirgacheffe',
    tagline: 'Floral & citrus notes',
    price: 24.99,
    image: '/images/ethiopian_yirgacheffe.png',
    category: 'Single Origin',
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Colombian Supremo',
    tagline: 'Rich caramel finish',
    price: 21.99,
    image: '/images/colombian_supremo.png',
    category: 'Single Origin',
    rating: 4.7,
  },
  {
    id: 'p3',
    name: 'Midnight Espresso',
    tagline: 'Bold & intense blend',
    price: 27.99,
    image: '/images/midnight_espresso.png',
    category: 'Blend',
    rating: 4.9,
  },
  {
    id: 'p4',
    name: 'Japanese Cold Brew',
    tagline: 'Smooth & refreshing',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85',
    category: 'Specialty',
    rating: 4.6,
  },
  {
    id: 'p5',
    name: 'Guatemala Antigua',
    tagline: 'Chocolate & spice',
    price: 23.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85',
    category: 'Single Origin',
    rating: 4.7,
  },
  {
    id: 'p6',
    name: 'Decaf Harmony',
    tagline: 'Full flavor, no caffeine',
    price: 20.99,
    image: '/images/decaf_harmony.png',
    category: 'Specialty',
    rating: 4.5,
  },
];

export const signatureDrinks: Drink[] = [
  {
    id: 'd1',
    name: 'Velvet Latte',
    description: 'Espresso meets silky oat milk brushed with honey lavender foam.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85',
    category: 'Lattes',
  },
  {
    id: 'd2',
    name: 'Smoked Caramel Macchiato',
    description: 'Layers of vanilla, smoked caramel drizzle, and bold espresso over cold milk.',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=85',
    category: 'Macchiatos',
  },
  {
    id: 'd3',
    name: 'Golden Turmeric Brew',
    description: 'A vibrant anti-inflammatory latte with turmeric, ginger, and a touch of black pepper.',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=85',
    category: 'Specialty',
  },
  {
    id: 'd4',
    name: 'Iced Mocha Dream',
    description: 'Rich chocolate ganache meets chilled espresso crowned with whipped cream.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=85',
    category: 'Iced',
  },
  {
    id: 'd5',
    name: 'Rose Cardamom Cappuccino',
    description: 'Floral rose syrup and warm cardamom atop a velvety cappuccino.',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85',
    category: 'Lattes',
  },
  {
    id: 'd6',
    name: 'Nitro Cold Brew',
    description: 'Slow-steeped for 20 hours, infused with nitrogen for a creamy, cascading finish.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=85',
    category: 'Iced',
  },
  {
    id: 'd7',
    name: 'Matcha Mint Latte',
    description: 'Ceremonial matcha whisked with fresh mint and steamed oat milk.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=85',
    category: 'Specialty',
  },
  {
    id: 'd8',
    name: 'Hazelnut Affogato',
    description: 'A scoop of vanilla gelato drowned in a double shot of hazelnut-infused espresso.',
    price: 8.49,
    image: '/images/hazelnut_affogato.png',
    category: 'Macchiatos',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Aria Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=85',
    text: 'The Ethiopian Yirgacheffe is hands down the best coffee I have ever brewed at home. The floral notes are unreal.',
    rating: 5,
  },
  {
    id: 'r2',
    name: 'Marcus Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=85',
    text: 'The Cappuccino Maker has completely changed my morning routine. I actually look forward to waking up now.',
    rating: 5,
  },
  {
    id: 'r3',
    name: 'Sophie Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=85',
    text: 'Their Smoked Caramel Macchiato is pure art. The balance of smoky and sweet is perfection.',
    rating: 4,
  },
  {
    id: 'r4',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=85',
    text: 'I tried the Golden Turmeric Brew on a whim and now it is my go-to afternoon pick-me-up. Incredible!',
    rating: 5,
  },
  {
    id: 'r5',
    name: 'James Park',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=85',
    text: 'The cold brew is dangerously smooth. I went through a whole batch in two days. Highly recommend.',
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=85', alt: 'Pour over coffee', width: 800, height: 1000 },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85', alt: 'Coffee and croissant', width: 800, height: 600 },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=85', alt: 'Coffee beans', width: 800, height: 800 },
  { id: 'g4', src: '/images/midnight_espresso.png', alt: 'Espresso shot', width: 800, height: 900 },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85', alt: 'Latte art', width: 800, height: 700 },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=85', alt: 'Iced coffee', width: 800, height: 1000 },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85', alt: 'Coffee shop interior', width: 800, height: 600 },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1504639843385-02bfc4e6d6a4?w=800&q=85', alt: 'Coffee preparation', width: 800, height: 850 },
];

export const features: Feature[] = [
  {
    id: 'f1',
    icon: 'Bean',
    title: 'Premium Sourcing',
    description: 'We travel the globe to find the finest single-origin beans, directly traded from farmers who share our passion.',
  },
  {
    id: 'f2',
    icon: 'Award',
    title: 'Expert Roasting',
    description: 'Every batch is roasted to order in small quantities by our master roaster with over 15 years of experience.',
  },
  {
    id: 'f3',
    icon: 'Leaf',
    title: 'Sustainable Practices',
    description: 'We are committed to eco-friendly packaging, carbon-neutral shipping, and supporting reforestation initiatives.',
  },
  {
    id: 'f4',
    icon: 'Sparkles',
    title: 'Brew Perfection',
    description: 'From pour-over to espresso, we provide detailed brew guides so you can unlock the full potential of every bean.',
  },
  {
    id: 'f5',
    icon: 'Heart',
    title: 'Community First',
    description: 'We partner with local roasteries, host cupping events, and give back 5% of profits to coffee-growing communities.',
  },
  {
    id: 'f6',
    icon: 'Clock',
    title: 'Freshness Guaranteed',
    description: 'We never roast more than 14 days ahead. Your coffee arrives at peak freshness, every single time.',
  },
];

export const stats = [
  { label: 'Countries Sourced', value: 18, suffix: '+' },
  { label: 'Happy Customers', value: 50, suffix: 'K+' },
  { label: 'Years Roasting', value: 15, suffix: '+' },
  { label: 'Awards Won', value: 24, suffix: '' },
];

export const openingHours = [
  { day: 'Monday — Friday', hours: '7:00 AM — 9:00 PM' },
  { day: 'Saturday', hours: '8:00 AM — 10:00 PM' },
  { day: 'Sunday', hours: '9:00 AM — 6:00 PM' },
];
