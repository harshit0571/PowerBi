"use client";
import { apiLink } from "@/app/api";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sec1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(apiLink + "/contact", formData);
      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("thanks for reaching us!!");
      // Optionally, display a success message or redirect the user
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (display error message, log to console, etc.)
    }
  };
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showRefunds, setShowRefunds] = useState(false);

  // Function to toggle visibility of popups
  const toggleTerms = () => setShowTerms(!showTerms);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);
  const toggleRefunds = () => setShowRefunds(!showRefunds);

  return (
    <div className="flex flex-col md:flex-row pt-24 max-w-7xl mx-auto mb-14 md:mb-24 items-center">
      <div className="w-full md:w-1/2 px-4 md:px-11 flex flex-col justify-between items-stretch">
        <div className="text-6xl font-bold">Contact Us</div>
        <div className="w-28 my-2 h-1 bg-[repeating-linear-gradient(135deg,transparent_0%,transparent_10%,#ff9635_10%,#ff9635_30%)]"></div>
        <div className="my-11">
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/location.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">
              Old Bishan Nagar, Patiala - 147001 , Punjab, India
            </span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/mail.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">coursesforcareers.tech@gmail.com</span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/phone.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">+91 9815260084</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-lg font-bold mr-8">Keep in touch</span>
          <Link
            href="https://www.linkedin.com/company/coursesforcareers-dot-tech/"
            className="ml-11"
          >
            <Image
              src="/Icons/linkedin.svg"
              width="50"
              height="50"
              className="w-8 h-8 mr-2 hover:scale-105 duration-300"
              alt="Social media Logo"
            />
          </Link>
          <Link href="https://www.instagram.com/coursesforcareers.tech?igsh=a2VoYmlrdXdsMHRr">
            <Image
              src="/Icons/instagram.png"
              width="50"
              height="50"
              className="w-8 h-8 mr-2 hover:scale-105 duration-300"
              alt="Social media Logo"
            />
          </Link>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.662316321894!2d76.41235146605409!3d30.34005069964686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910285e5d98f7cf%3A0xaab5e6def4c1ea78!2sOld%20Bishan%20Nagar%2C%20Patiala%2C%20Punjab%20147001!5e0!3m2!1sen!2sin!4v1711552674258!5m2!1sen!2sin"
            width="600"
            height="200"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col text-blue-400">
          <a href="#" onClick={toggleTerms}>
            Terms and Conditions
          </a>
          <a href="#" onClick={togglePrivacy}>
            Privacy
          </a>
          <a href="#" onClick={toggleRefunds}>
            Refunds/Cancellations
          </a>
        </div>
      </div>
      {showTerms && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="h-[450px] overflow-scroll">
              <h1 className="text-xl font-bold">
                {" "}
                Please Read The Following Carefully
              </h1>{" "}
              <br />
              These terms and conditions ("Terms and Conditions") govern the
              usage of the website coursesforcareers.tech ("Website"). In these
              Terms and Conditions, "Courses for Careers" is referred to as the
              "Company," "us," or "we." "You" refers to the user or a paying
              customer. If you represent a company or grant access to company
              products, you agree to bear full responsibility for any damages or
              indemnification that may rightfully be claimed against the
              customer. The Courses for Careers website (the 'Site'), the
              educational services provided through the site, and the content
              (the 'Products') are owned, operated, and maintained, as
              applicable, by Courses for Careers ('we', 'our', 'us', or the
              'Company'). The Site, Products, and Content are collectively
              referred to as the 'Company Products'. By (a) using or accessing
              the Company Products, including, but not limited to, downloading
              or accessing, (b) offering a Course through the Site or through
              Software; you agree to the terms and conditions outlined in these
              Terms of Use (the "Terms"). BY UTILIZING THIS WEBSITE OR ITS
              PRODUCTS AND SERVICES, YOU CONFIRM AND WARRANT THAT YOU HAVE READ,
              UNDERSTOOD, AND CONSENT TO BE BOUND BY THESE TERMS. THE COMPANY’S
              PRIVACY POLICY CAN BE ACCESSED AT
              coursesforcareers.tech/privacy-policy ('Privacy Policy'). IF YOU
              DO NOT AGREE TO THESE TERMS, YOU MUST REFRAIN FROM USING – AND ARE
              NOT PERMITTED TO USE – ALL OR ANY PART OF THE COMPANY’S WEBSITE
              AND ITS PRODUCTS OR SERVICES (AS DEFINED BELOW).{" "}
              <h2 className="font-bold my-2">
                Please read them carefully before you use the services of this
                site.
              </h2>{" "}
              <ul className="list-disc gap-2 flex flex-col">
                <li>
                  You are expected to utilize this platform in a lawful manner,
                  adhering to the terms and conditions outlined herein and
                  abiding by the privacy policy.
                </li>
                <li>
                  Under no circumstances will Courses for Careers be held liable
                  for alterations in the content provided on the website or
                  through its offerings, encompassing errors, omissions, or any
                  resultant loss or damage arising from the use or exposure to
                  such content, including materials disseminated via email,
                  blogs, or other resources.
                </li>
                <li>
                  Our services are accessible to all internet users free of
                  charge. However, we disclaim responsibility for expenses
                  incurred due to hardware, software, or internet service
                  provider fees.
                </li>
                <li>
                  Users are solely responsible for ensuring the proper
                  functioning of their computer hardware and internet
                  connectivity.
                </li>
                <li>
                  Access to certain sections of the site may necessitate the use
                  of login credentials, and Courses for Careers retains the
                  right to restrict access to services for users who fail to
                  comply with these requirements.
                </li>
                <li>
                  While we endeavor to provide uninterrupted service, we do not
                  guarantee continuous access.
                </li>
                <li>
                  Courses for Careers assumes no responsibility beyond specified
                  limits for network or server issues encountered by users.
                </li>
              </ul>
              <ul className="list-disc gap-2 flex flex-col">
                <li>
                  You are expected to utilize this platform in a lawful manner,
                  adhering to the terms and conditions outlined herein and
                  abiding by the privacy policy.
                </li>
                <li>
                  Under no circumstances will Courses for Careers be held liable
                  for alterations in the content provided on the website or
                  through its offerings, encompassing errors, omissions, or any
                  resultant loss or damage arising from the use or exposure to
                  such content, including materials disseminated via email,
                  blogs, or other resources.
                </li>
                <li>
                  Our services are accessible to all internet users free of
                  charge. However, we disclaim responsibility for expenses
                  incurred due to hardware, software, or internet service
                  provider fees.
                </li>
                <li>
                  Users are solely responsible for ensuring the proper
                  functioning of their computer hardware and internet
                  connectivity.
                </li>
                <li>
                  Access to certain sections of the site may necessitate the use
                  of login credentials, and Courses for Careers retains the
                  right to restrict access to services for users who fail to
                  comply with these requirements.
                </li>
                <li>
                  While we endeavor to provide uninterrupted service, we do not
                  guarantee continuous access.
                </li>
                <li>
                  Courses for Careers assumes no responsibility beyond specified
                  limits for network or server issues encountered by users.
                </li>
              </ul>
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={toggleTerms}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Popup for Privacy Policy */}
      {showPrivacy && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="h-[450px] overflow-scroll">
              This Privacy Policy outlines the privacy practices of Courses For
              Careers (“We” or “Us”) concerning your use of the online platform
              www.coursesforcareers.tech (“Website”). It details how we collect,
              store, use, and safeguard your personal information across our
              Website, as well as your options regarding access, use, and
              correction of personal data, and your rights regarding your
              information. By accessing www.coursesforcareers.tech, you agree to
              adhere to the terms and conditions laid out in this Privacy
              Policy. Please review this Privacy Policy carefully, as your use
              of the Website signifies your understanding and compliance with
              its provisions. If you do not agree with the terms and conditions
              set forth herein, please refrain from accessing the Website. We
              regularly review and update this Privacy Policy to ensure its
              relevance and accuracy. As a visitor, please be aware that this
              Policy is subject to change without prior notice. To stay informed
              of any modifications, we encourage you to periodically review this
              Policy. For the purposes of this Policy, "Personal Data'' refers
              to any information that can be used to identify you as an
              individual. <br />
              <h2 className="font-bold">1. COLLECTION OF INFORMATION</h2> As a
              visitor, you are welcome to explore our Website to learn more
              about Courses For Careers. Providing Personal Data is not
              mandatory if you are solely visiting. During your visit to the
              Site, we collect and retain certain information to enhance
              security, analyze advancements, and administer the Website to
              enhance customer experience. We employ this information to
              scrutinize traffic patterns on our Website to optimize benefits
              for our visitors. Personal Data is only collected when you
              register with us, express interest in obtaining information about
              our products and services, engage in activities on our Website, or
              contact us. We will only collect your Personal Information when
              there is a legitimate and valid reason to do so, such as to comply
              with regulatory and legal obligations, to perform our contract
              with you, or to take necessary steps at your request before
              entering into a legal contract. Additionally, we may collect
              Personal Information based on our legitimate interests or with
              your consent. Legitimate interest refers to when we have a valid
              commercial or business reason to utilize your information. In
              specific cases, we may also have a legal obligation to collect
              personal data from you or require personal information to protect
              your interests or those of others (e.g., to prevent payment fraud
              or confirm identity). Our primary goal in collecting your Personal
              Information is to offer you a secure, efficient, seamless, and
              tailored experience. This enables us to provide online courses,
              study materials, and tutorials that are highly likely to meet your
              needs and to customize our Website to enhance your experience. The
              information we obtain from you assists us in personalizing and
              continuously improving customer experience on our Website. We do
              not voluntarily share this information with any third parties, nor
              do we utilize it for any purposes other than those outlined
              herein. To register on our website or complete the purchase
              process of any of our courses, we may collect the following
              information voluntarily provided by you through our contact forms,
              chat, or phone sessions, such as:
              <ul className="list-disc">
                <li>
                  <b>Personal Details:</b> Such as name, email address,
                  photograph, contact address, contact number, IP address, or
                  geographic location.
                </li>
                <li>
                  <b>Identity Information:</b> Including mark sheets,
                  Aadhar/Voter ID/Passport details.{" "}
                </li>
                <li>
                  <b>Billing Information:</b>
                  Such as credit/debit card numbers and billing addresses.{" "}
                </li>
                <li>
                  <b>User Credentials:</b> Including usernames or passwords.
                </li>
                <li>
                  <b>User Preferences:</b> Ratings, reviews, syllabus/course
                  preferences, and account settings.{" "}
                </li>
                <li>
                  <b>Customer Interaction Data:</b> Information provided to us
                  through interactions with customer service, surveys, or
                  promotions.
                </li>
              </ul>
              &nbsp;&nbsp; We gather data concerning your engagements with us,
              including details about the device (such as laptop, computer,
              mobile device) utilized to access our services. This encompasses
              your activities on our platform, search inquiries, interactions
              with customer support, and, if you engage in phone communication
              with us, your contact number along with call recordings.
              Additionally, we collect device IDs or other distinct identifiers,
              characteristics of your device and software, connection
              particulars, page view statistics, referral URLs, IP address,
              browser data, web server logs, and information gathered through
              cookie usage. Leveraging backend applications, we endeavor to
              enhance service provision and foster quality interactions with
              instructors tailored to your preferences. There may be instances
              where we request this information, such as when you participate in
              contests or marketing promotions conducted by us and/or our
              affiliates. For functionalities necessitating payment, appropriate
              options will be presented. In the event of credit or debit card
              transactions, you will be directed to the registered payment
              gateways Razorpay or Paytm. It is possible for you to securely
              store your payment details, such as card numbers, with these
              gateways, inaccessible to us. All financial transactions are
              conducted through secure payment gateway providers. Upon accessing
              any of our paid offerings, we retain information about visited web
              pages on our servers, aiding in tracking completed tasks and
              pending items for your convenience. User's full names and display
              pictures may be publicly visible on the website. Courses for
              Careers may request further details like billing information,
              addresses, and certificates based on the user's profile and
              service requirements. Employing technologies like cookies, clear
              gifs, and log files, we endeavor to comprehend your interactions
              with our platform and services to deliver an optimized experience.
              <br />
              <h2 className="font-bold">
                2. USAGE AND RETENTION OF INFORMATION
              </h2>{" "}
              We utilize the personal data we gather, including your Personal
              Data, where it is essential for delivering the requested services,
              meeting legal obligations, safeguarding rights, or for customary
              business operations outlined in this Policy. Your personal
              information is employed to furnish, assess, and enhance our
              offerings, tailor a personalized experience on our platform,
              communicate with you regarding your account and our services,
              provide customer support, deliver customized marketing materials,
              and address any fraudulent or unlawful activities. Moreover, we
              utilize your personal information to ascertain your general
              geographical location, offer localized course content and classes,
              make recommendations, identify your Internet Service Provider
              (ISP), and facilitate prompt and effective responses to inquiries
              while upholding our terms. Communication with you regarding our
              services, such as via email, push notifications, text messaging,
              and online messaging channels, allows us to furnish information
              about the latest features, available content, offers, promotions,
              surveys, and assist with operational requests like password
              resets.
              <h2 className="font-bold">3. COMMUNITY</h2> Courses for Careers is
              a community platform where we provide various features enabling
              members to connect and communicate in public or semi-public areas,
              including Forums and Teams. We advise exercising discretion before
              posting in these community spaces or disclosing personal
              information to others on Courses for Careers. It's important to
              understand that any personal information you share in these spaces
              may be accessed, collected, or utilized by others, potentially
              leading to unsolicited messages being sent to you.
              <h2 className="font-bold">
                4. SHARING AND DISCLOSING PERSONAL INFORMATION
              </h2>{" "}
              Courses for Careers utilizes third-party Service Providers to
              execute tasks on our behalf or aid in delivering services to you.
              These Service Providers are enlisted for promotional,
              infrastructure, and IT services, as well as for personalizing and
              optimizing our platform, processing payment transactions, offering
              customer support, analyzing and improving data, and conducting
              consumer surveys. During the provision of these services, these
              Service Providers may have access to your personal or other
              pertinent information. However, we strictly prohibit them from
              utilizing or disclosing your personal information except in the
              context of providing their designated services.
              <h2 className="font-bold">5. SECURITY</h2> Courses for Careers is
              committed to taking comprehensive precautions to safeguard
              personal information, both in online and offline contexts. We
              employ security measures aimed at minimizing the risks of data
              loss and misuse. Our platform is equipped with standard SSL
              certification, ensuring a secure connection between our server and
              users for any data transmission or interaction. Protective
              measures include firewalls, data encryption, physical access
              controls at our data centers, and authorization controls for
              information access. User passwords are encrypted using 64-bit
              encryption and securely stored, considering that users often reuse
              passwords across multiple platforms, mitigating the potential for
              theft, piracy, or unauthorized access. Should you suspect any
              compromise of your Courses for Careers account, please reach out
              to us via email at coursesforcareers.tech@gmail.com
              <h2 className="font-bold uppercase">
                6. Changes to the policy
              </h2>{" "}
              Courses for Careers retains the authority to modify this Privacy
              Policy as deemed necessary periodically or as mandated by law. Any
              revisions will be promptly posted on the website, and your initial
              use of the website following these changes will signify your
              acceptance of the updated terms of the Policy.
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={togglePrivacy}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Popup for Refunds/Cancellations */}
      {showRefunds && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Refunds/Cancellations</h2>
            <div className="h-[450px] overflow-scroll">
              Refund Eligibility: CoursesForTech offers refunds under the
              following conditions: If requested within 7 days of course
              enrollment. If the course exam is failed after completing all
              course requirements. Refund Process: Refund requests must be
              submitted in writing to CoursesForTech's support team. For exam
              failure refunds, proof of completion of all course requirements
              and exam failure may be required. Cancellation Policy: You may
              cancel your course enrollment at any time. If cancellation occurs
              within the first 7 days of enrollment, you are eligible for a full
              refund. After the initial 7-day period, refunds are only available
              if you fail the course exam after completing all requirements.
              Exam Failure Refunds: To qualify for a refund due to exam failure,
              you must have completed all course requirements prior to taking
              the exam. Proof of exam failure may be required to process the
              refund. Processing Time: Refunds will be processed within 30 days
              of receiving a valid refund request. Exceptions: Refunds will not
              be provided for failure to pass an exam if you have not completed
              all course requirements. Refunds will not be provided for any
              other reason beyond those stated in this policy. Contact
              Information: For refund requests or further assistance, please
              contact CoursesForTech's support team at
              coursesforcareers.tech@gmail.com.
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={toggleRefunds}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full md:w-1/2 px-0 md:px-11">
        <div className="bg-white md:shadow-2xl rounded-2xl px-4 md:px-11 py-6">
          <div className="text-3xl font-bold my-8">Have Questions?</div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Subject"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light "
              placeholder="Your Message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="py-2 px-6 rounded-full bg-[#ff9635] text-white text-lg font-bold my-3"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
