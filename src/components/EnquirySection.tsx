import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { CONTACT_PLACEHOLDERS } from '../data/content';
import type { EnquiryFormState, ProductCategoryType } from '../types';
import './EnquirySection.css';

interface EnquirySectionProps {
  initialProductName?: string;
  initialCategory?: ProductCategoryType | 'both' | 'custom';
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialProductName = '',
  initialCategory = 'both',
}) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    fullName: '',
    email: '',
    interestCategory: initialCategory,
    quantity: '1',
    message: '',
    company: '',
    country: '',
    productName: initialProductName,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormState | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.interestCategory) {
      newErrors.interestCategory = 'Please select a product category.';
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Please select or enter the estimated quantity.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Capture submitted data for preview display
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      interestCategory: 'both',
      quantity: '1',
      message: '',
      company: '',
      country: '',
      productName: '',
    });
    setErrors({});
    setSubmittedData(null);
  };

  // Generate mailto link so user can immediately send an inquiry via their desktop/mobile email client
  const generateMailtoLink = () => {
    if (!submittedData) return '#';
    const subject = encodeURIComponent(
      `Inquiry: ${submittedData.productName || submittedData.interestCategory} - ${submittedData.fullName}`
    );
    const body = encodeURIComponent(
      `Name: ${submittedData.fullName}\n` +
      `Email: ${submittedData.email}\n` +
      `Company: ${submittedData.company || 'N/A'}\n` +
      `Country: ${submittedData.country || 'N/A'}\n` +
      `Category: ${submittedData.interestCategory}\n` +
      `Product: ${submittedData.productName || 'General Inquiry'}\n` +
      `Quantity: ${submittedData.quantity}\n\n` +
      `Message / Requirements:\n${submittedData.message}\n`
    );
    return `mailto:export@gauriexports.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="enquiry-section" aria-labelledby="enquiry-heading">
      <div className="site-container">
        <div className="enquiry-layout">
          {/* Left Column: Direct Contact & Information */}
          <div className="enquiry-info-pane">
            <span className="eyebrow">Customer & Trade Inquiries</span>
            <h2 id="enquiry-heading" className="enquiry-title">
              Request a Quotation
            </h2>
            <span className="accent-line" aria-hidden="true"></span>
            <p className="enquiry-lead">
              Interested in our bathtubs or decorative brassware? Complete the form to receive
              product dimensions, finish options, and estimated pricing tailored to your quantity.
            </p>

            <div className="contact-details-box">
              <h4 className="contact-box-title">Contact Placeholders</h4>
              <p className="contact-box-disclaimer">
                The following direct contact details are placeholders pending official company verification:
              </p>

              <div className="contact-row">
                <Mail size={16} className="contact-icon" aria-hidden="true" />
                <span className="contact-val">{CONTACT_PLACEHOLDERS.email}</span>
              </div>

              <div className="contact-row">
                <Phone size={16} className="contact-icon" aria-hidden="true" />
                <span className="contact-val">{CONTACT_PLACEHOLDERS.phonePlaceholder}</span>
              </div>

              <div className="contact-row">
                <MapPin size={16} className="contact-icon" aria-hidden="true" />
                <span className="contact-val">{CONTACT_PLACEHOLDERS.addressPlaceholder}</span>
              </div>
            </div>

            <div className="backend-notice-box">
              <div className="notice-header">
                <AlertCircle size={16} className="notice-icon" aria-hidden="true" />
                <strong>Website Integration Notice</strong>
              </div>
              <p className="notice-body">
                This website currently operates in front-end preview mode. Form submissions validate
                locally in the browser. A real backend service or email API (such as EmailJS,
                Formspree, or custom webhook) is required to route inquiries directly to your inbox.
              </p>
            </div>
          </div>

          {/* Right Column: Clean, Streamlined Form */}
          <div className="enquiry-form-pane">
            <div className="form-card">
              {submittedData ? (
                <div className="submission-success" role="status" aria-live="polite">
                  <CheckCircle2 size={44} className="success-icon" />
                  <h3 className="success-heading font-serif">Inquiry Validated</h3>
                  <p className="success-summary">
                    Thank you, <strong>{submittedData.fullName}</strong>. Your inquiry for{' '}
                    <strong>
                      {submittedData.productName || submittedData.interestCategory}
                    </strong>{' '}
                    (Quantity: {submittedData.quantity}) has been captured in preview mode.
                  </p>

                  <div className="success-data-box">
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    {submittedData.company && <p><strong>Company:</strong> {submittedData.company}</p>}
                    {submittedData.country && <p><strong>Country:</strong> {submittedData.country}</p>}
                    <p><strong>Notes:</strong> {submittedData.message}</p>
                  </div>

                  <p className="integration-reminder">
                    * Backend / email service connection is required for live delivery. In the meantime,
                    you can launch your email client to send this message directly:
                  </p>

                  <div className="success-actions">
                    <a
                      href={generateMailtoLink()}
                      className="btn btn-brass"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send via Email App
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={handleReset}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-head">
                    <h3 className="form-head-title font-serif">Project & Quote Form</h3>
                    <p className="form-head-sub">
                      Fields marked with <span className="req-star">*</span> are required.
                    </p>
                  </div>

                  {/* Name & Email (Required) */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="fullName" className="field-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`field-input ${errors.fullName ? 'has-error' : ''}`}
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="field-error-text">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`field-input ${errors.email ? 'has-error' : ''}`}
                        placeholder="e.g. sarah@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="field-error-text">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Category & Quantity (Required) */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="interestCategory" className="field-label">
                        Product Category <span className="req-star">*</span>
                      </label>
                      <select
                        id="interestCategory"
                        name="interestCategory"
                        className={`field-select ${errors.interestCategory ? 'has-error' : ''}`}
                        value={formData.interestCategory}
                        onChange={handleChange}
                        aria-required="true"
                      >
                        <option value="bathtubs">Bathtubs</option>
                        <option value="brass-decor">Brass Décor</option>
                        <option value="both">Both Bathtubs & Brass Décor</option>
                        <option value="custom">Custom Architectural Requirement</option>
                      </select>
                      {errors.interestCategory && (
                        <span className="field-error-text">{errors.interestCategory}</span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="quantity" className="field-label">
                        Estimated Quantity <span className="req-star">*</span>
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        className={`field-select ${errors.quantity ? 'has-error' : ''}`}
                        value={formData.quantity}
                        onChange={handleChange}
                        aria-required="true"
                      >
                        <option value="1">1 Unit (Residential / Specimen)</option>
                        <option value="2-5">2 – 5 Units</option>
                        <option value="6-20">6 – 20 Units</option>
                        <option value="20+">20+ Units (Commercial / Hospitality)</option>
                      </select>
                      {errors.quantity && (
                        <span className="field-error-text">{errors.quantity}</span>
                      )}
                    </div>
                  </div>

                  {/* Optional: Specific Product Name */}
                  {formData.productName && (
                    <div className="form-field">
                      <label htmlFor="productName" className="field-label">
                        Selected Product Reference <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        className="field-input"
                        value={formData.productName}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {/* Optional: Company & Country */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="company" className="field-label">
                        Company / Design Firm <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="field-input"
                        placeholder="e.g. Jenkins Studio"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="country" className="field-label">
                        Country / City <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="field-input"
                        placeholder="e.g. United Kingdom"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Message (Required) */}
                  <div className="form-field">
                    <label htmlFor="message" className="field-label">
                      Message / Requirements <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`field-textarea ${errors.message ? 'has-error' : ''}`}
                      placeholder="Please mention preferred finish (e.g., polished brass, hammered copper), timeline, or specific questions..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <span id="message-error" className="field-error-text">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={15} aria-hidden="true" />
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

