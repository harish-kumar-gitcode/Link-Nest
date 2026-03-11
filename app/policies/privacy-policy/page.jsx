import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy policy | Privy Pad",
  description: "Privacy policy for data security and handling.",
};

export default function HomePage() {
  return (
    <>
      <div>
        <PageHeader />
        {/* HEADING */}
        <div>
          <h1 className="text-5xl text-center font-semibold">Privacy Policy</h1>
          {/* Privacy Policies go here. */}
          <div className="mx-[30%] text-justify">
            <div>
              <h1 className="mt-5 font-medium">
                Last Updated:{" "}
                <span className="text-red-600">
                  10<sup>th</sup> March 2026.
                </span>
              </h1>
              {/* INTRODUCTION */}
              <p>
                This Privacy Policy explains how Privy Pad collects, uses, and
                protects your personal information when you use our website and
                services.
              </p>
            </div>
            {/* CLAUSE 2.1 - INFORMATION COLLECTED */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.1 Information we Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <p className="mt-2">Personal Infomration</p>
              <ul className="list-disc mt-2 ml-8">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details</li>
                <li>Billing information</li>
              </ul>
              <p className="mt-2">Techinal Infomration</p>
              <ul className="list-disc mt-2 ml-8">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Website usage data</li>
              </ul>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.2 - HOW WE USE */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.2 How we Use your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc mt-2 ml-8">
                <li>Provide and manage our services</li>
                <li>Process payments</li>
                <li>Communicate with clients</li>
                <li>Improve our website and services</li>
                <li>Send important updates related to services</li>
              </ul>
              <p className="mt-2">
                We do not sell or rent your personal information to third
                parties.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.3 - COOKIES & TRACKING */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.3 Cookies and Tracking Technologies
              </h2>
              <p>Our website may use cookies to:</p>
              <ul className="list-disc mt-2 ml-8">
                <li>Improve user experience</li>
                <li>Analyze website traffic</li>
                <li>Remember user preferences</li>
              </ul>
              <p className="mt-2">
                Users can disable cookies through browser settings.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.4 - DATA PROTECTION */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.4 Data Protection
              </h2>
              <p>
                We implement reasonable security measures to protect your
                personal data from unauthorized access, misuse, or disclosure.
              </p>
              <p className="mt-2">
                However, no method of internet transmission is completely
                secure.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.5 - THIRD PARTY SERVICES */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.5 Third Party Services
              </h2>
              <p>We may use trusted third-party services such as:</p>
              <ul className="list-disc mt-2 ml-8">
                <li>Payment gateways</li>
                <li>Hosting providers</li>
                <li>Analytics tools</li>
              </ul>
              <p className="mt-2">
                These services may collect and process data according to their
                own privacy policies.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.6 - DATA RETENTITON */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.6 Data Retention
              </h2>
              <p>
                We retain personal data only as long as necessary for business
                purposes or legal obligations.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.7 - USER RIGHTS */}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">2.7 User Rights</h2>
              <p>Users have the right to:</p>
              <ul className="list-disc mt-2 ml-8">
                <li>Request access to their personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of personal data where applicable</li>
              </ul>
              <p className="mt-2">Requests can be made by contacting us.</p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.8 - CHANGE OF POLICY*/}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">
                2.8 Changes to Policy
              </h2>
              <p>We may update this Privacy Policy from time to time.</p>
              <p className="mt-2">
                Changes will be posted on this page with the updated date.
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
            {/* CLAUSE 2.9 - CONTACT*/}
            <div>
              <h2 className="text-xl mt-5 font-bold mb-2">2.9 Conatct Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, contact:
              </p>
              <p className="mt-2">
                Email: <strong>info@privypad.in</strong> <br />
                website: <strong>privypad.in</strong>
              </p>
            </div>
            <hr className="text-gray-300 mt-2" />
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
