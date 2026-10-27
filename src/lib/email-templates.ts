import { CONTACT_EMAIL } from "@/lib/contact";

const BRAND = {
  name: "Lowell Edwards Home Integration",
  maroon: "#670001",
  ink: "#1a1a2e",
  muted: "#5c5c6e",
  page: "#f5f7fa",
  border: "#e4e6eb",
};

interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.lowelledwards.com").trim();
}

function formatSubscriptionDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  }).format(date);
}

// Shared shell: wordmark header, white content card, small footer.
function layout(bodyHtml: string, footerHtml: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${BRAND.name}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.page};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.page};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border:1px solid ${BRAND.border};">
      <tr><td align="center" style="padding:36px 40px 28px;border-bottom:3px solid ${BRAND.maroon};">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.1;color:${BRAND.ink};">Lowell Edwards</div>
        <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${BRAND.maroon};">Home Integration</div>
      </td></tr>
      <tr><td style="padding:36px 40px 40px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${BRAND.ink};">
        ${bodyHtml}
      </td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
      <tr><td style="padding:20px 40px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${BRAND.muted};text-align:center;">
        ${footerHtml}
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export function renderSubscriberWelcomeEmail(): RenderedEmail {
  const siteUrl = getSiteUrl();
  const unsubscribeUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Unsubscribe")}`;
  const p = `style="margin:0 0 16px;"`;

  const html = layout(
    `<p ${p}>Hi,</p>
     <p ${p}>Ideas for a Smarter, More Beautiful Home.</p>
     <p ${p}>Thank you for subscribing to Lowell Edwards Home Integration.</p>
     <p ${p}>We're glad to have you with us. From thoughtfully designed smart home systems to immersive home theaters, we'll share featured projects, new technology, and seasonal ideas to inspire the way you live.</p>
     <p ${p}>No clutter, just thoughtful ideas and useful updates from the Lowell Edwards team.</p>
     <p ${p}>We look forward to staying connected.</p>
     <p style="margin:24px 0 32px;">Warm regards,<br>The Lowell Edwards Home Integration Team</p>
     <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
       <td style="background:${BRAND.maroon};">
         <a href="${escapeHtml(siteUrl)}" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;color:#ffffff;text-decoration:none;">Explore Our Website</a>
       </td>
     </tr></table>`,
    `You're receiving this email because you subscribed to updates from Lowell Edwards Home Integration.
     You can <a href="${unsubscribeUrl}" style="color:${BRAND.muted};text-decoration:underline;">unsubscribe</a> at any time.`,
  );

  const text = [
    "Hi,",
    "",
    "Ideas for a Smarter, More Beautiful Home.",
    "",
    "Thank you for subscribing to Lowell Edwards Home Integration.",
    "",
    "We're glad to have you with us. From thoughtfully designed smart home systems to immersive home theaters, we'll share featured projects, new technology, and seasonal ideas to inspire the way you live.",
    "",
    "No clutter, just thoughtful ideas and useful updates from the Lowell Edwards team.",
    "",
    "We look forward to staying connected.",
    "",
    "Warm regards,",
    "The Lowell Edwards Home Integration Team",
    "",
    `Explore our website: ${siteUrl}`,
    "",
    "---",
    "You're receiving this email because you subscribed to updates from Lowell Edwards Home Integration.",
    `You can unsubscribe at any time by emailing ${CONTACT_EMAIL} with the subject "Unsubscribe".`,
  ].join("\n");

  return {
    subject: "Welcome to Lowell Edwards Home Integration",
    html,
    text,
  };
}

// One label/value row of a details table. `value` must already be HTML-safe.
function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 14px;width:170px;vertical-align:top;background:${BRAND.page};border:1px solid ${BRAND.border};font-weight:bold;">${label}</td>
      <td style="padding:10px 14px;border:1px solid ${BRAND.border};">${value}</td>
    </tr>`;
}

function detailsTable(rowsHtml: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:14px;margin:0 0 24px;">${rowsHtml}</table>`;
}

function sectionHeading(title: string): string {
  return `<p style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:18px;">${title}</p>`;
}

const COMPANY_PHONE = "201-525-3300";

export interface ConsultationEmailInput {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  streetAddress: string;
  city: string;
  // Full state name, e.g. "New Jersey", not the two-letter code.
  state: string;
  zipCode: string;
  message?: string;
}

function formatAddress(lead: ConsultationEmailInput): [string, string] {
  return [lead.streetAddress, `${lead.city}, ${lead.state} ${lead.zipCode}`];
}

