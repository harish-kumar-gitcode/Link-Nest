import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund policy | Privy Pad",
  description: "Terms and Conditions for users of the site.",
};
export default function HomePage() {
  return (
    <>
      <div>
        <PageHeader />
        <div>
          <h1 className="text-center text-5xl font-medium">Refund Policy</h1>
          <div className="text-justify mt-5 mx-[30%]">
            {/* INTRODUCTION */}
            <div>
              <h2 className="font-medium">
                Last Updated:{" "}
                <span className="text-red-600">
                  10<sup>th</sup> March 2026.
                </span>
              </h2>
              <p>
                This Refund Policy outlines the conditions under which refunds
                may be granted for services purchased from{" "}
                <strong>Privy Pad</strong>.
              </p>
            </div>

            {/* CLAUSE 3.1 - ELIGIBILITY */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.1 Eligibility for Refund
              </h2>
              <p>
                Clients may request a refund{" "}
                <strong>
                  only if the requested webpage or service has not been created
                  within 15 days of purchase.
                </strong>
              </p>
              <p className="mt-2">
                Refund requests must be submitted within{" "}
                <strong>15 days from the date of purchase.</strong>
              </p>
            </div>
            <hr className="text-gray-300 mt-3" />

            {/* CLAUSE 3.2 - NON REFUNDABLE CONDITIONS */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.2 Non-Refundable Situations
              </h2>
              <p>
                Refunds will <strong>not be provided</strong> in the following
                cases:
              </p>
              <ul className="list-disc ml-8 mt-3">
                <li>
                  The webpage or service has already been completed or delivered
                </li>
                <li>The client has approved the completed work</li>
                <li>
                  The client fails to provide required information or materials
                  necessary to complete the service
                </li>
                <li>The refund request is made after 15 days of purchase</li>
              </ul>
            </div>
            <hr className="text-gray-300 mt-3" />
            {/* CLAUSE 3.3 - REFUND PROCESS */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.3 Refund Request Process
              </h2>
              <p>
                To request a refund, the client must contact the Company with:
              </p>
              <ul className="list-disc ml-8 mt-3">
                <li>Name</li>
                <li>Order details</li>
                <li>Date of purchase</li>
                <li>Reason for refund request</li>
              </ul>
              <p className="mt-3">
                Refund requests can be submitted via: <br />
                Email:<strong> support@privypad.in</strong>
              </p>
            </div>
            <hr className="text-gray-300 mt-3" />
            {/* CLAUSE 3.4 - REFUND PROCESSING */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.4 Processing of Refunds
              </h2>
              <p>If a refund request is approved:</p>
              <ul className="list-disc ml-8 mt-3">
                <li>
                  Refunds will be processed within{" "}
                  <strong>5–10 business days</strong>
                </li>
                <li>
                  Refunds will be issued using the{" "}
                  <strong>original payment method.</strong>
                </li>
              </ul>
            </div>
            <hr className="text-gray-300 mt-3" />
            {/* CLAUSE 3.5 - SERVICE CANCELLATION */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.5 Service Cancellation
              </h2>
              <p>Clients may cancel services before the work has started.</p>
              <p className="mt-3">
                Once work has commenced, refunds may not be available unless the
                15-day delivery condition is not met.
              </p>
            </div>
            <hr className="text-gray-300 mt-3" />
            {/* CLAUSE 3.6 - CHANGE OF POLICY */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                3.6 Changes to Refund Policy
              </h2>
              <p>
                The Company reserves the right to update this Refund Policy at
                any time.
              </p>
              <p className="mt-3">
                Changes will be posted on this page with the updated date.
              </p>
            </div>
            <hr className="text-gray-300 mt-3" />
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
