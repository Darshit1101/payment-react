import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import PaymentFailed from "./pages/Stripe/PaymentStatus/PaymentFailed";
import PaymentProcessing from "./pages/Stripe/PaymentStatus/PaymentProcessing";
import PaymentSuccess from "./pages/Stripe/PaymentStatus/PaymentSuccess";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/payment-processing" element={<PaymentProcessing />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </Router>
  );
}

export default App;
