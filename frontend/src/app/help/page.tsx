import Link from "next/link";
export const metadata = { title: "A little help" };
export default function Help() {
  return (
    <div className="narrow-page help-page">
      <span className="eyebrow">A LITTLE HELP, WHEN YOU NEED IT</span>
      <h1>
        Good questions.
        <br />
        Simple answers.
      </h1>
      <p className="muted">
        These are the proposed store policies for this demo.
      </p>
      {[
        [
          "Where do you deliver?",
          "Across Pakistan, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot and Gujranwala. Delivery normally takes 3–5 working days after confirmation.",
        ],
        [
          "How much does delivery cost?",
          "Delivery is Rs. 250. For orders of Rs. 5,000 or more, delivery is free. The exact total is shown before you place your order.",
        ],
        [
          "How can I pay?",
          "Cash on delivery is available. This is currently a demonstration store; no payment is collected and no goods are dispatched. Online payment integrations will be added when the store is ready to launch.",
        ],
        [
          "Can I return something?",
          "The proposed return window is 7 days from delivery for unused products in their original packaging. The live store will provide a support contact and a returns request process before launch.",
        ],
        [
          "How do I track an order?",
          "Sign in and open My orders in your account. The order timeline shows Confirmed, Packed, Shipped and Delivered. Courier tracking will be connected before launch.",
        ],
        [
          "Is my Google account supported?",
          "The Google sign-in button is connected to Supabase. Google authentication works once the project owner enables the Google provider and configures its OAuth credentials.",
        ],
      ].map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <Link href="/shop" className="button">
        Back to the good things ↗
      </Link>
    </div>
  );
}
