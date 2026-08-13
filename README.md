🎓 Coll-Edge Connect

«India's fastest bridge between Colleges & Brands.»

Coll-Edge Connect is a modern full-stack web platform designed to connect college communities with brands, memberships, events, products, and engagement opportunities through a single digital experience.

The platform is built with Next.js, React, TypeScript, Tailwind CSS, MongoDB, and modern API-driven architecture, with integrated authentication, notifications, cart management, memberships, payments, email workflows, and Google Sheets synchronization.

""Next.js" (https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)" (https://nextjs.org/)
""React" (https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)" (https://react.dev/)
""TypeScript" (https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)" (https://www.typescriptlang.org/)
""Tailwind CSS" (https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)" (https://tailwindcss.com/)
""MongoDB" (https://img.shields.io/badge/MongoDB-9-47A248?style=for-the-badge&logo=mongodb&logoColor=white)" (https://www.mongodb.com/)
""Razorpay" (https://img.shields.io/badge/Razorpay-Payments-0C0C0C?style=for-the-badge)" (https://razorpay.com/)

---

✨ Overview

Coll-Edge Connect is built around the idea of creating a centralized digital ecosystem where students, colleges, and brands can interact through a structured and scalable platform.

The application provides dedicated flows for:

- 👤 User authentication and account management
- 🎟️ Memberships
- 🛒 Product discovery and cart management
- 💳 Payment and purchase workflows
- 🔔 Notifications
- 📩 Contact and collaboration forms
- 📊 Google Sheets synchronization
- 📧 Transactional/authentication emails
- 🧩 Product and membership management
- 🔐 Protected user experiences

The project uses the Next.js App Router and organizes the application into pages, API routes, reusable components, contexts, hooks, models, utility libraries, and server-side integrations.

---

🚀 Key Features

🔐 Authentication & Account Management

Complete authentication flows are implemented through Next.js API routes and MongoDB.

Includes:

- User registration
- Login / logout
- Current-user authentication
- Password reset
- Email verification
- Authentication cookies
- Protected routes
- User account management
- Password hashing with "bcryptjs"
- JWT-based authentication

Authentication requests use HTTP-only cookies and JWT tokens for maintaining authenticated sessions.

---

🛍️ Product & Cart System

The platform includes a complete product/cart foundation.

Features include:

- Product API
- Add to cart
- Update cart items
- Cart quantity management
- Cart persistence
- Product models
- Purchase flow
- Cart context
- Reusable cart hook

The repository contains dedicated cart APIs, cart models, a "CartContext", and "useCart" hook for managing cart state across the application.

---

💳 Payment & Purchase Flow

Coll-Edge Connect includes a payment workflow integrated with Razorpay.

The codebase contains dedicated API routes for:

- Creating Razorpay orders
- Verifying Razorpay payments
- Creating payment records
- Retrieving user payment information
- Processing purchases

Razorpay's checkout script is also loaded globally through the application's root layout.

---

🎫 Membership System

A dedicated membership system allows the platform to manage membership-related data and user memberships.

The repository includes:

- Membership model
- User membership model
- Membership page
- Membership API
- User membership API
- Membership-related account flows

---

🔔 Notification System

The platform includes a dedicated notification architecture.

Includes:

- Notification model
- Notifications page
- Notification API
- Notification types
- Notification icons
- Notification React hook
- Read/unread state handling

This allows the application to keep user-facing notifications separate from the rest of the application logic.

---

📧 Email Automation

Email workflows are implemented using Resend and React-based email templates.

The project supports authentication-related email flows such as:

- Email verification
- Password reset
- Authentication notifications
- Templated transactional emails

The email layer uses "Resend" together with React email components and reusable email templates.

---

📊 Google Sheets Integration

The application can synchronize submitted data with Google Sheets using the Google Sheets API.

Current integrations include:

- Contact submissions
- Queries
- Brand collaboration data

The Google Sheets utility uses a Google service-account credential and separate spreadsheet IDs for different data flows.

---

🤝 Brand Collaboration

The platform includes a collaboration flow for brands.

The collaboration data model supports information such as:

- Full name
- Brand name
- Email
- Phone
- Links
- Category
- Physical store information
- Previous exhibition information

Submitted collaboration information can be synchronized with Google Sheets for further processing.

---

👤 Account Dashboard

The application provides a dedicated account area for authenticated users.

The account architecture is separated into its own page and components, making it easier to extend user-specific functionality without coupling it to the public pages.

---

📱 Responsive UI

The project follows a component-based UI architecture using:

- React
- Tailwind CSS
- Reusable components
- Context providers
- Custom hooks
- Responsive layouts

Global layout functionality includes a reusable header, footer, authentication provider, cart provider, toast notifications, and Razorpay checkout integration.

---

🧱 Tech Stack

Frontend

Technology| Purpose
Next.js 16| Full-stack React framework
React 19| UI development
TypeScript| Type-safe development
Tailwind CSS 4| Styling and responsive UI
Poppins| Application typography
Lucide React| UI icons
React CountUp| Animated counters

Backend & Data

Technology| Purpose
Next.js API Routes| Backend/API layer
MongoDB| Application database
Mongoose| MongoDB ODM
JWT| Authentication tokens
bcryptjs| Password hashing

Integrations

Technology| Purpose
Razorpay| Payment processing
Resend| Transactional emails
Google Sheets API| Form/data synchronization
React Email| Email templates
QRCode| QR-code generation
Google APIs| External service integration

The dependency stack is defined in the repository's "package.json".

---

🏗️ Architecture

The project follows a modular Next.js App Router architecture.

college-connect/
│
├── src/
│   ├── actions/
│   │   └── auth.ts
│   │
│   ├── app/
│   │   ├── (home)/
│   │   ├── about-us/
│   │   ├── account/
│   │   ├── api/
│   │   ├── cart/
│   │   ├── contact-us/
│   │   ├── forgot-password/
│   │   ├── login/
│   │   ├── membership/
│   │   ├── notifications/
│   │   ├── payment/
│   │   ├── restricted-front-row/
│   │   ├── signup/
│   │   ├── globals.css
│   │   └── layout.tsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── InfoCard.tsx
│   │   ├── BrandLogoCard.tsx
│   │   └── ...
│   │
│   ├── context/
│   │   ├── AuthContext
│   │   └── CartContext
│   │
│   ├── emails/
│   │
│   ├── hooks/
│   │   ├── useCart.tsx
│   │   └── useNotifications.ts
│   │
│   ├── lib/
│   │   ├── mongodb.ts
│   │   ├── googleSheets.ts
│   │   ├── sendEmail.ts
│   │   ├── token.ts
│   │   ├── validation.ts
│   │   └── ...
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   ├── Cart.ts
│   │   ├── CartItem.ts
│   │   ├── Membership.ts
│   │   ├── UserMembership.ts
│   │   ├── Payment.ts
│   │   ├── Notification.ts
│   │   └── ...
│   │
│   ├── types/
│   └── proxy.ts
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md

The repository currently separates application routes, reusable UI, context providers, hooks, database models, utilities, email templates, and API handlers into dedicated directories.

---

🔌 API Structure

The backend functionality is implemented using Next.js Route Handlers.

/api
│
├── auth/
│   ├── login
│   ├── signup
│   ├── logout
│   ├── me
│   ├── google
│   ├── forgot-password
│   ├── reset-password/confirm
│   ├── verify-email/confirm
│   └── sync
│
├── cart/
├── memberships/
├── notifications/
├── product/
├── purchases/
├── payment/
│   ├── create
│   ├── my
│   └── razorpay/
│       ├── order
│       └── verify
│
├── UserMembership/
├── account/update/
└── sync-sheet/

---

🔐 Authentication Flow

A simplified authentication flow looks like this:

User
  │
  ▼
Login / Signup
  │
  ▼
Next.js API Route
  │
  ▼
MongoDB
  │
  ├── User lookup
  └── Password verification
          │
          ▼
       JWT Token
          │
          ▼
   HTTP-only Cookie
          │
          ▼
 Authenticated Application

The login API connects to MongoDB, retrieves the user, verifies the password with "bcryptjs", creates a JWT, and stores the token in an "auth_token" cookie.

---

💳 Payment Flow

User
  │
  ▼
Select Product / Membership
  │
  ▼
Create Razorpay Order
  │
  ▼
Razorpay Checkout
  │
  ▼
Payment
  │
  ▼
Payment Verification
  │
  ▼
Purchase / Payment Record

The repository contains separate Razorpay order and verification routes alongside payment and purchase models/APIs.

---

🗄️ Data Models

The application currently defines models for major business entities including:

- "User"
- "Product"
- "Cart"
- "CartItem"
- "Membership"
- "UserMembership"
- "Payment"
- "Notification"
- "EmailVerificationToken"
- "PasswordResetToken"
- "FrontRowUser"

---

⚙️ Getting Started

Prerequisites

Make sure you have the following installed:

- Node.js 20+
- npm
- MongoDB
- A MongoDB database/connection string
- Required third-party API credentials for the integrations you want to enable

---

1. Clone the repository

git clone https://github.com/rohititgithub/college-connect.git
cd college-connect

---

2. Install dependencies

npm install

---

3. Configure environment variables

Create a ".env.local" file in the project root.

# Database
MONGODB_URI=

# Authentication
JWT_SECRET=

# Email
RESEND_API_KEY=
EMAIL_FROM=

# Google Sheets
GOOGLE_CREDENTIALS=
SPREADSHEET_ID=
QUERIES_SHEET_ID=
COLLAB_SHEET_ID=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

«Important: Do not commit ".env.local", API keys, private keys, service-account credentials, or other secrets to GitHub.»

The repository explicitly expects "MONGODB_URI" for the MongoDB connection and uses Google credentials/spreadsheet IDs and Resend credentials in its integration utilities.

---

4. Start the development server

npm run dev

Open:

http://localhost:3000

---

📜 Available Scripts

Command| Description
"npm run dev"| Starts the development server
"npm run build"| Creates a production build
"npm run start"| Starts the production server
"npm run lint"| Runs ESLint

These scripts are defined directly in the project's "package.json".

---

🧪 Production Build

Before deployment, verify the application locally:

npm run lint
npm run build
npm run start

Make sure all required environment variables are configured in the deployment environment.

---

☁️ Deployment

Because Coll-Edge Connect is built with Next.js, it can be deployed on platforms that support Next.js applications.

A typical production workflow is:

GitHub
   │
   ▼
Deployment Platform
   │
   ├── Environment Variables
   ├── Next.js Build
   └── Production Server
            │
            ├── MongoDB
            ├── Razorpay
            ├── Resend
            └── Google Sheets API

For a Next.js deployment, ensure that production environment variables are configured before starting the application.

---

🔒 Security Considerations

The application includes several security-oriented implementation details:

- Password hashing with "bcryptjs"
- JWT-based authentication
- HTTP-only authentication cookie
- Server-side database access
- Environment-based secret management
- Protected user-specific API flows
- Server-side integration with external services

Never expose private API keys or service-account credentials in client-side code or public repositories.

---

📈 Future Improvements

Potential areas for further development include:

- Advanced role-based access control
- Admin analytics dashboard
- Advanced search and filtering
- More granular notification preferences
- Automated payment reconciliation
- Comprehensive automated testing
- API documentation
- CI/CD pipeline
- Performance monitoring
- Rate limiting
- Enhanced observability and logging
- More integrations for colleges and brands

---

🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Development workflow

# Create a new branch
git checkout -b feature/your-feature

# Make your changes
git add .

# Commit
git commit -m "feat: add your feature"

# Push
git push origin feature/your-feature

Then open a Pull Request against the main branch.

Before submitting a PR:

- Keep changes focused
- Follow the existing project structure
- Run linting
- Verify the production build
- Avoid committing secrets
- Add clear descriptions for significant changes

---

🧑‍💻 Author

Rohit Kumar

Full Stack / MERN Stack Developer

- GitHub: "@rohititgithub" (https://github.com/rohititgithub)
- Repository: "College Connect" (https://github.com/rohititgithub/college-connect)

---

📄 License

This project does not currently declare a license in the repository metadata.

If this project is intended for open-source distribution, consider adding an appropriate license such as MIT before presenting it as an open-source project.

---

⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Built with ❤️ using Next.js, TypeScript, MongoDB and modern web technologies.