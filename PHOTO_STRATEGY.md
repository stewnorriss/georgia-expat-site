# Photo Strategy for Georgia Expat Site

## 🎯 Goal
Replace Unsplash placeholder images with authentic Tbilisi photos to increase credibility and user trust.

---

## 📊 Current Situation

### Where Photos Are Used:
1. **Restaurant cards** - Currently using Unsplash food photos
2. **Neighborhood cards** - Generic city/building photos
3. **Hero sections** - Background patterns (good, keep these)
4. **Blog posts** - Placeholder images
5. **Activity pages** - Generic activity photos

### Total Photos Needed: ~100-150 images

---

## 🎨 Photo Requirements

### Technical Specs:
- **Format:** WebP (for performance) with JPG fallback
- **Dimensions:** 
  - Restaurant cards: 800x400px
  - Neighborhood headers: 1200x600px
  - Blog headers: 1200x400px
  - Thumbnails: 400x300px
- **File size:** <200KB per image (optimized)
- **Quality:** High resolution, well-lit, professional-looking

### Content Requirements:
- **Authentic:** Real Tbilisi locations
- **Recent:** Taken in 2024-2025
- **Diverse:** Different neighborhoods, seasons, times of day
- **Professional:** Good composition, lighting, focus
- **Rights:** Must have permission to use

---

## 📸 Photo Sources (Ranked by Priority)

### 1. **Your Own Photos** ⭐⭐⭐ (BEST)
**Pros:**
- Free, no licensing issues
- Authentic and current
- You control the content
- Can retake if needed

**Action Plan:**
- Take photos during your move to Tbilisi in 2026
- Document your journey (great for blog content too!)
- Focus on: restaurants you visit, your neighborhood, daily life
- Use smartphone (modern phones are excellent)

**What to Photograph:**
- [ ] 30 restaurants (exterior + 1-2 dishes)
- [ ] 10 neighborhoods (street views, landmarks)
- [ ] Public transport (metro, marshrutkas, buses)
- [ ] Markets and shopping areas
- [ ] Parks and public spaces
- [ ] Your apartment/housing search
- [ ] Daily life moments

### 2. **User-Generated Content** ⭐⭐⭐
**Pros:**
- Authentic expat perspectives
- Free with permission
- Builds community
- Ongoing content source

**Action Plan:**
- Add "Share Your Photo" feature to site
- Create Instagram hashtag: #TbilisiExpatLife
- Ask expats in Facebook groups for photo contributions
- Offer credit/link in exchange for photos
- Create photo submission form

**Implementation:**
```typescript
// Add to each restaurant/neighborhood page:
<div className="bg-blue-50 p-4 rounded-lg">
  <p className="text-sm">Have a photo of this place?</p>
  <button>Share Your Photo</button>
</div>
```

### 3. **Creative Commons / Free Stock** ⭐⭐
**Pros:**
- Available now
- Free to use
- Professional quality

**Cons:**
- May not be Tbilisi-specific
- Others may use same photos
- Less authentic

**Best Sources:**
- **Unsplash** - Already using, but search "Tbilisi" specifically
- **Pexels** - Good for Tbilisi photos
- **Pixabay** - Some Georgia content
- **Wikimedia Commons** - Tbilisi landmarks
- **Flickr Creative Commons** - Search "Tbilisi Georgia"

**Search Terms:**
- "Tbilisi Georgia"
- "Tbilisi restaurant"
- "Tbilisi street"
- "Georgian food"
- "Khachapuri"
- "Tbilisi old town"
- "Vake Tbilisi"
- "Rustaveli Avenue"

### 4. **Purchase Stock Photos** ⭐
**Pros:**
- High quality
- Immediate availability
- Professional

**Cons:**
- Costs money ($10-50 per photo)
- May not be authentic
- Others can use same photos

**Sources:**
- **Shutterstock** - Good Tbilisi collection
- **Getty Images** - Professional quality
- **Adobe Stock** - Integrated with design tools
- **iStock** - Mid-range pricing

**Budget:** $500-1000 for 50-100 photos

### 5. **Hire Local Photographer** ⭐⭐
**Pros:**
- Custom photos exactly what you need
- Exclusive content
- Professional quality
- Can direct the shots

**Cons:**
- Expensive ($500-2000)
- Need to be in Tbilisi
- Time-consuming

**When to Consider:**
- After you move to Tbilisi
- When site is generating revenue
- For major redesign/relaunch

---

## 🚀 Implementation Plan

### Phase 1: Immediate (This Week)
**Use Better Unsplash Photos**
- Search Unsplash specifically for "Tbilisi"
- Replace generic food photos with Georgian food
- Use actual Tbilisi landmark photos
- Add proper alt text with location names

**Action Items:**
```bash
# Search Unsplash for:
- "Tbilisi restaurant"
- "Georgian khachapuri"
- "Tbilisi old town"
- "Vake park Tbilisi"
- "Rustaveli avenue"
- "Tbilisi metro"
```

### Phase 2: Short-term (Next Month)
**Collect User Photos**
- Add photo submission form
- Post in expat Facebook groups
- Create Instagram hashtag
- Offer credit/links for contributors

**Implementation:**
```typescript
// Create photo submission component
<PhotoSubmission 
  location="Restaurant Name"
  type="restaurant"
  onSubmit={handlePhotoSubmit}
/>
```