export function renderConsultationAdminEmail(lead: ConsultationEmailInput): RenderedEmail {
  const safe = (value: string) => escapeHtml(value).replace(/\n/g, "<br>");
  const p = `style="margin:0 0 16px;"`;

  const html = layout(
    `<p ${p}>Hello Team,</p>
     <p style="margin:0 0 24px;">A new consultation request has been submitted through the Lowell Edwards Home Integration website.</p>
     ${sectionHeading("Customer Details")}
     ${detailsTable(
       row("Name", safe(lead.name)) +
         row("Email", `<a href="mailto:${escapeHtml(lead.email)}" style="color:${BRAND.maroon};">${safe(lead.email)}</a>`) +
         row("Phone", `<a href="tel:${escapeHtml(lead.phone.replace(/[^\d+]/g, ""))}" style="color:${BRAND.maroon};">${safe(lead.phone)}</a>`) +
         row("Project Type", safe(lead.projectType)) +
         row("Address", formatAddress(lead).map(safe).join("<br>")) +
         (lead.message ? row("Project Description", safe(lead.message)) : ""),
     )}
     <p style="margin:0 0 24px;">Please review the request and contact the customer to discuss their project requirements and schedule a complimentary in-home consultation.</p>
     ${sectionHeading("Contact Information")}
     <p style="margin:0 0 24px;">Lowell Edwards Home Integration<br>Phone: ${COMPANY_PHONE}<br>Email: <a href="mailto:${CONTACT_EMAIL}" style="color:${BRAND.maroon};">${CONTACT_EMAIL}</a></p>
     <p style="margin:0;">Best regards,<br>Lowell Edwards Home Integration Website</p>`,
    "This is an automated notification from the Lowell Edwards Home Integration website.",
  );

  const text = [
    "Hello Team,",
    "",
    "A new consultation request has been submitted through the Lowell Edwards Home Integration website.",
    "",
    "Customer Details",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Project Type: ${lead.projectType}`,
    `Address: ${formatAddress(lead).join(", ")}`,
    ...(lead.message ? [`Project Description: ${lead.message}`] : []),
    "",
    "Please review the request and contact the customer to discuss their project requirements and schedule a complimentary in-home consultation.",
    "",
    "Contact Information",
    "Lowell Edwards Home Integration",
    `Phone: ${COMPANY_PHONE}`,
    `Email: ${CONTACT_EMAIL}`,
    "",
    "Best regards,",
    "Lowell Edwards Home Integration Website",
  ].join("\n");

  return {
    subject: `New Consultation Request from ${lead.name}`,
    html,
    text,
  };
}

export function renderConsultationCustomerEmail(lead: ConsultationEmailInput): RenderedEmail {
  const p = `style="margin:0 0 16px;"`;

  const html = layout(
    `<p ${p}>Hi ${escapeHtml(lead.name)},</p>
     <p ${p}>Thank you for reaching out to Lowell Edwards Home Integration. We've received your consultation request and appreciate the opportunity to learn more about your project.</p>
     <p style="margin:0 0 24px;">Our team will review the details you provided and follow up to discuss your goals, answer your questions, and arrange your complimentary in-home consultation.</p>
     ${sectionHeading("Your Request Details")}
     ${detailsTable(
       row("Project Type", escapeHtml(lead.projectType)) +
         row("Address", formatAddress(lead).map(escapeHtml).join("<br>")),
     )}
     <p ${p}>If you need to speak with us directly, please call <a href="tel:+12015253300" style="color:${BRAND.maroon};">${COMPANY_PHONE}</a> or email <a href="mailto:${CONTACT_EMAIL}" style="color:${BRAND.maroon};">${CONTACT_EMAIL}</a>.</p>
     <p ${p}>We look forward to helping you create a home experience designed around your lifestyle.</p>
     <p style="margin:24px 0 0;">Warm regards,<br>The Lowell Edwards Home Integration Team<br><a href="https://www.lowelledwards.com" style="color:${BRAND.maroon};">lowelledwards.com</a></p>`,
    "You're receiving this email because you submitted a consultation request on the Lowell Edwards Home Integration website.",
  );

  const text = [
    `Hi ${lead.name},`,
    "",
    "Thank you for reaching out to Lowell Edwards Home Integration. We've received your consultation request and appreciate the opportunity to learn more about your project.",
    "",
    "Our team will review the details you provided and follow up to discuss your goals, answer your questions, and arrange your complimentary in-home consultation.",
    "",
    "Your Request Details",
    `Project Type: ${lead.projectType}`,
    `Address: ${formatAddress(lead).join(", ")}`,
    "",
    `If you need to speak with us directly, please call ${COMPANY_PHONE} or email ${CONTACT_EMAIL}.`,
    "",
    "We look forward to helping you create a home experience designed around your lifestyle.",
    "",
    "Warm regards,",
    "The Lowell Edwards Home Integration Team",
    "lowelledwards.com",
  ].join("\n");

  return {
    subject: "We've Received Your Consultation Request",
    html,
    text,
  };
}

export function renderSubscriberAdminEmail(email: string, subscribedAt: Date): RenderedEmail {
  const date = formatSubscriptionDate(subscribedAt);

  const html = layout(
    `<p style="margin:0 0 16px;">Hello Team,</p>
     <p style="margin:0 0 24px;">A new subscriber has signed up through the newsletter section of the Lowell Edwards Home Integration website.</p>
     ${sectionHeading("Subscriber Details")}
     ${detailsTable(
       row("Email Address", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.maroon};">${escapeHtml(email)}</a>`) +
         row("Subscription Date", escapeHtml(date)) +
         row("Source", "Website Newsletter Form"),
     )}
     <p style="margin:0 0 24px;">Please ensure the subscriber is added to the mailing list for future newsletters and updates.</p>
     <p style="margin:0;">Best regards,<br>Lowell Edwards Home Integration Website</p>`,
    "This is an automated notification from the Lowell Edwards Home Integration website.",
  );

  const text = [
    "Hello Team,",
    "",
    "A new subscriber has signed up through the newsletter section of the Lowell Edwards Home Integration website.",
    "",
    "Subscriber Details",
    `Email Address: ${email}`,
    `Subscription Date: ${date}`,
    "Source: Website Newsletter Form",
    "",
    "Please ensure the subscriber is added to the mailing list for future newsletters and updates.",
    "",
    "Best regards,",
    "Lowell Edwards Home Integration Website",
  ].join("\n");

  return {
    subject: `New Newsletter Subscriber: ${email}`,
    html,
    text,
  };
}
