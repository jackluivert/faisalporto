# Actor Portfolio UI/UX Guideline

**Skill Purpose:** Create a professional, engaging, and creative portfolio website for actors that showcases talent, builds credibility, and facilitates industry connections.

**Outcome:** A portfolio that balances professionalism with personality, making casting directors, agents, and producers confident in the actor's marketability and range.

---

## Core Sections & Purpose

Every actor portfolio should include these sections in a clear visual hierarchy:

### 1. **Hero / Introduction** (Above Fold)
- **Purpose:** Immediate, powerful first impression
- **Elements:**
  - Professional headshot (8x10 or crop-optimized for web)
  - Name prominently displayed
  - Current agent/manager info (if applicable) or call-to-action
  - Brief tagline (e.g., "Dramatic & Comedy | Theater & Film")
- **Creative Twist:** Use soft overlay on headshot, subtle animation on scroll, or complementary gradient background

### 2. **Reel / Media Showcase**
- **Purpose:** Demonstrate acting ability through video clips
- **Elements:**
  - Embedded demo reel (3–5 min max, autoplay with sound off)
  - Scene clips from significant roles (15–30 sec each)
  - Behind-the-scenes or interview clips (optional, humanizes talent)
- **Creative Twist:** Grid or bento layout for clips; hover effects that reveal role/project name

### 3. **About / Bio**
- **Purpose:** Build personal connection and professional credibility
- **Elements:**
  - 2–3 paragraph bio (highlight training, notable roles, special skills)
  - Acting background (years active, awards/nominations)
  - Special skills (languages, accents, instruments, sports, stunts)
  - Training credentials (acting coaches, conservatory, workshops)
- **Creative Twist:** Timeline visualization or infographic of career milestones

### 4. **Gallery / Cast Shots**
- **Purpose:** Show range, versatility, and professional appearance across different looks
- **Elements:**
  - 6–12 high-quality headshots or cast photos
  - Organized by category (headshot, character, period, casual)
  - Clean, minimal borders/spacing
- **Creative Twist:** Filter buttons or light gallery modal; subtle parallax on scroll

### 5. **Credits / Filmography**
- **Purpose:** Establish credibility and demonstrate breadth of experience
- **Elements:**
  - Sortable/filterable list: Film | TV | Theater | Commercial
  - Role name, project title, year, production company
  - Optional: IMDb link, links to clips/trailers
- **Creative Twist:** Card-based layout with hover animations; timeline view for chronological browsing

### 6. **Skills & Competencies**
- **Purpose:** Quick reference for what actor can deliver
- **Elements:**
  - Tags or badges: Age range, type (dramatic, comedy, action, etc.), languages, certifications
  - Accents/dialects with proficiency level
  - Technical skills (on-set experience, green screen, stunt work)
- **Creative Twist:** Visual skill tags with icons; progress indicators for fluency

### 7. **Contact / Inquiries** (Footer or Sticky)
- **Purpose:** Make it easy for casting directors to reach out
- **Elements:**
  - Email (agent email if represented, personal if not)
  - Phone (optional, discretionary)
  - Social links (Instagram, IMDb, IMBb, TikTok, YouTube)
  - Contact form (optional, with name/project/message fields)
- **Creative Twist:** CTA button with icon; copy-to-clipboard for email

---

## Visual & Interaction Design Principles

