This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Shopping Cart Application
This project is a Shopping Cart Application built using React.js. It allows users to browse a list of products, add them to the cart, view a detailed cart summary in a modal, and confirm the order. The project implements clean, reusable components and features a modern user interface.

Features
- Product Listing: Displays products with details like name, price, category, and stock availability.
- Add to Cart: Users can add products to their cart with proper stock management.
- Cart Summary: A modal shows the cart's contents, original total, discounted total, and options to confirm or close the cart.
- Responsive Design: Fully responsive layout suitable for different screen sizes.
- Animations: Visual feedback for actions like adding products to the cart using simple animations.
Notable Design Decisions
Component Structure:

The project is modular, with components like CartSummary, and ConfirmationMessage.
Each component is reusable and self-contained.
State Management:

The application uses the React useState hook for managing product and cart states.
Discounts are calculated dynamically based on the cart's total value.
Modal Design:

The cart summary is displayed as a modal for better user experience.
Includes an overlay to focus user attention on the modal.
Stock Management:

Products are disabled when out of stock to prevent users from adding unavailable items to the cart.
Dynamic Discounts:

Discounts are applied based on the original total (e.g., 5%, 10%, or 15% for different thresholds).

Steps
Clone the repository:

git clone https://github.com/your-username/shopping-cart-app.git
cd shopping-cart-app
Install dependencies:

npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
