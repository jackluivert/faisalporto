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
    title: "Koleksi Foto & Video",
    items: [
      {
        id: "portrait-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
        alt: "Portrait 1"
      },
      {
        id: "portrait-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        alt: "Portrait 2"
      },
      {
        id: "portrait-3",
        type: "image",
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
        alt: "Portrait 3"
      },
      {
        id: "portrait-4",
        type: "image",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        alt: "Portrait 4"
      },
      {
        id: "landscape-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
        alt: "Landscape 1"
      },
      {
        id: "landscape-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&h=400&fit=crop",
        alt: "Landscape 2"
      },
      {
        id: "landscape-3",
        type: "image",
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
        alt: "Landscape 3"
      },
      {
        id: "landscape-4",
        type: "image",
        url: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&h=400&fit=crop",
        alt: "Landscape 4"
      }
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
    videoAlt: "Profile Video"
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
      thumbnail: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=400&h=300&fit=crop",
      link: "https://drive.google.com"
    }
  ],
  contact: {
    email: "faisaltengku725@gmail.com",
    buttonText: "Let's Work Together",
    phone: "+62895351370454",
    location: "West Jakarta, Indonesia",
    socials: [
      { name: "Instagram", url: "https://instagram.com", iconName: "Instagram" },
      { name: "WhatsApp", url: "https://wa.me/62895351370454", iconName: "MessageCircle" }
    ],
  },
  footer: {
    copyright: "© 2026 Tengku Muhamad Faisal. All rights reserved.",
  }
};
