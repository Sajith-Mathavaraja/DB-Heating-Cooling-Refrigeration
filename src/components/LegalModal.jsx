import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Phone, MapPin } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col max-h-[85vh] z-10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-gray-200 flex items-center justify-between bg-lightBg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-hvac-blue-soft text-hvac-blue flex items-center justify-center shrink-0">
              {isTerms ? <FileText className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                {isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
              <p className="text-xs text-mutedText">
                Effective Date: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:text-navy-900 hover:bg-gray-200/80 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          
          {isTerms ? (
            /* TERMS & CONDITIONS CONTENT */
            <>
              <p className="font-medium text-base text-navy-900">
                Welcome to DB Heating, Cooling & Refrigeration. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-navy-900">1. Business Identity</h3>
                <p>
                  These Terms and Conditions govern your use of the services provided by <strong>DB Heating, Cooling & Refrigeration</strong>, located at 406 284 Crt, Greenville, NY 12083. Contact: 518-520-4822.
                </p>

                <h3 className="text-lg font-bold text-navy-900">2. Age Requirement (18+)</h3>
                <p>
                  By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.
                </p>

                <h3 className="text-lg font-bold text-navy-900">3. Terminology</h3>
                <p>
                  “Client,” “You,” and “Your” refers to the user of this website. “The Company,” “We,” “Our,” and “Us” refers to DB Heating, Cooling & Refrigeration.
                </p>

                <h3 className="text-lg font-bold text-navy-900">4. SMS Messaging Terms of Service</h3>
                <div className="pl-4 space-y-2 border-l-2 border-hvac-blue/30">
                  <p><strong>4a. Program Description & Message Types:</strong> By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from DB Heating, Cooling & Refrigeration. Messages may include free estimate confirmations, appointment reminders, project status updates, customer support, and seasonal service announcements related to our heating, cooling, HVAC, and commercial refrigeration services.</p>
                  <p><strong>4b. Message Frequency:</strong> Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.</p>
                  <p><strong>4c. Message & Data Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier. DB Heating, Cooling & Refrigeration is not responsible for carrier charges.</p>
                  <p><strong>4d. How to Opt Out (STOP):</strong> You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message.</p>
                  <p><strong>4e. How to Get Help (HELP):</strong> For help with our SMS program, reply HELP to any message or contact us directly at 518-520-4822.</p>
                  <p><strong>4f. Carrier Liability Disclaimer:</strong> Mobile carriers are not liable for delayed or undelivered messages. DB Heating, Cooling & Refrigeration cannot guarantee delivery of SMS messages.</p>
                  <p><strong>4g. Supported Carriers:</strong> Our SMS program is supported by all major U.S. wireless carriers including AT&T, Verizon, T-Mobile, and Sprint.</p>
                </div>

                <h3 className="text-lg font-bold text-navy-900">5. Cookies</h3>
                <p>
                  We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.
                </p>

                <h3 className="text-lg font-bold text-navy-900">6. Intellectual Property & License</h3>
                <p>
                  Unless otherwise stated, DB Heating, Cooling & Refrigeration owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.
                </p>

                <h3 className="text-lg font-bold text-navy-900">7. Comments & User Content</h3>
                <p>
                  DB Heating, Cooling & Refrigeration reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.
                </p>

                <h3 className="text-lg font-bold text-navy-900">8. Content Liability</h3>
                <p>
                  We are not responsible for content that appears on external websites linking to us. You agree to defend and protect DB Heating, Cooling & Refrigeration against any claims arising from your website or digital properties.
                </p>

                <h3 className="text-lg font-bold text-navy-900">9. Disclaimer</h3>
                <p>
                  To the maximum extent permitted by applicable law, DB Heating, Cooling & Refrigeration excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage arising from the use of our website or services.
                </p>

                <h3 className="text-lg font-bold text-navy-900">10. Changes to These Terms</h3>
                <p>
                  We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised “Last Updated” date.
                </p>

                <h3 className="text-lg font-bold text-navy-900">11. Contact Information</h3>
                <div className="bg-lightBg p-4 rounded-xl border border-gray-200 space-y-1">
                  <p className="font-bold text-navy-900">DB Heating, Cooling & Refrigeration</p>
                  <p>Address: 406 284 Crt, Greenville, NY 12083</p>
                  <p>Phone: 518-520-4822</p>
                </div>
              </div>
            </>
          ) : (
            /* PRIVACY POLICY CONTENT */
            <>
              <p className="font-medium text-base text-navy-900">
                DB Heating, Cooling & Refrigeration ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-navy-900">1. Information We Collect</h3>
                <p>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name</li>
                  <li>Mailing or service address</li>
                  <li>Email address</li>
                  <li>Mobile phone number</li>
                  <li>Service request details and equipment descriptions</li>
                  <li>Communication history and preferences</li>
                </ul>

                <h3 className="text-lg font-bold text-navy-900">2. SMS / Text Message Communications</h3>
                <div className="pl-4 space-y-2 border-l-2 border-hvac-blue/30">
                  <p><strong>2a. How We Collect Your Mobile Number:</strong> We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or direct communications. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS communications from DB Heating, Cooling & Refrigeration.</p>
                  <p><strong>2b. Types of Messages We Send:</strong> You may receive recurring automated text messages regarding free estimate confirmations, appointment reminders, project status updates, customer support, and seasonal HVAC/refrigeration announcements.</p>
                  <p><strong>2c. Message Frequency:</strong> Message frequency varies based on your interactions. You may receive up to 4–8 messages per month.</p>
                  <p><strong>2d. Message & Data Rates:</strong> Message and data rates may apply based on your mobile carrier plan.</p>
                  <p><strong>2e. How to Opt Out (STOP):</strong> You may cancel SMS messages at any time by replying STOP to any text message.</p>
                  <p><strong>2f. How to Get Help (HELP):</strong> Reply HELP to any message or call 518-520-4822.</p>
                </div>

                <div className="p-4 rounded-xl bg-hvac-blue-soft border border-hvac-blue/30 my-4">
                  <h3 className="text-lg font-extrabold text-navy-900 mb-2">3. Mobile Information & SMS Consent — No Third-Party Sharing</h3>
                  <p className="font-bold text-navy-900">
                    No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.
                  </p>
                  <p className="text-xs text-mutedText mt-2">
                    All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-navy-900">4. How We Use Your Information</h3>
                <p>We use the personal information we collect to provide and manage heating, cooling, HVAC, and refrigeration services, respond to inquiries, schedule appointments, send reminders, improve service quality, and comply with applicable laws.</p>

                <h3 className="text-lg font-bold text-navy-900">5. Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience.</p>

                <h3 className="text-lg font-bold text-navy-900">6. Data Security</h3>
                <p>We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.</p>

                <h3 className="text-lg font-bold text-navy-900">7. Data Retention</h3>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law.</p>

                <h3 className="text-lg font-bold text-navy-900">8. Your Privacy Rights</h3>
                <p>You may request access, correction, or deletion of your personal data (including mobile number and SMS consent record) by contacting us at 518-520-4822.</p>

                <h3 className="text-lg font-bold text-navy-900">9. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time with a revised “Last Updated” date.</p>

                <h3 className="text-lg font-bold text-navy-900">10. Contact Information</h3>
                <div className="bg-lightBg p-4 rounded-xl border border-gray-200 space-y-1">
                  <p className="font-bold text-navy-900">DB Heating, Cooling & Refrigeration</p>
                  <p>Address: 406 284 Crt, Greenville, NY 12083</p>
                  <p>Phone: 518-520-4822</p>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-gray-200 bg-lightBg flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-mutedText">
            <MapPin className="w-4 h-4 text-hvac-blue shrink-0" />
            <span>406 284 Crt, Greenville, NY 12083</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
