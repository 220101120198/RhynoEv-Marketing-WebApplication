import React from 'react';
import '../../Styles/RefundPolicy.css'; // Import your CSS file for styling

const RefundPolicyPage = () => {
  return (
    <div className="refund-policy">
      <h1>Refund Policy</h1>

      <h2>Scope</h2>
      <p>
        This Refund Policy applies to purchases made on the Rhyno EV Product website.
      </p>

      <h2>Returns and Refunds</h2>
      <p>
        We offer a 30-day return policy for eligible products purchased directly from our website. To be eligible for a return, the product must be in its original condition and packaging.
      </p>
      <p>
        To initiate a return, please contact our customer support team within 30 days of your purchase date. We may require proof of purchase or additional information to process your return.
      </p>

      <h2>Refund Process</h2>
      <p>
        Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within a certain number of days, depending on your payment provider's policies.
      </p>

      <h2>Non-Refundable Items</h2>
      <p>
        Certain items are not eligible for return or refund, including:
      </p>
      <ul>
        <li>Downloadable software products.</li>
        <li>Gift cards.</li>
        <li>Customized or personalized products.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Refund Policy or our refund process, please contact us at [contact email or address].
      </p>
    </div>
  );
};

export default RefundPolicyPage;
