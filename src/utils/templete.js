 const getContactEmailTemplate = (fullName, ticketId) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
  <style>
    /* Reset & Base Styles */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { 
      margin: 0; 
      padding: 0; 
      background-color: #0f172a; 
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
      color: #ffffff;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 10px;">
        
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; color: #ffffff; max-width: 600px; width: 100%;">
          
          <tr>
            <td align="center" style="padding-top: 50px; padding-bottom: 20px;">
              <div style="background-color: #22c55e; width: 64px; height: 64px; border-radius: 50%; display: block;">
                 <div style="line-height: 64px; font-size: 32px; color: #ffffff; font-weight: bold; text-align: center;">&#10003;</div>
              </div>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 0 40px;">
              <h1 style="margin: 0; font-size: 36px; font-weight: 400; letter-spacing: -1px; line-height: 1.2; color: #ffffff;">
                Thank You,<br>${fullName}!
              </h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 20px 40px; color: #94a3b8; font-size: 16px; line-height: 1.6;">
              We have received your message. Our team will review your request and respond within <strong>24 hours</strong>.
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 10px 40px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #334155; border-radius: 12px; border: 1px solid #475569;">
                <tr>
                  <td align="center" style="padding: 30px 20px;">
                    <span style="font-size: 28px; font-weight: 600; letter-spacing: 1px; color: #ffffff; display: block; margin-bottom: 5px;">
                      ${ticketId}
                    </span>
                    <span style="font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">
                      Your Unique Reference ID
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 20px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #334155; border-radius: 12px; border: 1px solid #475569;">
                <tr>
                  <td align="left" style="padding: 30px; color: #cbd5e1; font-size: 15px; line-height: 1.8;">
                    <strong style="display: block; margin-bottom: 15px; color: #ffffff; font-size: 18px; text-align: center;">What happens next?</strong>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="25" valign="top" style="color: #22c55e; font-size: 18px; line-height: 24px;">&bull;</td>
                        <td style="color: #cbd5e1; padding-bottom: 8px;">Our team reviews your request</td>
                      </tr>
                      <tr>
                        <td width="25" valign="top" style="color: #22c55e; font-size: 18px; line-height: 24px;">&bull;</td>
                        <td style="color: #cbd5e1;">A specialist will contact you</td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 0 40px 50px;">
              <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.5;">
                Best Regards,<br>
                <strong style="color: #ffffff;">Omnixia Technology</strong>
              </p>
              <div style="margin-top: 15px;">
                <a href="mailto:support@omnixiatechnology.in" style="color: #64748b; text-decoration: none; font-size: 13px;">support@omnixiatechnology.in</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default getContactEmailTemplate;