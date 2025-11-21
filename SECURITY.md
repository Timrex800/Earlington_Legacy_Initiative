# Security & Compliance

## Data Privacy (POPIA)
The Earlington Legacy Initiative is committed to protecting the privacy of our donors and community members in accordance with the Protection of Personal Information Act (POPIA).

- **Data Collection**: We only collect personal information (Name, Email, Phone) necessary for processing donations, issuing tax certificates, and communication.
- **Consent**: By submitting a donation form, users consent to the processing of their personal data for these specific purposes.
- **Storage**: Data is transmitted securely via HTTPS. We do not store sensitive payment information (credit card details) on our servers; all payments are processed by secure third-party gateways.

## Section 18A Tax Certificates
Earlington Legacy Initiative is a registered Non-Profit Company (NPC) and Public Benefit Organization (PBO).
- Donations made to the initiative are eligible for Section 18A tax certificates in South Africa.
- To issue a certificate, we require the donor's full name, address, and contact details.
- Certificates are generated upon successful receipt of funds.

## Security Best Practices
- **Secrets Management**: No API keys or secrets are stored in the source code. All sensitive configuration is managed via Environment Variables and GitHub Secrets.
- **Dependencies**: We regularly audit dependencies for vulnerabilities using `npm audit`.
- **Static Site**: As a static site, the attack surface is minimal. There is no server-side database or logic exposed directly to the public internet from this repository.

## Reporting Vulnerabilities
If you discover a security vulnerability, please report it via email to `timothy@hashlytics.co.za`.
