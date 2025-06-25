# 🚀 SAAN App Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **1. Environment Variables**

Create `.env.production` with your Firebase config:

```bash
VITE_FIREBASE_API_KEY=AIzaSyA794TfmYroBA7WW_n3rUcP4cLoWkU_9NI
VITE_FIREBASE_AUTH_DOMAIN=saan-b14ad.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=saan-b14ad
VITE_FIREBASE_STORAGE_BUCKET=saan-b14ad.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=457714403679
VITE_FIREBASE_APP_ID=1:457714403679:web:0a2de834f246fa2a4fceea
VITE_FIREBASE_MEASUREMENT_ID=G-S9R1WDD9KH
```

### ✅ **2. Test Production Build**

```bash
npm run build
npm run preview
```

### ✅ **3. Firebase Security Rules**

Make sure your Firestore rules are set correctly in Firebase Console.

---

## 🎯 **Option 1: Vercel (Recommended)**

### **Why Vercel?**

- ✅ Free hosting for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Perfect for React/Vite apps
- ✅ Built-in environment variable management

### **Deploy Steps:**

1. **Push to GitHub** (if not already):

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**:

   - Visit: https://vercel.com/
   - Sign up with GitHub account
   - Click "Add New Project"
   - Import your SAAN repository

3. **Configure Environment Variables**:

   - In Vercel dashboard → Project Settings → Environment Variables
   - Add all the Firebase variables from above
   - Make sure to select "Production" environment

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - You'll get a live URL like: `https://saan-app.vercel.app`

### **Future Deployments:**

- Just push to GitHub → Vercel auto-deploys! 🎉

---

## 🔥 **Option 2: Firebase Hosting**

### **Why Firebase Hosting?**

- ✅ Perfect integration with your Firebase backend
- ✅ Free SSL certificate
- ✅ Fast global CDN
- ✅ Custom domain support

### **Deploy Steps:**

1. **Install Firebase CLI**:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:

   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**:

   ```bash
   firebase init hosting
   ```

   - Select your existing project: `saan-b14ad`
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Set up GitHub Actions: `No` (for now)

4. **Build and Deploy**:

   ```bash
   npm run build
   firebase deploy
   ```

5. **Get Your URL**:
   - Your app will be live at: `https://saan-b14ad.web.app`

---

## 🌐 **Option 3: Netlify**

### **Deploy Steps:**

1. **Build the app**:

   ```bash
   npm run build
   ```

2. **Go to Netlify**:

   - Visit: https://netlify.com/
   - Drag and drop your `dist` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**:
   - Site Settings → Environment Variables
   - Add your Firebase config variables

---

## ⚙️ **Custom Domain Setup**

### **For Vercel:**

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### **For Firebase:**

1. `firebase open hosting:site`
2. Click "Add custom domain"
3. Follow the verification steps

---

## 🛡️ **Security Checklist**

### **Firebase Security Rules:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Chats
    match /chats/{chatId} {
      allow read, write: if request.auth != null &&
        request.auth.uid in resource.data.participants;
      allow create: if request.auth != null &&
        request.auth.uid in request.resource.data.participants;
    }

    // Messages
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }

    // Opportunities
    match /opportunities/{document} {
      allow read, write: if request.auth != null;
    }

    // Other collections
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### **Environment Variables:**

- ✅ Never commit `.env` files to GitHub
- ✅ Use platform-specific environment variable management
- ✅ Keep Firebase config secure but accessible to your app

---

## 📱 **Mobile App Features Ready:**

- ✅ **Real Authentication** - Users can register and login
- ✅ **Real-time Chat** - Alumni can message each other
- ✅ **Job Board** - Post and apply for opportunities
- ✅ **User Profiles** - Complete profile management
- ✅ **Emergency SOS** - Community emergency response
- ✅ **Learning Platform** - Course enrollment and progress
- ✅ **African Theme** - Beautiful rust/sand/olive design
- ✅ **Mobile Responsive** - Works on all device sizes

---

## 🎉 **Post-Deployment**

### **Test Everything:**

1. ✅ User registration/login
2. ✅ Chat between users
3. ✅ Job posting
4. ✅ Profile editing
5. ✅ Emergency alerts
6. ✅ Course enrollment

### **Share Your App:**

- Add the live URL to your GitHub README
- Share with the SAAN community
- Consider adding to app stores later

---

## 🆘 **Troubleshooting**

### **Build Errors:**

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### **Firebase Connection Issues:**

- Check environment variables are set correctly
- Verify Firebase config in console
- Test Firestore security rules

### **Deployment Issues:**

- Check build logs for specific errors
- Verify all dependencies are in package.json
- Test locally with `npm run preview` first

---

**🎯 Recommended: Use Vercel for easiest deployment experience!**

Your SAAN app is production-ready. Choose your deployment method and launch! 🚀
