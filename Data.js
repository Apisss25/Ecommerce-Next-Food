import { Truck, Clock, Shield, BadgeCheck, Users } from "lucide-react";
import { Package, Heart } from "lucide-react";
export const DataNavbar = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 4,
    title: "Reviews",
    url: "/Reviews",
  },
];

export const dataDelivery = [
  {
    id: 1,
    font: Truck,
    title: "Free Delivery",
    description: "on orders over $50+",
  },
  {
    id: 2,
    font: Clock,
    title: "Same Day",
    description: "order by 12pm",
  },
  {
    id: 3,
    font: Shield,
    title: "100% Fresh",
    description: "Quality Guaranteed",
  },
  {
    id: 4,
    font: BadgeCheck,
    title: "Expert Chefs",
    description: "Nutritionist Approved",
  },
];

export const dataProcces = [
  {
    id: 1,
    number: "01",
    icon: Package,
    title: "Choose Your Plan",
    description:
      "Select from a variety of meal plans that suit your taste and dietary needs.",
  },
  {
    id: 2,
    number: "02",
    icon: Heart,
    title: "We Cook Fresh",
    description: "Our expert chefs prepare your meals",
  },
  {
    id: 3,
    number: "03",
    icon: Package,
    title: "Delivered to You",
    description: "Fast and reliable delivery right to your doorstep",
  },
];

export const dataPopular = [
  {
    id: 1,
    image: "/FoodList1.jpeg",
    title: "Power Bowl",
    description:
      "A hearty bowl packed with protein, grains, and fresh vegetables for a balanced meal.",
    price: "$12.99",
    calories: "450 cal",
    protein: "25g",
    includes: [
      {
        id: 1,
        item: "Grilled Chicken",
      },
      {
        id: 2,
        item: "Quinoa",
      },
      {
        id: 3,
        item: "Avocado",
      },
      {
        id: 4,
        item: "cherry Tomatoes",
      },
    ],
  },
  {
    id: 2,
    image: "/FoodList2.jpg",
    title: "Salmon Salad",
    description:
      "A refreshing salad with salmon, tomatoes, and fresh herbs for a healthy and satisfying meal.",
    price: "$15.99",
    calories: "500 cal",
    protein: "30g",
    includes: [
      {
        id: 1,
        item: "Grilled Salmon",
      },
      {
        id: 2,
        item: "Romaine Lettuce",
      },
      {
        id: 3,
        item: "Tomatoes",
      },
      {
        id: 4,
        item: "Lemon Vinaigrette",
      },
    ],
  },
  {
    id: 3,
    image: "/FoodList3.jpeg",
    title: "Veggie Wrap",
    description:
      "A delicious wrap filled with fresh vegetables, cheese, and a whole grain tortilla for a satisfying meal.",
    price: "$10.99",
    calories: "400 cal",
    protein: "20g",
    includes: [
      {
        id: 1,
        item: "Whole Grain Tortilla",
      },
      {
        id: 2,
        item: "Romaine Lettuce",
      },
      {
        id: 3,
        item: "Tomatoes",
      },
      {
        id: 4,
        item: "Cheese",
      },
    ],
  },
];

export const dataPricing = {
  Daily: [
    {
      id: 1,
      title: "Starter",
      price: 15,
      period: "day",
      meals: 1,
      features: [
        "Choose any meal",
        "Free delivery $50+",
        "Cancel anytime",
        "Mobile app access",
      ],
    },
    {
      id: 2,
      title: "Premium",
      price: 25,
      period: "day",
      meals: 2,
      features: [
        "All Starter features",
        "Priority delivery",
        "Free smoothies",
        "Nutrition consultation",
        "Custom meal plans",
      ],
    },
    {
      id: 3,
      title: "Family",
      price: 45,
      period: "day",
      meals: 4,
      features: [
        "All Premium features",
        "Family portions",
        "Kid-friendly options",
        "Weekend specials",
        "Dedicated support",
      ],
    },
  ],

  Weekly: [
    {
      id: 1,
      title: "Starter",
      price: 70,
      period: "week",
      meals: 7,
      features: [
        "Choose any meal",
        "Free delivery $50+",
        "Cancel anytime",
        "Mobile app access",
      ],
    },
    {
      id: 2,
      title: "Premium",
      price: 120,
      period: "week",
      meals: 14,
      features: [
        "All Starter features",
        "Priority delivery",
        "Free smoothies",
        "Nutrition consultation",
        "Custom meal plans",
      ],
    },
    {
      id: 3,
      title: "Family",
      price: 210,
      period: "week",
      meals: 28,
      features: [
        "All Premium features",
        "Family portions",
        "Kid-friendly options",
        "Weekend specials",
        "Dedicated support",
      ],
    },
  ],

  Monthly: [
    {
      id: 1,
      title: "Starter",
      price: 250,
      period: "month",
      meals: 30,
      features: [
        "Choose any meal",
        "Free delivery $50+",
        "Cancel anytime",
        "Mobile app access",
      ],
    },
    {
      id: 2,
      title: "Premium",
      price: 430,
      period: "month",
      meals: 60,
      features: [
        "All Starter features",
        "Priority delivery",
        "Free smoothies",
        "Nutrition consultation",
        "Custom meal plans",
      ],
    },
    {
      id: 3,
      title: "Family",
      price: 750,
      period: "month",
      meals: 120,
      features: [
        "All Premium features",
        "Family portions",
        "Kid-friendly options",
        "Weekend specials",
        "Dedicated support",
      ],
    },
  ],
};


export const testimoniData = [
  {
    id: 1,
    stars: 5,
    description:
      '"VENTO BOX has been a game-changer for my health journey. The meals are delicious, perfectly portioned, and I\'ve lost 15 pounds in 3 months!"',
    icon: Users,
    name: "Sarah Johnson",
    department: "Busy Professional",
  },
  {
    id: 2,
    stars: 5,
    description:
      '"As someone who tracks macros religiously, VENTO BOX makes meal prep effortless. The nutrition info is accurate and the taste is incredible."',
    icon: Users,
    name: "Michael Chen",
    department: "Fitness Enthusiast",
  },
  {
    id: 3,
    stars: 5,
    description:
      '"Finally, healthy meals my whole family enjoys! The kid-friendly options are a lifesaver. No more stressful dinner planning."',
    icon: Users,
    name: "Emily Rodriguez",
    department: "Working Mom",
  },
];
