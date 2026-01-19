# Payment React App

A modern React application for handling payments using Stripe integration. Built with React 19, Material-UI, and Vite for fast development and production builds.

## 🚀 Features

- **Stripe Payment Integration**: Secure payment processing with Stripe Elements
- **Modern UI**: Clean and responsive design using Material-UI components
- **React Router**: Single-page application with client-side routing
- **Axios HTTP Client**: Configured with authentication and error handling
- **Environment Configuration**: Secure environment variable management
- **ESLint Configuration**: Code quality and consistency enforcement

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **UI Library**: Material-UI (MUI) 7.3.7
- **Payment Processing**: Stripe (@stripe/react-stripe-js, @stripe/stripe-js)
- **HTTP Client**: Axios 1.13.2
- **Routing**: React Router DOM 7.12.0
- **Code Quality**: ESLint with React hooks and import sorting plugins

## 📁 Project Structure

```
payment-react/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── axiosInstance.js       # Pre-configured Axios instance
│   ├── assets/
│   │   └── react.svg
│   ├── configs/
│   │   └── stripe.js              # Stripe configuration
│   ├── constants/
│   │   └── environment.js         # Environment variables
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   └── DashboardPage.jsx
│   │   └── Stripe/
│   │       ├── PaymentModal.jsx   # Payment form component
│   │       └── StripePage.jsx     # Main payment page
│   ├── App.css
│   ├── App.jsx                    # Main application component
│   ├── index.css
│   └── main.jsx                   # Application entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚡ Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Stripe account for payment processing

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd payment-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your configuration:

   ```env
   VITE_BACKEND_URL=your_backend_api_url
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

## 🔧 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check for code issues
- **`npm run lint:fix`** - Automatically fix ESLint issues where possible

## 💳 Payment Flow

1. **Initialize Payment**: Click "Pay Now" button on the main page
2. **Create Payment Intent**: Application calls backend to create Stripe payment intent
3. **Payment Form**: Stripe Elements form is displayed for secure payment input
4. **Process Payment**: Payment is processed securely through Stripe
5. **Handle Response**: Application handles success/error states

## 🔐 Security Features

- **Environment Variables**: Sensitive data stored in environment variables
- **Token Authentication**: Automatic Bearer token injection for API calls
- **Stripe Security**: PCI-compliant payment processing through Stripe
- **Request Timeout**: 10-second timeout for API calls to prevent hanging requests

## 🌐 API Integration

The application uses a pre-configured Axios instance with:

- Base URL construction with app name and version
- Automatic Bearer token authentication
- Request/response interceptors
- Error handling capabilities

## 📝 Configuration

### Stripe Setup

Configure your Stripe keys in the environment file:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

### Backend Integration

Set your backend API URL:

```env
VITE_BACKEND_URL=http://localhost:3000/api
```

The axios instance automatically constructs the full URL as:
`{VITE_BACKEND_URL}/payment/v1/stripe/create-intent`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React and Stripe**
