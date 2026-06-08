# BAM-B & CO — Landing Page & Pre-Order System

> **Beyond Sourcing** · Direct Importation from China to Nigeria

---

## 🗂 Project Structure

```
bamb-co/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (metadata, fonts)
│   │   ├── page.tsx            ← Homepage (Hero + all sections)
│   │   ├── globals.css         ← Global styles + CSS variables
│   │   ├── preorder/
│   │   │   └── page.tsx        ← Full pre-order form page
│   │   ├── track/
│   │   │   └── page.tsx        ← Order tracking page
│   │   └── api/
│   │       ├── orders/route.ts ← POST: create order | GET: list orders
│   │       └── track/route.ts  ← GET: track by order num or phone
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WAFloat.tsx         ← Floating WhatsApp button
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── ShippingPolicy.tsx
│   │       ├── FAQSection.tsx
│   │       └── ContactSection.tsx
│   ├── lib/
│   │   ├── supabase.ts         ← Supabase client setup
│   │   └── utils.ts            ← cn(), generateOrderNumber()
│   └── types/
│       └── index.ts            ← TypeScript types & constants
├── public/
│   └── logo.png                ← ⚠ PUT YOUR LOGO HERE
├── supabase-schema.sql         ← Run this in Supabase SQL Editor
├── .env.example                ← Copy to .env.local
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Setup in VS Code — Step by Step

### Step 1 — Install Prerequisites

Install these if you haven't:
- **Node.js 18+**: https://nodejs.org
- **VS Code**: https://code.visualstudio.com
- **Git**: https://git-scm.com

### Step 2 — Open the Project in VS Code

```bash
# In your terminal or VS Code terminal (Ctrl + `)
cd bamb-co
code .
```

### Step 3 — Install Dependencies

In VS Code terminal:
```bash
npm install
```

### Step 4 — Add Your Logo

Copy your logo image to:
```
bamb-co/public/logo.png
```

### Step 5 — Set Up Supabase (Database)

1. Go to https://supabase.com and create a free account
2. Click **New Project** — name it `bamb-co`
3. Once created, go to **SQL Editor** in the left sidebar
4. Copy everything from `supabase-schema.sql` and paste it → click **Run**
5. Go to **Settings → API** and copy:
   - `Project URL`
   - `anon public` key
   - `service_role` key (keep this secret!)

### Step 6 — Configure Environment Variables

```bash
# In your project root
cp .env.example .env.local
```

Open `.env.local` in VS Code and fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=2349074550805
```

### Step 7 — Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. 🎉

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Free Hosting)

1. Push your code to GitHub
2. Go to https://vercel.com → Import your repo
3. In the **Environment Variables** section, add all your `.env.local` values
4. Click **Deploy** — your site goes live!

---

## 🔧 VS Code Extensions to Install

Open VS Code Extensions (Ctrl+Shift+X) and install:

| Extension | Purpose |
|-----------|---------|
| **ES7+ React/Redux/React-Native snippets** | Fast React component shortcuts |
| **Tailwind CSS IntelliSense** | Autocomplete for Tailwind classes |
| **Prettier** | Auto-format code on save |
| **ESLint** | Catch code errors |
| **GitLens** | Git history in VS Code |

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage with Hero, How It Works, Policy, FAQ, Contact |
| `/preorder` | Full pre-order form with installment toggle |
| `/track` | Order tracking by order number or phone |
| `/api/orders` | POST: submit order · GET: list all orders |
| `/api/track` | GET: look up order by number or phone |

---

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Primary Blue | `#002E9B` |
| Mint Green | `#A8F5D0` |
| White | `#FFFFFF` |

---

## 📞 Contact Info in Code

To update contact details, search for `2349074550805` and `Bambcoglobal@gmail.com` across the project.

---

## 🛡 Tech Stack

- **Next.js 15** — React framework (App Router)
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Supabase** — PostgreSQL database + Auth
- **Vercel** — Deployment

---

*Built for BAM-B & CO · Beyond Sourcing*
