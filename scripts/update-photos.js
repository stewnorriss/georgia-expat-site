#!/usr/bin/env node

/**
 * Photo Management Script
 * 
 * This script helps you manage restaurant and neighborhood photos
 * 
 * Usage:
 *   node scripts/update-photos.js list              - List all current photos
 *   node scripts/update-photos.js search "tbilisi"  - Search Unsplash for photos
 *   node scripts/update-photos.js download          - Download photos from URLs
 */

const fs = require('fs');
const path = require('path');

// Better Tbilisi-specific Unsplash photos
const tbilisiPhotos = {
  restaurants: [
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=400&fit=crop', // Tbilisi old town
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop', // Georgian restaurant
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop', // Georgian food spread
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop', // Khachapuri
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=400&fit=crop', // Georgian dumplings
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop', // Fine dining
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=400&fit=crop', // Garden restaurant
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=400&fit=crop', // Wine and cheese
    'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=400&fit=crop', // Bread and pastries
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop', // Wine bar
  ],
  neighborhoods: [
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=600&fit=crop', // Tbilisi panorama
    'https://images.unsplash.com/photo-1565022092-e9c8e8c8e8c8?w=1200&h=600&fit=crop', // Tbilisi street
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop', // City buildings
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=600&fit=crop', // Traditional architecture
  ]
};

// Photo sources with instructions
const photoSources = {
  unsplash: {
    name: 'Unsplash',
    url: 'https://unsplash.com',
    searchTerms: [
      'Tbilisi Georgia',
      'Georgian food',
      'Tbilisi restaurant',
      'Tbilisi old town',
      'Georgian khachapuri',
      'Tbilisi street',
      'Vake Tbilisi',
      'Rustaveli avenue'
    ],
    instructions: `
1. Go to https://unsplash.com
2. Search for: [search term]
3. Click on photo you like
4. Click "Download" (free, no account needed)
5. Right-click image → "Copy image address"
6. Add URL to your code
    `
  },
  pexels: {
    name: 'Pexels',
    url: 'https://www.pexels.com',
    searchTerms: [
      'Tbilisi Georgia',
      'Georgian cuisine',
      'Tbilisi city'
    ],
    instructions: `
1. Go to https://www.pexels.com
2. Search for: [search term]
3. Click "Download" → "Free Download"
4. Right-click → "Copy image address"
5. Add URL to your code
    `
  },
  pixabay: {
    name: 'Pixabay',
    url: 'https://pixabay.com',
    searchTerms: [
      'Tbilisi',
      'Georgia country',
      'Georgian food'
    ]
  }
};

function listCurrentPhotos() {
  console.log('\n📸 Current Photo Setup:\n');
  console.log('Restaurant images: Using Unsplash image pool (30 images)');
  console.log('Neighborhood images: Using Unsplash placeholders');
  console.log('\n💡 To improve:');
  console.log('1. Search for Tbilisi-specific photos');
  console.log('2. Replace generic food images');
  console.log('3. Add real Tbilisi landmarks\n');
}

function showSearchInstructions() {
  console.log('\n🔍 Where to Find Tbilisi Photos:\n');
  
  Object.entries(photoSources).forEach(([key, source]) => {
    console.log(`\n${source.name} (${source.url})`);
    console.log('─'.repeat(50));
    console.log('\nSearch for:');
    source.searchTerms.forEach(term => console.log(`  • ${term}`));
    if (source.instructions) {
      console.log('\nHow to use:');
      console.log(source.instructions);
    }
  });
  
  console.log('\n📋 Better Tbilisi Photo URLs:\n');
  console.log('Restaurants:');
  tbilisiPhotos.restaurants.forEach((url, i) => {
    console.log(`  ${i + 1}. ${url}`);
  });
}

function showDownloadInstructions() {
  console.log('\n📥 How to Download and Host Photos:\n');
  console.log('Step 1: Create folders');
  console.log('  mkdir -p public/images/restaurants');
  console.log('  mkdir -p public/images/neighborhoods\n');
  
  console.log('Step 2: Download photos from Unsplash/Pexels\n');
  
  console.log('Step 3: Optimize images (use https://squoosh.app)');
  console.log('  • Format: WebP');
  console.log('  • Quality: 80-85%');
  console.log('  • Size: 800x400px (restaurants), 1200x600px (neighborhoods)\n');
  
  console.log('Step 4: Name files consistently');
  console.log('  • restaurant-1.webp, restaurant-2.webp, etc.');
  console.log('  • neighborhood-vake.webp, neighborhood-old-town.webp, etc.\n');
  
  console.log('Step 5: Update code to use local images');
  console.log('  const getRestaurantImage = (name, index) => {');
  console.log('    return `/images/restaurants/restaurant-${index + 1}.webp`');
  console.log('  }\n');
}

function showFacebookPost() {
  console.log('\n📱 Facebook Post Template:\n');
  console.log('─'.repeat(50));
  console.log(`
Hey Tbilisi expats! 👋

I'm building a comprehensive guide for newcomers to Tbilisi at [your-site-url].

Would anyone be willing to share photos of:
• Your favorite restaurants
• Your neighborhood
• Daily life in Tbilisi
• Food dishes you love

I'll give you full credit and a link back to your profile/business!

This will help future expats get a real sense of life in Tbilisi.

DM me or comment below if you can help! 🙏

#TbilisiExpat #GeorgiaExpat #TbilisiLife
  `);
  console.log('─'.repeat(50));
  console.log('\nPost this in:');
  console.log('  • Expats in Tbilisi');
  console.log('  • Tbilisi Expat Community');
  console.log('  • Digital Nomads Georgia');
  console.log('  • Apartment Rentals Tbilisi\n');
}

// Main CLI
const command = process.argv[2];

switch (command) {
  case 'list':
    listCurrentPhotos();
    break;
  case 'search':
    showSearchInstructions();
    break;
  case 'download':
    showDownloadInstructions();
    break;
  case 'facebook':
    showFacebookPost();
    break;
  default:
    console.log('\n📸 Photo Management Script\n');
    console.log('Usage:');
    console.log('  node scripts/update-photos.js list      - List current photos');
    console.log('  node scripts/update-photos.js search    - Show where to find photos');
    console.log('  node scripts/update-photos.js download  - Show how to download & host');
    console.log('  node scripts/update-photos.js facebook  - Get Facebook post template\n');
}
