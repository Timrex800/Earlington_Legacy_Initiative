# ✅ Pre-Deployment Checklist

## Configuration (CRITICAL - 5 minutes)

### 1. Google Analytics Setup
- [ ] Create GA4 account at https://google.com/analytics
- [ ] Get tracking ID (format: G-XXXXXXXXXX)
- [ ] Open `index.html` line 32
- [ ] Replace `YOUR_GA_ID` with actual ID
- [ ] Uncomment line 38: `gtag('config', 'YOUR_GA_ID');`
- [ ] Save file

### 2. Formspree Form Integration
- [ ] Create account at https://formspree.io
- [ ] Create new form with fields: name, email, role, linkedin
- [ ] Get form ID from dashboard
- [ ] Open `src/components/sections/DeveloperCommunity.tsx` line 24
- [ ] Replace endpoint: `https://formspree.io/f/YOUR_FORMSPREE_ID`
- [ ] Save file

### 3. Eventbrite/Luma Calendar Setup
- [ ] Create Eventbrite OR Luma account
- [ ] Create Phoenix Developer Community event calendar
- [ ] Get embed code
- [ ] Open `src/components/sections/Events.tsx` lines 79-85
- [ ] Replace placeholder div with actual embed code
- [ ] Verify dimensions (width: 100%, height: 600px minimum)
- [ ] Save file

### 4. Footer Contact Information
- [ ] Open `src/components/layout/Footer.tsx`
- [ ] Update email: Line ~184 (info@earlingtonlegacy.org.za)
- [ ] Add phone number: Line ~188
- [ ] Save file

### 5. Social Media Links (Optional but Recommended)
- [ ] Get social media URLs for:
  - [ ] Facebook page
  - [ ] LinkedIn profile
  - [ ] Twitter/X profile
- [ ] Open `src/components/layout/Footer.tsx` lines ~160-165
- [ ] Update href values for each social link
- [ ] Save file

---

## Code Validation

### TypeScript & Linting
- [ ] Run: `npm run lint`
- [ ] Check for errors (should be 0)
- [ ] Fix any warnings

### Build Verification
- [ ] Run: `npm run build`
- [ ] Check build succeeds (look for "built successfully")
- [ ] Verify no build errors

### Production Preview
- [ ] Run: `npm run preview`
- [ ] Open http://localhost:4173
- [ ] Verify all new sections render correctly
- [ ] Check responsive design (resize window)

---

## Functional Testing (Desktop)

### Navigation
- [ ] Click each menu item (Home, About Us, Our Impact, etc.)
- [ ] Verify page scrolls to correct section
- [ ] Verify smooth scroll works
- [ ] Click logo, verify it scrolls to home

### Hero Section
- [ ] Verify primary headline displays
- [ ] Verify secondary headline displays
- [ ] Click "Join Developer Community" button
- [ ] Verify it scrolls to developer community section
- [ ] Click "Support Our Mission" button
- [ ] Click "Learn More" button

### Developer Community Section
- [ ] Verify three segment cards display correctly
- [ ] Verify "Become a Mentor" form appears
- [ ] Verify "Stay Updated" newsletter form appears
- [ ] Test form inputs can be focused/typed in
- [ ] Click "Apply to Become a Mentor" button

### Events Section
- [ ] Verify three event cards display
- [ ] Verify all event details show correctly
- [ ] Verify RSVP buttons are clickable
- [ ] Check Eventbrite embed displays (if added)
- [ ] Click "View All Events" button

### Resources Section
- [ ] Verify four resource category cards
- [ ] Verify resource library displays
- [ ] Verify "Share Your Knowledge" button is visible
- [ ] Verify "Request a Resource" button is visible
- [ ] Click both CTA buttons

### Footer
- [ ] Verify NPC registration number shows
- [ ] Verify director names display
- [ ] Verify social icons display
- [ ] Click each social icon (should navigate or open)
- [ ] Verify copyright year is current

---

## Functional Testing (Mobile)

### Navigation
- [ ] Hamburger menu button appears (on < 768px)
- [ ] Click hamburger to open menu
- [ ] Verify all menu items appear
- [ ] Click menu item, verify it closes menu
- [ ] Click menu item, verify page scrolls to section

