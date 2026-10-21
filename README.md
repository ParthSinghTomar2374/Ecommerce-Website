# 🛍️ Aura & Co. — Luxury Apparel E-Commerce

<div align="center">

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7.5-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, full-featured e-commerce fashion storefront built with React and Vite.**  
Featuring responsive layouts, client-side routing, global cart management, dynamic sorting, promo code discounts, and an elevated luxury user interface.

[Live Demo](#) • [Features](#-key-features) • [Installation](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 📖 Overview

**Aura & Co.** is a contemporary fashion and apparel shopping platform designed for high performance, smooth interactivity, and aesthetic appeal. It delivers a fast single-page application (SPA) shopping experience powered by **React 19** and **Vite**, with modular components and vanilla CSS for pinpoint design control and fluid micro-animations.

---

## ✨ Key Features

### 🛍️ Storefront & Collections
- **Hero Showcase**: Prominent hero banner with curated CTAs and seasonal highlights.
- **Curated Sections**: Dedicated components for *Popular Products*, *Exclusive Offers*, *New Collections*, and an interactive *Newsletter* subscription box.
- **Categorized Shopping**: Distinct routes for **Men's**, **Women's**, and **Kids'** collections with customized banner artwork and category badges.

### 🔍 Smart Sorting & Filtering
- **Interactive Sorting**: Sort products instantly by:
  - Featured (Default)
  - Price: Low to High
  - Price: High to Low
  - Alphabetical (A–Z)
- **Live Counters**: Dynamic indicators showing currently visible product count against total inventory.

### 🏷️ Product Detail Pages (PDP)
- **Dynamic Routing**: URL parameters (`/product/:productId`) render matching product data on demand.
- **Interactive Gallery & Size Selector**: Visual size picker (`S`, `M`, `L`, `XL`, `XXL`) and image previews.
- **Breadcrumb Navigation**: Intuitive breadcrumbs for seamless navigation between categories and items.
- **Product Descriptions & Reviews**: Tabbed interface detailing product specifications, fabric care, and customer feedback.
- **Related Products**: Recommended complementary items to increase conversion.

### 🛒 Global Cart & Checkout Flow
- **State Management via React Context**: Centralized `ShopContext` providing cart state, item counters, and pricing totals across the app.
- **Real-Time Cart Badge**: Animated navbar counter reflecting active cart items in real time.
- **Cart Management**:
  - Quantity steppers (`+` / `−`) for individual items
  - One-click removal
  - Subtotal and grand total calculations
- **Promo Code Engine**: Built-in support for discount coupons (e.g., use promo code **`SAVE15`** or **`VIP`** for an instant 15% off).
- **Empty Cart Handling**: Engaging empty-state view with an instant redirect to new arrivals.
- **Simulated Checkout**: Smooth gateway transition animation with trust indicators (256-bit encryption, 2-day delivery badges).

### 🔐 User Authentication
- **Dual-Mode Auth**: Seamless toggle between **Account Login** and **Account Registration**.
- **Form Controls**: Client-side field validation, terms agreement checkbox, and loading feedback.
- **Ambient Visuals**: Modern glassmorphic cards and subtle gradient backdrops.

### 🧭 Navigation & UX
- **Scroll-to-Top**: Automatically resets scroll position to the top on every route change.
- **Active Navigation Indicators**: Clear visual cues on the header navbar corresponding to current routes.
- **Responsive Design**: Designed to work seamlessly across desktops, tablets, and mobile viewports.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **State Management** | React Context API (`ShopContext`) |
| **Styling** | Vanilla CSS (CSS3 custom properties, Flexbox, CSS Grid) |
| **Linting & Code Quality** | ESLint 9 |

---

## 📁 Project Structure

```text
vite-project/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Brand logos, icons, category banners, product dataset
│   │   ├── all_product.js  # Product catalogue data source
│   │   └── ...
│   ├── Components/         # Reusable UI components
│   │   ├── Bredcrums/      # Breadcrumb navigation component
│   │   ├── CItems/         # Cart table, promo code, and summary components
│   │   ├── Description/    # Product details, specs, and review tabs
│   │   ├── Footer/         # Global footer with links and social channels
│   │   ├── Hero/           # Homepage hero banner & call-to-actions
│   │   ├── Item/           # Individual product card component
│   │   ├── Navbar/         # Header navigation bar with cart indicator
│   │   ├── NewCollections/ # New collection showcase grid
│   │   ├── NewsLetter/     # Email newsletter subscription card
│   │   ├── Offers/         # Special promotional offers banner
│   │   ├── Popuar/         # Trending/Popular products row
│   │   ├── ProductDisplay/ # PDP product view, image zoom & size selection
│   │   └── RelatedProducts/# Related products carousel/grid
│   ├── Context/            # React Context Providers
│   │   └── ShopContext.jsx # Global shopping cart state & helper methods
│   ├── CSS/                # Modular stylesheet definitions
│   ├── Pages/              # Route views
│   │   ├── Cart.jsx        # Shopping bag page
│   │   ├── LoginSignup.jsx # Authentication (Sign In / Register)
│   │   ├── Product.jsx     # Product details view
│   │   ├── Shop.jsx        # Homepage & showcase
│   │   └── ShopCategory.jsx# Filtered category page (Men/Women/Kids)
│   ├── App.jsx             # Main routing & application layout
│   ├── index.css           # Global CSS variables, reset & typography
│   └── main.jsx            # React root DOM mounting point
├── index.html              # HTML document template
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm** (comes with Node) or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ParthSinghTomar2374/Ecommerce-Website.git
   cd Ecommerce-Website
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd vite-project
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**  
   Navigate to `http://localhost:5173` (or the port displayed in your terminal).

---

## 📜 Available Scripts

Inside the `vite-project` directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally previews the production build output. |
| `npm run lint` | Runs ESLint to check for code quality and syntax errors. |

---

## 🗺️ Application Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Shop` | Homepage featuring Hero, New Collections, Popular Picks & Newsletter |
| `/mens` | `ShopCategory` | Men's apparel catalogue with sorting & filter tools |
| `/womens` | `ShopCategory` | Women's apparel catalogue with sorting & filter tools |
| `/kids` | `ShopCategory` | Kids' clothing catalogue with sorting & filter tools |
| `/product/:productId` | `Product` | Dedicated product page with gallery, size selector & reviews |
| `/cart` | `Cart` | Shopping bag with item adjustments, promo codes & checkout |
| `/login` | `LoginSignup` | User authentication portal (Sign in & Registration) |

---

## 💡 Promo Codes for Testing

When testing the cart checkout experience, you can apply the following coupon codes in the Order Summary:
- **`SAVE15`** — Grants a **15% discount** on your entire cart subtotal.
- **`VIP`** — Grants a **15% discount** for VIP members.

---

## 🤝 Contributing

Contributions are warmly welcomed! If you'd like to improve the app:

1. **Fork** the repository.
2. **Create a branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: Add amazing feature"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a **Pull Request**.

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use and adapt it for learning or personal projects.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/ParthSinghTomar2374">Parth Singh Tomar</a>
</div>
