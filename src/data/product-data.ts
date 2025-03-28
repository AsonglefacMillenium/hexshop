export const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"
    ],
    description: "Premium over-ear headphones with 30-hour battery life and active noise cancellation. Perfect for travel.",
    specs: {
      "Brand": "SoundCore",
      "Battery": "30 hours",
      "Bluetooth": "5.0",
      "Weight": "265g",
      "Microphone": "Built-in"
    },
    category: "audio"
  },
  {
    id: 2,
    name: "4K Ultra HD Smart TV (55-inch)",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=600",
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600"
    ],
    description: "Crisp 4K HDR display with built-in Android TV and voice remote.",
    specs: {
      "Brand": "PixelVision",
      "Resolution": "3840x2160",
      "Ports": "4x HDMI, 2x USB",
      "OS": "Android TV",
      "Refresh Rate": "120Hz"
    },
    category: "tv"
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard (RGB)",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600"
    ],
    description: "Tactile Cherry MX switches with per-key RGB lighting. Anti-ghosting.",
    specs: {
      "Brand": "KeyFury",
      "Switches": "Cherry MX Red",
      "Backlight": "RGB",
      "Connectivity": "USB-C",
      "Weight": "1.2kg"
    },
    category: "accessories"
  },
  // ... 17 more products below ...
  {
    id: 4,
    name: "Bluetooth Portable Speaker",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600",
      "https://images.unsplash.com/photo-1558379850-823f103f866a?w=600"
    ],
    description: "Waterproof speaker with 12-hour battery life. Perfect for outdoor use.",
    specs: {
      "Brand": "AquaSound",
      "Battery": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "450g"
    },
    category: "audio"
  },
  {
    id: 5,
    name: "Fitness Smartwatch",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
    ],
    description: "Tracks heart rate, steps, and sleep. Works with iOS/Android.",
    specs: {
      "Brand": "FitTrack",
      "Battery": "7 days",
      "Compatibility": "iOS/Android",
      "Waterproof": "5ATM"
    },
    category: "wearables"
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1587033411391-9c06b0b86bc0?w=600",
      "https://images.unsplash.com/photo-1600324405944-9edf8a0b0b6e?w=600"
    ],
    description: "Qi-certified fast charging for smartphones and earbuds.",
    specs: {
      "Brand": "ChargeFlex",
      "Output": "10W",
      "Compatibility": "Qi-enabled devices"
    },
    category: "accessories"
  },
  {
    id: 7,
    name: "Gaming Laptop (RTX 3060)",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
      "https://images.unsplash.com/photo-1593642702821-8f68b6eb0121?w=600"
    ],
    description: "High-performance laptop with 144Hz display and RGB keyboard.",
    specs: {
      "Brand": "NitroTech",
      "CPU": "Intel i7-11800H",
      "GPU": "RTX 3060",
      "RAM": "16GB",
      "Storage": "1TB SSD"
    },
    category: "computers"
  },
  {
    id: 8,
    name: "Air Fryer (5.5L)",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1615872320146-026d3cd8e221?w=600",
      "https://images.unsplash.com/photo-1631056806857-31e51b98c9f4?w=600"
    ],
    description: "Oil-free cooking with 8 preset programs. Family-sized capacity.",
    specs: {
      "Brand": "KitchenPro",
      "Capacity": "5.5 liters",
      "Power": "1700W",
      "Presets": "8"
    },
    category: "home"
  },
  {
    id: 9,
    name: "Yoga Mat (Non-Slip)",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600"
    ],
    description: "Eco-friendly TPE material with carrying strap.",
    specs: {
      "Brand": "ZenLife",
      "Material": "TPE",
      "Thickness": "6mm",
      "Size": "183cm x 61cm"
    },
    category: "fitness"
  },
  {
    id: 10,
    name: "Electric Toothbrush",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
      "https://images.unsplash.com/photo-162179148a1d3d131a8d8a2a?w=600"
    ],
    description: "Sonic technology with 3 brushing modes and wireless charging.",
    specs: {
      "Brand": "OralGlow",
      "Modes": "3",
      "Battery": "30 days",
      "Head": "Replaceable"
    },
    category: "health"
  },
  // ... 10 more products ...
  {
    id: 11,
    name: "External SSD (1TB)",
    price: 109.99,
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=600"
    ],
    description: "USB 3.2 Gen 2 with read/write speeds up to 1050MB/s.",
    specs: {
      "Brand": "SwiftDisk",
      "Capacity": "1TB",
      "Interface": "USB-C",
      "Speed": "1050MB/s"
    },
    category: "computers"
  },
  {
    id: 12,
    name: "Smart Doorbell",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1558002038-1055897f027b?w=600",
      "https://images.unsplash.com/photo-1600267165477-3266d1c7a32b?w=600"
    ],
    description: "1080p HD video, two-way audio, and motion detection.",
    specs: {
      "Brand": "SafeHome",
      "Resolution": "1080p",
      "Connectivity": "Wi-Fi",
      "Power": "Battery/Wired"
    },
    category: "home"
  },
  {
    id: 13,
    name: "Dual Coffee Maker",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1608355024223-9d7e86b9a833?w=600",
      "https://images.unsplash.com/photo-1608355024223-9d7e86b9a833?w=600"
    ],
    description: "Brews coffee and espresso. Includes milk frother.",
    specs: {
      "Brand": "BrewMaster",
      "Type": "Drip/Espresso",
      "Capacity": "1.5L",
      "Features": "Programmable"
    },
    category: "home"
  },
  {
    id: 14,
    name: "Wireless Earbuds",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"
    ],
    description: "True wireless with 24-hour battery life and touch controls.",
    specs: {
      "Brand": "SoundBuds",
      "Battery": "6h (24h with case)",
      "Bluetooth": "5.2",
      "Waterproof": "IPX5"
    },
    category: "audio"
  },
  {
    id: 15,
    name: "Ergonomic Office Chair",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600"
    ],
    description: "Adjustable lumbar support and breathable mesh back.",
    specs: {
      "Brand": "ComfortPro",
      "Material": "Mesh",
      "Weight Capacity": "150kg",
      "Adjustments": "Height, tilt, armrests"
    },
    category: "furniture"
  },
  // ... 5 more products ...
  {
    id: 16,
    name: "Electric Kettle",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1606755456206-b25206bde3ba?w=600",
      "https://images.unsplash.com/photo-1606755456206-b25206bde3ba?w=600"
    ],
    description: "1.7L capacity with auto-shutoff and boil-dry protection.",
    specs: {
      "Brand": "QuickBrew",
      "Capacity": "1.7L",
      "Power": "1500W",
      "Material": "Stainless steel"
    },
    category: "home"
  },
  {
    id: 17,
    name: "Resistance Bands Set",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
    ],
    description: "5 bands with varying resistance levels (10-50 lbs).",
    specs: {
      "Brand": "FlexFit",
      "Levels": "5",
      "Material": "Latex-free",
      "Includes": "Door anchor, handles"
    },
    category: "fitness"
  },
  {
    id: 18,
    name: "UV Phone Sanitizer",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?w=600",
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?w=600"
    ],
    description: "Kills 99.9% of germs in 10 minutes using UV-C light.",
    specs: {
      "Brand": "PureBeam",
      "Sanitization Time": "10 mins",
      "Compatibility": "Fits phones up to 7 inches"
    },
    category: "health"
  },
  {
    id: 19,
    name: "Laptop Backpack",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    ],
    description: "Water-resistant with USB charging port and anti-theft pocket.",
    specs: {
      "Brand": "UrbanPack",
      "Capacity": "30L",
      "Compartments": "Laptop sleeve, organizer",
      "Material": "Polyester"
    },
    category: "accessories"
  },
  {
    id: 20,
    name: "Robot Vacuum",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600"
    ],
    description: "Self-charging with app control and smart mapping.",
    specs: {
      "Brand": "CleanBot",
      "Battery": "120 mins",
      "Features": "Wi-Fi, auto-dock",
      "Suction": "2000Pa"
    },
    category: "home"
  }
];