### Phase 3: Medium-term (When in Tbilisi)
**Take Your Own Photos**
- Document your move
- Visit all 30 restaurants
- Photograph all 10 neighborhoods
- Capture daily life
- Create photo library

**Equipment Needed:**
- Smartphone (iPhone/Android with good camera)
- Optional: Portable phone tripod ($20)
- Photo editing app (Snapseed, VSCO - free)

### Phase 4: Long-term (After Launch)
**Professional Photography**
- Hire local photographer for key locations
- Create video content
- 360° virtual tours
- Drone footage of Tbilisi

---

## 📝 Photo Organization

### Folder Structure:
```
public/
  images/
    restaurants/
      shavi-lomi-exterior.webp
      shavi-lomi-khachapuri.webp
      barbarestan-interior.webp
    neighborhoods/
      vake-street-view.webp
      vake-park.webp
      old-town-panorama.webp
    activities/
      metro-station.webp
      marshrutka.webp
    blog/
      moving-day-1.webp
      apartment-hunting.webp
```

### Naming Convention:
```
[location]-[subject]-[number].webp

Examples:
- shavi-lomi-exterior-1.webp
- vake-street-view-2.webp
- tbilisi-metro-station-1.webp
```

### Metadata:
```typescript
// Store photo metadata
{
  filename: "shavi-lomi-exterior-1.webp",
  alt: "Shavi Lomi restaurant exterior in Vake, Tbilisi",
  credit: "Photo by John Doe",
  date: "2025-11-11",
  location: "Vake, Tbilisi",
  tags: ["restaurant", "shavi-lomi", "vake"]
}
```

---

## 🎨 Photo Guidelines

### Do's:
✅ Use natural lighting when possible
✅ Show real people (with permission)
✅ Capture authentic moments
✅ Include context (street signs, landmarks)
✅ Shoot in landscape for web
✅ Take multiple angles
✅ Show seasonal variations
✅ Include price tags/menus (helpful!)

### Don'ts:
❌ Use obviously staged photos
❌ Over-edit or use heavy filters
❌ Include people without permission
❌ Use photos from other cities
❌ Steal photos from Google Images
❌ Use low-resolution images
❌ Forget to optimize file size

---

## 🔧 Technical Implementation

### Image Optimization:
```typescript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/images/restaurants/shavi-lomi-exterior.webp"
  alt="Shavi Lomi restaurant exterior in Vake, Tbilisi"
  width={800}
  height={400}
  loading="lazy"
  quality={85}
/>
```

### Responsive Images:
```typescript
// Provide multiple sizes
<Image
  src="/images/restaurants/shavi-lomi.webp"
  srcSet="
    /images/restaurants/shavi-lomi-400.webp 400w,
    /images/restaurants/shavi-lomi-800.webp 800w,
    /images/restaurants/shavi-lomi-1200.webp 1200w
  "
  sizes="(max-width: 768px) 400px, 800px"
  alt="Shavi Lomi restaurant"
/>
```

### Lazy Loading:
```typescript
// Load images as user scrolls
<Image
  src="/images/restaurants/shavi-lomi.webp"
  loading="lazy"
  alt="Shavi Lomi restaurant"
/>
```

---

## 📊 Success Metrics

Track these to measure impact:
- **Page load time** (should improve with optimized images)
- **Bounce rate** (should decrease with authentic photos)
- **Time on page** (should increase)
- **User trust** (survey/feedback)
- **Social shares** (authentic photos more shareable)

---

## 💰 Budget Options

### Free Option:
- Use your own photos when you move
- Collect user-generated content
- Use Creative Commons photos
- **Cost: $0**

### Low Budget ($100-300):
- Purchase 20-30 key stock photos
- Use free sources for rest
- Optimize with free tools
- **Cost: $100-300**

### Medium Budget ($500-1000):
- Purchase 50-100 stock photos
- Hire photographer for 1 day
- Professional editing
- **Cost: $500-1000**

### High Budget ($2000+):
- Hire photographer for multiple days
- Video content
- 360° tours
- Drone footage
- **Cost: $2000-5000**

---

## 🎯 Priority Photos (Get These First)

### Top 10 Most Important:
1. **Shavi Lomi** - Most popular restaurant
2. **Vake neighborhood** - Most popular area
3. **Tbilisi Metro** - Essential transport
4. **Khachapuri** - Iconic Georgian food
5. **Old Town street** - Tourist attraction
6. **Apartment interior** - Housing example
7. **Marshrutka** - Local transport
8. **Vake Park** - Popular green space
9. **Rustaveli Avenue** - Main street
10. **Grocery store** - Daily life

---

## 📅 Timeline

### Week 1: Improve Current Photos
- Replace with better Unsplash photos
- Add proper alt text
- Optimize file sizes

### Month 1: Set Up Collection System
- Add photo submission form
- Post in Facebook groups
- Create hashtag campaign

### Month 2-3: Collect User Photos
- Review submissions
- Get permissions
- Add to site

### When in Tbilisi: Take Your Own
- Document everything
- Build photo library
- Replace all placeholders

---

## 🎬 Next Steps

1. **This week:** Search Unsplash for "Tbilisi" specific photos
2. **Add to site:** Photo submission form
3. **Post in groups:** Request photo contributions
4. **When moving:** Document your journey
5. **Long-term:** Hire photographer for professional shots

---

*Created: November 11, 2025*
*Status: Ready to Implement*