### Hero Section
- [ ] Verify headline text is readable (not cut off)
- [ ] Verify CTA buttons are full-width and touchable
- [ ] Verify buttons are at least 44px height

### Forms
- [ ] Verify form inputs stack vertically
- [ ] Verify form is full-width
- [ ] Test keyboard focus (tap on field)
- [ ] Verify form can be submitted

### Images & Content
- [ ] Verify all images load and scale correctly
- [ ] Verify text is readable without zooming
- [ ] Verify no horizontal scrolling needed

### Footer
- [ ] Verify footer content stacks properly
- [ ] Verify social icons are tappable (at least 44x44px)

---

## Tablet Testing (768px - 1024px)

- [ ] Verify 2-column layouts where applicable
- [ ] Verify form side-by-side layout converts to stacked
- [ ] Verify touch targets are adequate
- [ ] Verify navigation is accessible (hamburger or full nav)
- [ ] Verify no weird layout shifts

---

## Cross-Browser Testing

### Chrome (latest)
- [ ] Desktop: All sections load
- [ ] Mobile: Responsive design works
- [ ] Forms submit successfully

### Firefox (latest)
- [ ] Desktop: All sections load
- [ ] Mobile: Responsive design works
- [ ] Gradients display correctly

### Safari (latest)
- [ ] Desktop: All sections load
- [ ] Mobile: Responsive design works
- [ ] Shadows display correctly

### Edge (latest)
- [ ] Desktop: All sections load
- [ ] CSS grid displays correctly
- [ ] Flexbox layouts work

---

## Form Testing

### Mentor Form
- [ ] Type in "Name" field
- [ ] Type in "Email" field
- [ ] Select from "Role" dropdown
- [ ] Type in "LinkedIn" field (optional)
- [ ] Click "Apply" button
- [ ] Verify success message appears
- [ ] Check email received by Formspree

### Newsletter Form
- [ ] Type in "Full Name" field
- [ ] Type in "Email Address" field
- [ ] Select from "Interest" dropdown
- [ ] Click "Subscribe" button
- [ ] Verify success message appears (if integrated)

---

## SEO Validation

### Meta Tags
- [ ] Open page source (Ctrl+U / Cmd+U)
- [ ] Verify title tag is present and correct
- [ ] Verify meta description is present
- [ ] Verify og:title, og:description present
- [ ] Verify canonical URL present

### Structured Data
- [ ] Install JSON-LD extension in browser
- [ ] Verify NGO schema loads correctly
- [ ] Verify organization name shows
- [ ] Verify address shows

### Sitemap & Robots
- [ ] Visit https://yoursite.com/sitemap.xml
- [ ] Verify XML loads and is valid
- [ ] Visit https://yoursite.com/robots.txt
- [ ] Verify txt file loads correctly

### Google Analytics
- [ ] Go to Google Analytics dashboard
- [ ] Create property if needed
- [ ] Wait 24-48 hours for data to populate
- [ ] Verify tracking code fires (use browser extensions)

---

## Accessibility Checklist

### Color Contrast
- [ ] Text color contrast is adequate
- [ ] Links are distinguishable from regular text
- [ ] Buttons have sufficient contrast

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Verify focus ring is visible
- [ ] Verify all buttons can be activated with Enter
- [ ] Verify forms can be filled using keyboard only

### Screen Reader
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] Verify headings are announced properly
- [ ] Verify form labels are associated with inputs
- [ ] Verify buttons have descriptive text

### Text Sizing
- [ ] Zoom to 200% in browser
- [ ] Verify layout doesn't break
- [ ] Verify text remains readable

---

## Performance Testing

### Page Speed
- [ ] Run Google PageSpeed Insights
- [ ] Check Desktop score (target: 90+)
- [ ] Check Mobile score (target: 85+)
- [ ] Note any critical issues

### Bundle Size
- [ ] Run: `npm run build`
- [ ] Check console output for bundle size
- [ ] Verify all code is necessary
- [ ] No unused dependencies

