# Quick Guide: Get Real Tbilisi Photos Now

## 🎯 Option 1: Better Unsplash Photos (30 minutes)

### Step 1: Search Unsplash for Tbilisi
Go to https://unsplash.com and search for:

**For Restaurants:**
- "Tbilisi restaurant"
- "Georgian khachapuri"
- "Georgian khinkali"
- "Tbilisi food"
- "Georgian wine"
- "Tbilisi cafe"

**For Neighborhoods:**
- "Tbilisi street"
- "Tbilisi old town"
- "Tbilisi architecture"
- "Vake Tbilisi"
- "Rustaveli avenue"
- "Tbilisi buildings"

### Step 2: Get the Image URLs
1. Click on a photo you like
2. Click "Download" (free, no account needed)
3. Right-click the image → "Copy image address"
4. Use that URL in your code

### Step 3: Update Your Code
Replace the generic food images with Tbilisi-specific ones:

```typescript
const imagePool = [
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=400&fit=crop', // Tbilisi old town
  'https://images.unsplash.com/photo-1565022092-e9c8e8c8e8c8?w=800&h=400&fit=crop', // Georgian food
  // ... add more Tbilisi-specific URLs
]
```

---

## 🎯 Option 2: Use Pexels (Free, Better Tbilisi Content)

Pexels has good Tbilisi photos: https://www.pexels.com

**Search for:**
- "Tbilisi Georgia"
- "Georgian food"
- "Tbilisi city"

**How to use:**
1. Search for image
2. Click "Download" → "Free Download"
3. Right-click → "Copy image address"
4. Use URL in your code

---

## 🎯 Option 3: Download & Host Your Own (1 hour)

### Why Host Your Own?
- Faster loading (your server)
- More control
- Better SEO
- No external dependencies

### How to Do It:

#### Step 1: Download Photos
From Unsplash/Pexels, download 30 photos to your computer

#### Step 2: Optimize Images
Use this free tool: https://squoosh.app
- Upload image
- Choose WebP format
- Quality: 80-85%
- Resize to 800x400px
- Download

#### Step 3: Add to Your Project
```bash
# Create images folder
mkdir -p public/images/restaurants
mkdir -p public/images/neighborhoods

# Move your optimized images there
# Name them: restaurant-1.webp, restaurant-2.webp, etc.
```

#### Step 4: Update Your Code
```typescript
const getRestaurantImage = (name: string, index: number) => {
  return `/images/restaurants/restaurant-${index + 1}.webp`
}
```

---

## 🎯 Option 4: Ask Expats for Photos (Free, Most Authentic)

### Post in Facebook Groups:
"Hey Tbilisi expats! I'm building a guide for newcomers at [your-site.com]. 
Would anyone be willing to share photos of their favorite restaurants/neighborhoods? 
I'll give you credit and a link back. DM me!"

**Groups to Post In:**
- Expats in Tbilisi
- Tbilisi Expat Community
- Digital Nomads Georgia

### What to Ask For:
- Restaurant exteriors
- Food dishes
- Neighborhood streets
- Daily life moments

### How to Credit:
```typescript
<div className="text-xs text-gray-500">
  Photo by John Doe (@johndoe)
</div>
```

---

## 🎯 Option 5: Google Images (Use Carefully)

### ⚠️ WARNING: Copyright Issues!
Most Google Images are copyrighted. BUT you can filter for free-to-use:

1. Go to Google Images
2. Search "Tbilisi restaurant"
3. Click "Tools" → "Usage Rights" → "Creative Commons licenses"
4. Only use images with CC licenses

**Better Alternative:** Use Google Maps photos (see below)

---

## 🎯 Option 6: Google Maps Photos (Smart Hack)

### How It Works:
1. Go to Google Maps
2. Search for a restaurant (e.g., "Shavi Lomi Tbilisi")
3. Look at user-uploaded photos
4. Many are public domain or CC licensed

### How to Use:
```typescript
// Link to Google Maps photo
const restaurantImages = {
  'Shavi Lomi': 'https://lh3.googleusercontent.com/p/[photo-id]'
}
```

**Note:** Check the license/terms before using

---

## 🎯 Option 7: When You Move to Tbilisi (Best Long-term)

### Your Photo Checklist:
- [ ] Take photos of 30 restaurants (exterior + 2 dishes each)
- [ ] Photograph all 10 neighborhoods (5-10 photos each)
- [ ] Document your apartment search
- [ ] Capture daily life (metro, markets, parks)
- [ ] Take seasonal photos (summer, winter)

### Equipment:
- Your smartphone (modern phones are excellent)
- Optional: Portable tripod ($20 on Amazon)
- Free editing app: Snapseed or VSCO

### Tips:
- Shoot in good lighting (morning or late afternoon)
- Take multiple angles
- Include people (with permission) for authenticity
- Capture details (menus, prices, street signs)

---

## 📊 Recommended Approach

### Phase 1: This Week (2 hours)
1. Search Unsplash for "Tbilisi" specific photos
2. Replace 10-15 most important images
3. Focus on: top restaurants, main neighborhoods

### Phase 2: Next Week (3 hours)
1. Post in Facebook groups asking for photos
2. Download and optimize images
3. Host them in your `/public/images` folder

### Phase 3: When in Tbilisi (Ongoing)
1. Take your own photos
2. Replace all stock images
3. Build authentic photo library

---

## 🚀 Let's Do Phase 1 Right Now!

I can help you update the code to use better Tbilisi-specific Unsplash photos.

Want me to:
1. Search for good Tbilisi photos on Unsplash
2. Update your restaurant image URLs
3. Make them more authentic?

Just say "yes" and I'll do it!

---

## 💡 Pro Tips

### For Best Results:
- Mix of photos: exteriors, food, interiors, people
- Show real prices/menus when possible
- Include seasonal variations
- Add photo credits (builds trust)
- Update photos regularly

### SEO Benefits:
- Use descriptive filenames: `shavi-lomi-khachapuri.webp`
- Add alt text: "Khachapuri at Shavi Lomi restaurant in Vake, Tbilisi"
- Optimize file size: <200KB per image
- Use WebP format for better performance

---

## 📝 Quick Action Items

**Today:**
- [ ] Search Unsplash for "Tbilisi" photos
- [ ] Replace 5-10 key images
- [ ] Add better alt text

**This Week:**
- [ ] Post in Facebook groups
- [ ] Download 30 good photos
- [ ] Optimize and host them

**When in Tbilisi:**
- [ ] Take 100+ photos
- [ ] Replace all stock images
- [ ] Build authentic library

---

Ready to start? I can help you implement any of these options right now!
