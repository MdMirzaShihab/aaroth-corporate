# EmailJS Setup Instructions

## Issue Fixed
The contact form was failing to send emails because the Web3Forms API key was invalid/suspended. The form has been updated to use EmailJS for reliable email delivery.

## Setup EmailJS

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Yahoo, Outlook, etc.)
4. Follow the connection steps
5. **Save the Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: Contact Form: {{subject}}
   
   From: {{from_name}} <{{from_email}}>
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   Sent to: {{to_email}}
   ```
4. **Save the Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to **Account** section in the dashboard
2. Find your **User ID/Public Key** (e.g., `user_def789`)

### 5. Configure Environment Variables
Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Alternative: Direct Configuration
If you prefer not to use environment variables, you can directly update the values in `src/components/Contact.jsx`:

```javascript
const SERVICE_ID = 'service_xyz123';  // Your actual service ID
const TEMPLATE_ID = 'template_abc456';  // Your actual template ID  
const PUBLIC_KEY = 'user_def789';  // Your actual public key
```

## Test the Setup
1. Fill out the contact form
2. Submit it
3. Check if the email arrives at aarothofficial@gmail.com
4. Verify the form shows a success message

## Fallback Behavior
If EmailJS fails, the form will still fall back to opening the user's email client with a pre-filled message as a backup option.

## Email Limits
- EmailJS free plan: 200 emails/month
- Upgrade to paid plan if you need more

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- For issues with this implementation, check the browser console for error messages