### **Color & Typography**
- **Palette:** Neutral primary (white, light gray, dark gray) + 1 accent color (reflects actor's brand/vibe)
- **Typography:** 1 serif (elegant, timeless) + 1 sans-serif (clarity, modern)
- **Contrast:** Ensure WCAG AA compliance for readability

### **Layout & Spacing**
- **Grid:** 12-column responsive grid; breaks cleanly to 1 column on mobile
- **Whitespace:** Generous padding/margins around sections; breathing room around images
- **Hierarchy:** Larger headshots/video > secondary media > text content

### **Imagery**
- **Headshots:** Professional, well-lit, consistent in style across gallery
- **Aspect Ratios:** Favor 1:1 (square) or 4:5 (portrait) for gallery; 16:9 for video
- **Quality:** High-res (300+ DPI equivalent); avoid pixelation on large screens
- **Diversity:** Show different looks, moods, ages (age range flexibility)

### **Interactivity**
- **Smooth Animations:** Fade-ins, subtle scale, gentle motion on scroll (Framer Motion)
- **Hover States:** Subtle color shift, brightness change, overlay text reveal
- **Video Behavior:** Muted autoplay; user-controlled unmute/fullscreen
- **Mobile:** Touch-friendly (no hover required), responsive video players

### **Performance**
- **Image Optimization:** Lazy load gallery/media; WebP format with fallbacks
- **Video Optimization:** 1–2 MB max per clip; adaptive bitrate streaming recommended
- **Accessibility:** Alt text for images, captions for video, semantic HTML, keyboard navigation

---

## Creative Enhancement Techniques

### **Visual Storytelling**
- Use full-width image or video sections to break up text
- Add subtle background patterns (grain, texture) that reflect actor's style
- Implement parallax scrolling on hero image for depth

### **Micro-interactions**
- Smooth scroll to sections (navigation)
- Staggered animations for gallery items (fade/scale in sequence)
- Animated counter for years of experience or number of roles
- Hover cards that expand to show additional role details

### **Personalization**
- Color theme switcher (dark mode / accent color choice)
- Quick stats widget (e.g., "15 years | 50+ credits | 8 languages")
- Social proof: testimonials/quotes from directors, agents, or colleagues
- "In the News" or "Recent Bookings" section (if applicable)

### **Navigation**
- Sticky header with links to each section
- Smooth scroll behavior
- Progress indicator (dots or bar) showing scroll position
- Mobile-friendly hamburger menu with smooth transitions

---

## Quality Checklist

### **Content Quality**
- [ ] Professional headshot(s) that represent current appearance
- [ ] Demo reel polished and under 5 minutes
- [ ] Bio is compelling, error-free, and shows unique personality
- [ ] Credits are accurate, verifiable, and linked where possible
- [ ] All text is proofread for grammar and spelling

### **Visual Design**
- [ ] Color scheme is cohesive and reflects actor's brand
- [ ] Typography is readable at all screen sizes
- [ ] Images are high-quality and consistently styled
- [ ] Layout balances imagery and text effectively
- [ ] Design is professional yet reflects personality

### **Functionality**
- [ ] All links work (internal navigation, external URLs)
- [ ] Videos autoplay with sound off; user can unmute
- [ ] Contact form (if present) submits successfully
- [ ] Mobile responsive: tested on phone, tablet, desktop
- [ ] Page loads in <3 seconds (Core Web Vitals passing)

### **Accessibility**
- [ ] Alt text on all images
- [ ] Video captions or transcripts
- [ ] Sufficient color contrast (WCAG AA minimum)
- [ ] Keyboard navigation works throughout
- [ ] Screen reader friendly (semantic HTML, ARIA labels where needed)

### **Industry Standards**
- [ ] Portfolio is mobile-responsive (40%+ of traffic is mobile)
- [ ] Contact information is clearly visible
- [ ] Social links are functional and current
- [ ] IMDb/IMDB profile is linked
- [ ] Mobile-first design (optimized for small screens first)

---

## Decision Tree: What to Prioritize

**If starting from scratch:**
1. Hero + headshot
2. Demo reel
3. Bio + training
4. Credits
5. Contact
6. Gallery & skills (enhance afterward)

**If redesigning existing portfolio:**
1. Audit current sections for outdated/incomplete content
2. Strengthen hero/reel (highest engagement areas)
3. Refresh gallery with current headshots
4. Optimize for mobile responsiveness
5. Add micro-interactions and smooth animations

**If emphasizing specific niche:**
- Theater actor → emphasize stage credits, training, character range
- Commercial actor → prioritize variety in looks, quick-loading gallery
- Film/TV actor → lead with reel, include production company logos
- VoiceOver actor → add audio demo clips, remove headshot emphasis, add equipment specs

---

## Example Prompt Uses

- *"Build the hero section for an actor portfolio with headshot, name, and tagline."*
- *"Create a filterable gallery of cast shots that shows versatility across age/type."*
- *"Design an interactive timeline of credits with production logos and role descriptions."*
- *"Add animated micro-interactions to make the portfolio feel more engaging and modern."*
- *"Implement a dark mode toggle that respects the actor's brand color palette."*

---

## Next Skills to Create

- **Script Analysis for Actors:** Framework for breaking down scripts and identifying character motivations
- **Audition Preparation Checklist:** Step-by-step guide for preparing for different audition formats
- **Networking & Industry Connections:** Best practices for leveraging portfolio and social media for casting opportunities
- **Content Strategy for Actors:** Guidelines for creating behind-the-scenes, training, or character-study content
