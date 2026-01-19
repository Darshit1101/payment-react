import { VITE_STRIPE_PUBLISHABLE_KEY } from "../constants/environment.js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(VITE_STRIPE_PUBLISHABLE_KEY);
