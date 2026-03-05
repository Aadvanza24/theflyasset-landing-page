# THE FLY ASSET - Static React Landing Page

A professional, static React website for THE FLY ASSET - a proprietary trading and market research firm based in Kolkata, India.

## 🎯 Static Site Architecture

This is a **pure static React landing page** with:
- ✅ **No server-side rendering**
- ✅ **No backend API calls**
- ✅ **No database dependencies**
- ✅ **100% client-side rendering**
- ✅ **Deployable as static files**

## 📋 Pages

### Public Pages
1. **Home (/)** - Hero, markets, philosophy, process preview, insights preview
2. **About (/about)** - Company overview, mission, vision, values, leadership
3. **Capabilities (/capabilities)** - Services and capabilities showcase
4. **Process (/process)** - Trading process workflow
5. **Insights (/insights)** - Market research notes and articles
6. **Contact (/contact)** - Contact information and form (frontend-only)

### Legal Pages
7. **Disclaimer (/legal/disclaimer)**
8. **Risk Disclosure (/legal/risk-disclosure)**
9. **Privacy Policy (/legal/privacy-policy)**
10. **Terms of Use (/legal/terms)**

## 🚀 Build & Deploy

### Development
```bash
cd /app/frontend
yarn install
yarn start
```

### Production Build
```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `build/` directory with:
- Minified JavaScript bundles
- Optimized CSS
- Compressed images
- Static HTML files
- All assets ready for CDN deployment

### Deploy
The `build/` folder can be deployed to any static hosting service:
- **Netlify**: Drag & drop the `build` folder
- **Vercel**: Connect GitHub repo or upload build folder
- **AWS S3**: Upload to S3 bucket with static website hosting
- **GitHub Pages**: Push build folder to gh-pages branch
- **Cloudflare Pages**: Connect repo or upload build
- **Any CDN**: Simply upload the build folder contents

## 🎨 Design

- **Theme**: Clean, modern light theme
- **Colors**: 
  - Background: White (#ffffff)
  - Primary: Navy (#0a1628)
  - Accent: Gold (#D4AF37)
- **Typography**: Inter font family
- **Components**: Shadcn/ui components with Tailwind CSS
- **Images**: High-resolution professional trading/finance imagery

## 📦 Data Management

All content is stored as static data in:
- `/app/frontend/src/data/content.js` - All page content, markets, services, FAQs, insights

No CMS, no database - just JavaScript objects that can be easily edited.

## 🔧 Technology Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icons
- **Create React App + Craco** - Build tooling

## 📝 Contact Form

The contact form is **frontend-only**:
- Displays toast notification on submission
- No data is sent to any server
- Can be easily connected to services like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Your own API endpoint

## 🎯 SEO Optimization

For better SEO on static deployment:
1. Update `public/index.html` with proper meta tags
2. Add Open Graph tags for social sharing
3. Include structured data (JSON-LD) for rich snippets
4. Generate sitemap.xml
5. Add robots.txt

## 📄 Environment Variables

No backend environment variables needed! The build is completely static.

Optional (if connecting to external services in future):
- `REACT_APP_FORM_ENDPOINT` - For contact form integration
- `REACT_APP_GA_ID` - Google Analytics ID
- `REACT_APP_GTM_ID` - Google Tag Manager ID

## 🔒 Security

As a static site:
- No server-side vulnerabilities
- No database injection risks
- No API keys exposed (none used)
- Content served over HTTPS via hosting provider
- No authentication or user data handling

## 📱 Mobile Responsive

Fully responsive design tested on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## ⚡ Performance

Optimized for speed:
- Code splitting via React Router
- Image optimization
- Minified bundles
- Lazy loading ready
- CDN-friendly static assets

## 🎨 Customization

To update content:
1. Edit `/app/frontend/src/data/content.js`
2. Rebuild: `yarn build`
3. Deploy updated `build/` folder

To change styling:
1. Edit Tailwind classes in components
2. Update `/app/frontend/src/index.css` for theme colors
3. Rebuild and deploy

## 📊 Analytics Integration

To add Google Analytics:
```javascript
// Add to public/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Support

For any customization or deployment assistance, refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Shadcn/ui: https://ui.shadcn.com

---

**Built with ❤️ as a static React landing page**  
**No backend required • Fast • Secure • Easy to deploy**
