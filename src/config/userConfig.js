export const userConfig = {
  theme: {
    accentColor: "azure",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  personal: {
    name: "Tengku Muhamad Faisal",
    role: "Actor • Talent • Model",
    keywords: "Creative | Adaptive | Imaginative",
    tagline: "Bringing emotions to life through characters, presenting stories with emotional honesty and depth of expression in every role.",
    bio: "I am a person who has a working spirit and is deeply interested in the world of modeling and acting. As a person, I am cheerful and sociable. I have excellent experience in the service industry and acting creativity, making it very easy for me to adapt using the abilities I have. Whether I am analyzing a theatrical script, serving guests in hospitality, or coaching swimming, I bring dedication and a quick-learning attitude to every set and environment.",
    avatarUrl: new URL('../assets/aboutme.jpeg', import.meta.url).href,
  },
  skills: [
    "Theatrical Acting", "Improvisation Dialog", "Athletic Movements", "Ghost Make-up", "Teamwork", "Adaptability", "Communication Skills", "F&B Service", "Swimming Coach"
  ],
  media: [],
  gallery: {
    title: "Foto dan Video Profile",
    measurements: "Heights: 175 cm | Weight: 61 kg | Shirts: M to L | Pants: 32 | Shoes: 45",
    items: [
      {
        id: "foto1",
        type: "image",
        url: new URL('../assets/foto1.jpeg', import.meta.url).href,
        alt: "Foto 1"
      },
      {
        id: "foto2",
        type: "image",
        url: new URL('../assets/foto2.jpeg', import.meta.url).href,
        alt: "Foto 2"
      },
      {
        id: "foto3",
        type: "image",
        url: new URL('../assets/foto3.jpeg', import.meta.url).href,
        alt: "Foto 3"
      },
      {
        id: "foto4",
        type: "image",
        url: new URL('../assets/foto4.jpeg', import.meta.url).href,
        alt: "Foto 4"
      },
      {
        id: "foto5",
        type: "image",
        url: new URL('../assets/foto5.jpeg', import.meta.url).href,
        alt: "Foto 5"
      },
      {
        id: "foto6",
        type: "image",
        url: new URL('../assets/foto6.jpeg', import.meta.url).href,
        alt: "Foto 6"
      },
      {
        id: "foto7",
        type: "image",
        url: new URL('../assets/foto7.jpeg', import.meta.url).href,
        alt: "Foto 7"
      },
      {
        id: "foto8",
        type: "image",
        url: new URL('../assets/foto8.jpeg', import.meta.url).href,
        alt: "Foto 8"
      }
    ],
    videoUrl: new URL('../assets/video.mp4', import.meta.url).href,
    videoAlt: "Video"
  },
  projects: [
    {
      id: "proj-1",
      title: "Short Movie",
      description: "A profound exploration into dramatic characterization.",
      role: "Lead",
      category: "Acting",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
      link: "https://drive.google.com"
    },
    {
      id: "proj-2",
      title: "Brand Talent",
      description: "Representing high-end fashion and commercial brands.",
      role: "Model",
      category: "Modeling",
      thumbnail: new URL('../assets/model.jpg', import.meta.url).href,
      link: "https://drive.google.com"
    },
    {
      id: "proj-3",
      title: "Theatrical NPC",
      description: "Dynamic stage presence bringing worlds to life.",
      role: "Supporting Cast",
      category: "Theater",
      thumbnail: new URL('../assets/teater.png', import.meta.url).href,
      link: "https://drive.google.com"
    }
  ],
  contact: {
    email: "faisaltengku725@gmail.com",
    buttonText: "Let's Work Together",
    phone: "+62895351370454",
    location: "West Jakarta, Indonesia",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/sal_fai7?igsh=Mmg4ejRoMXFmODl5", iconName: "Instagram", iconUrl: new URL('../assets/instagram.png', import.meta.url).href },
      { name: "TikTok", url: "https://www.tiktok.com/@sal_fai7?_r=1&_t=ZS-966YPQ2c1XZ", iconName: "Music", iconUrl: new URL('../assets/tiktok.png', import.meta.url).href },
      { name: "WhatsApp", url: "https://wa.me/62895351370454",  iconName: "MessageCircle", iconUrl: new URL('../assets/whatsapp.png', import.meta.url).href }
    ],
  },
  footer: {
    copyright: "© 2026 Tengku Muhamad Faisal. All rights reserved.",
  }
};