### Network Performance
- [ ] Open DevTools (F12)
- [ ] Go to Network tab
- [ ] Reload page
- [ ] Verify all images load from Cloudinary
- [ ] Total page size should be < 5MB

### Rendering Performance
- [ ] Open DevTools Performance tab
- [ ] Record page load
- [ ] Check for layout thrashing
- [ ] Verify smooth 60fps scrolling

---

## Final Quality Assurance

### Content Accuracy
- [ ] Verify NPC registration number: 2025/931583/08
- [ ] Verify director names are correct
- [ ] Verify email address is current
- [ ] Verify all section headings are correct

### Link Verification
- [ ] Test all internal anchor links
- [ ] Test all external links
- [ ] Verify "Donate" link works
- [ ] Verify "Contact" link works

### Broken Links Checker
- [ ] Run broken link checker tool
- [ ] Fix any 404 errors
- [ ] Verify all images load

### GDPR/Privacy
- [ ] Verify privacy policy link (if exists)
- [ ] Verify terms of use (if applicable)
- [ ] Ensure form data is handled securely

---

## Pre-Commit Verification

### Git Status
```bash
- [ ] Run: git status
- [ ] Verify only intended files changed
- [ ] No accidental deletions
```

### Test Suite
```bash
- [ ] Run: npm run test
- [ ] Verify all tests pass
- [ ] No new test failures
```

### Final Build
```bash
- [ ] Run: npm run build
- [ ] Verify production build succeeds
- [ ] No errors in console
```

---

## Deployment Steps

### 1. Commit Changes
```bash
- [ ] git add .
- [ ] git commit -m "Redesign: Add Phoenix Developer Community sections & enhanced SEO"
- [ ] Review commit message for accuracy
```

### 2. Push to Repository
```bash
- [ ] git push origin main
- [ ] Verify push succeeds
- [ ] Check GitHub for new commit
```

### 3. Verify GitHub Pages Build
- [ ] Go to repository Actions
- [ ] Verify "pages build and deployment" job runs
- [ ] Wait for job to complete (usually 1-2 minutes)
- [ ] Verify job shows "success" (green check)

### 4. Verify Live Site
- [ ] Visit https://www.earlingtonlegacy.org.za
- [ ] Wait 1-5 minutes for cache to clear
- [ ] Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- [ ] Verify new sections appear
- [ ] Repeat testing steps to verify live site

---

## Post-Deployment Monitoring (First 24 Hours)

### Analytics
- [ ] Check Google Analytics for initial traffic
- [ ] Verify tracking code is firing
- [ ] Monitor for error reports

### User Experience
- [ ] Monitor for user feedback
- [ ] Check for form submission success
- [ ] Monitor contact form submissions

### Performance
- [ ] Check core web vitals
- [ ] Monitor page load times
- [ ] Check for JavaScript errors (DevTools console)

---

## Documentation Updates

- [ ] Update README with new features
- [ ] Add analytics tracking info to docs
- [ ] Add form integration notes
- [ ] Add Eventbrite setup instructions
- [ ] Commit documentation changes

---

## Contingency Planning

### If Issues Arise
- [ ] Check browser console for JavaScript errors
- [ ] Verify all configuration values are correct
- [ ] Check DevTools Network tab for failed requests
- [ ] Verify form endpoints are accessible
- [ ] Check GitHub Actions logs for build errors

### Rollback Plan
- [ ] If critical issues: `git revert HEAD`
- [ ] Push revert commit
- [ ] Wait for GitHub Pages to rebuild
- [ ] Verify previous version is live

---

## Success Criteria ✅

- [ ] All new sections render without errors
- [ ] Forms accept input and show success messages
- [ ] Mobile responsive design works on all devices
- [ ] All navigation links work correctly
- [ ] SEO tags are properly configured
- [ ] Analytics tracking is active
- [ ] No console errors or warnings
- [ ] Page loads in < 3 seconds
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility verified

---

## Sign-Off

**Prepared by:** [Your Name/Team]  
**Date:** December 16, 2025  
**Testing Completed:** _______________  
**Deployed to Production:** _______________  

**Ready for Launch:** ☐ YES ☐ NO

---

**Print this checklist and mark off items as you complete them. Save as proof of QA testing.**
