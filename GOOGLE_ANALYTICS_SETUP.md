# 🔍 Google Analytics Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account:
   - **Account name**: "Tbilisi Expat Guide" (or your preferred name)
   - Check all data sharing settings (recommended)
4. Create a property:
   - **Property name**: "Tbilisi Expat Guide"
   - **Reporting time zone**: Georgia (GMT+4)
   - **Currency**: Georgian Lari (GEL) or USD
5. Choose "Web" as your platform
6. Set up data stream:
   - **Website URL**: `https://your-site.vercel.app`
   - **Stream name**: "Tbilisi Expat Guide Website"

### Step 2: Get Your Measurement ID

1. After creating the data stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### Step 3: Add to Your Site

1. Add to your `.env.local` file:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace with your actual Measurement ID)

2. Restart your development server:
   ```bash
   npm run dev
   ```

### Step 4: Add to Vercel (Production)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your Measurement ID)
   - **Environment**: Check all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your site from the Deployments tab

## ✅ Verify It's Working

### Test Locally
1. Open your site: `http://localhost:3000`
2. Open browser dev tools (F12)
3. Go to **Network** tab
4. Look for requests to `googletagmanager.com` - if you see them, it's working!

### Test in Production
1. Visit your live site
2. Go to Google Analytics
3. Click **Reports** → **Realtime**
4. You should see your visit appear within 30 seconds

## 📊 What You'll Track

**Automatic Tracking:**
- Page views
- User sessions
- Traffic sources (Google, social media, direct)
- Geographic data (countries, cities)
- Device types (mobile, desktop)
- Popular pages

**Useful Reports:**
- **Realtime**: See current visitors
- **Acquisition**: How people find your site
- **Engagement**: Most popular pages
- **Demographics**: Age, gender, interests
- **Tech**: Browsers, devices, screen sizes

## 🎯 Pro Tips

1. **Set up Goals**: Track newsletter signups, contact form submissions
2. **Create Audiences**: Segment visitors (e.g., "Expats in Georgia")
3. **Link to Google Search Console**: See which searches bring visitors
4. **Set up Alerts**: Get notified of traffic spikes or drops
5. **Weekly Reports**: Check every Monday to see your growth

## 🔒 Privacy

- Google Analytics is GDPR compliant when configured properly
- Consider adding a privacy policy to your site
- The setup respects user privacy settings
- Data is anonymized by default

## 📈 Expected Results

For a new expat site, expect:
- **Month 1**: 50-200 visitors
- **Month 3**: 200-500 visitors (with good content)
- **Month 6**: 500-1000+ visitors (with SEO and marketing)

## 🆘 Troubleshooting

**Not seeing data?**
- Wait 24-48 hours for data to appear
- Check that the Measurement ID is correct
- Verify the environment variable is set in Vercel
- Test in an incognito window

**Still not working?**
- Check browser console for errors
- Verify the Google Analytics component is loading
- Make sure you redeployed after adding the environment variable

---

**Your Measurement ID**: `G-XXXXXXXXXX` (replace with your actual ID)

**Next Steps**: Once working, explore the Reports section to understand your audience!
