import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Privy Pad",
  description: "Terms and Conditions for users of the site.",
};

export default function HomePage() {
  return (
    <>
      <PageHeader />
      <div>
        <h1 className="text-center text-5xl font-semibold">
          Terms & Conditions
        </h1>
        {/* Terms and conditions go here. */}
        <div className="mx-[30%] text-justify">
          {/* INTRODUCTION */}
          <div>
            <h2 className="text-left mt-5 font-medium">
              Updated on{" "}
              <span className="text-red-600">
                10<sup>th</sup> March 2026.
              </span>
            </h2>
            <p className="text-justify mt-2">
              Welcome to <b>Privy Pad</b>. These Terms and Conditions govern
              your use of our website and services. By accessing or using our
              services, you agree to comply with these Terms. <br /> <br /> If
              you do not agree with these terms, please do not use our website
              or services
            </p>
          </div>
          {/* CLAUSE 1.1 - DEFINITION */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">1.1 Definitions</h2>
            <p className="mt-1">For the purpose of these Terms:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Company</strong> refers to <strong>Privy Pad</strong>
              </li>
              <li>
                <strong>Website</strong> refers to <strong>privypad.in</strong>
              </li>
              <li>
                <strong>Service</strong> refers to the services offered by the
                Company through the Website
              </li>
              <li>
                <strong>User, Client, </strong>or <strong>You</strong> refers to
                any individual or entity accessing or using our services.
              </li>
            </ul>
          </div>
          <hr className="text-gray-300 mt-2" />
          {/* CLAUSE 1.2 - USE OF SERVICES */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.2 Use of Our Services
            </h2>
            <p className="mt-1">By using our services, you agree to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Provide accurate and complete information when purchasing
                services
              </li>
              <li>Use the services only for lawful purposes</li>
              <li>Not misuse or attempt to disrupt our website or services</li>
              <li>
                Not copy, duplicate, or resell our services without
                authorization
              </li>
            </ul>
            <p className="mt-2">
              The Company reserves the right to refuse service to anyone at its
              discretion.
            </p>
          </div>
          <hr className="text-gray-300 mt-2" />
          {/* CLAUSE 1.3 - SERVICE AGREEMENT */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.3 Service Agreement
            </h2>
            <p className="mt-1">
              When a client purchases a service from the Company:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>The Company agrees to deliver the service as described.</li>
              <li>
                The client agrees to provide necessary information required to
                complete the project.
              </li>
              <li>
                Delays caused by the client in providing necessary materials may
                affect the delivery timeline.
              </li>
            </ul>
          </div>
          <hr className="text-gray-300 mt-2" />
          {/* CLAUSE 1.4 - INTELLECTUAL PROPERTY */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.4 Intellecutual Property
            </h2>
            <p className="mt-1">
              All content, design, logos, graphics, and materials on this
              website are the intellectual property of{" "}
              <strong>Privy Pad</strong>, unless otherwise stated.
            </p>
            <p className="mt-3">
              Clients will receive ownership of deliverables
              <strong> only after full payment has been made</strong>, unless
              otherwise agreed in writing.
            </p>
            <p className="mt-3">
              The Company retains the right to showcase completed work in its
              portfolio.
            </p>
          </div>
          <hr className="text-gray-300 mt-2" />
          {/* CLAUSE 1.5 - LIMITATION OF LIABILITY */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.5 Limitation of Liability
            </h2>
            <p className="mt-1">The Company shall not be held liable for:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Any indirect or consequential damages</li>
              <li>
                Loss of data, business interruption, or financial loss arising
                from the use of our services
              </li>
              <li>
                Issues caused by third-party platforms, hosting providers, or
                integrations
              </li>
            </ul>
            <p className="mt-3">Use of our services is at your own risk.</p>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.6 - THIRD PARTY SERVICES */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.6 Third Party Services
            </h2>
            <p className="mt-1">
              Our services may involve integration with third-party platforms
              such as:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Hosting providers</li>
              <li>Payment gateways</li>
              <li>Payment gateways</li>
              <li>Third-party APIs</li>
            </ul>
            <p className="mt-3">
              The Company is not responsible for issues caused by these
              third-party services.
            </p>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.7 - PAYMENT TERMS */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">1.7 Payment Terms</h2>
            <p className="mt-1">
              All services must be paid for according to the agreed pricing
              terms.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Suspension of services</li>
              <li>Delay in project delivery</li>
              <li>Termination of the service agreement</li>
            </ul>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.8 - REFUND Policy */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">1.8 Refund Policy</h2>
            <p className="mt-1">
              Refunds are subject to the conditions outlined in our Refund
              Policy, which forms part of these Terms and Conditions
            </p>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.9 - TERMINATION */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">1.9 Termination</h2>
            <p className="mt-1">
              The Company reserves the right to suspend or terminate services
              if:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>The user violates these Terms</li>
              <li>Fraudulent or illegal activity is suspected</li>
              <li>Payment obligations are not fulfilled</li>
            </ul>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.10 - GOVERNING LAW */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">1.10 Governing Law</h2>
            <p className="mt-1">
              These Terms shall be governed and interpreted in accordance with
              the laws of <strong>India.</strong>
            </p>
            <p className="mt-1">
              Any disputes shall be subject to the jurisdiction of the courts
              located in <strong>Bangalore,India</strong>
            </p>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.11 - CHANGES TO TERMS */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.11 Changes to these Terms
            </h2>
            <p className="mt-1">
              The Company reserves the right to modify these Terms at any time.
            </p>
            <p className="mt-1">
              Updates will be posted on this page with the updated date.
            </p>
          </div>
          <hr className="mt-2 text-gray-300" />
          {/* CLAUSE 1.12 - CONTACT INFORMATION */}
          <div>
            <h2 className="text-xl mt-5 font-bold mb-2">
              1.12 Contact Information
            </h2>
            <p className="mt-1">
              For questions regarding these Terms, contact:
            </p>
            <p className="mt-4">
              Email: <strong>info@privypad.in</strong> <br />
              Website: <strong>privypad.in</strong>
            </p>
          </div>
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </>
  );
}
