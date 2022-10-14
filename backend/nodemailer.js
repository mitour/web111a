const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode, url) => {
  transport
    .sendMail({
      from: `We Learn Team <${process.env.EMAIL}>`,
      to: email,
      subject: "Please confirm your account",
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <title>Salted | A Responsive Email Template</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <style type="text/css">
          /* Force Hotmail to display normal line spacing */
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
      
          /* Prevent WebKit and Windows mobile changing default text sizes */
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          /* Remove spacing between tables in Outlook 2007 and up */
          img {
            -ms-interpolation-mode: bicubic;
          }
      
          /* Allow smoother rendering of resized image in Internet Explorer */
          /* RESET STYLES */
          body {
            margin: 0;
            padding: 0;
          }
      
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }
      
          table {
            border-collapse: collapse !important;
          }
      
          body {
            height: 100% !important;
            margin: 0;
            padding: 0;
            width: 100% !important;
          }
      
          .appleFooter a {
            color: #999999;
            text-decoration: none;
          }
      
          /* MOBILE STYLES */
          @media screen and (max-width: 525px) {
      
            /* ALLOWS FOR FLUID TABLES */
            table[class="wrapper"] {
              width: 100% !important;
            }
      
            /* ADJUSTS LAYOUT OF LOGO IMAGE */
            td[class="logo"] {
              text-align: left;
              padding: 20px 0 20px 0 !important;
            }
      
            td[class="logo"] img {
              margin: 0 auto !important;
            }
      
            /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
            td[class="mobile-hide"] {
              display: none;
            }
      
            img[class="mobile-hide"] {
              display: none !important;
            }
      
            img[class="img-max"] {
              max-width: 100% !important;
              height: auto !important;
            }
      
            /* FULL-WIDTH TABLES */
            table[class="responsive-table"] {
              width: 100% !important;
            }
      
            /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
            td[class="padding"] {
              padding: 10px 5% 15px 5% !important;
            }
      
            td[class="padding-copy"] {
              padding: 10px 5% 10px 5% !important;
              text-align: center;
            }
      
            td[class="padding-meta"] {
              padding: 30px 5% 0px 5% !important;
              text-align: center;
            }
      
            td[class="no-pad"] {
              padding: 0 0 20px 0 !important;
            }
      
            td[class="no-padding"] {
              padding: 0 !important;
            }
      
            td[class="section-padding"] {
              padding: 50px 15px 50px 15px !important;
            }
      
            td[class="section-padding-bottom-image"] {
              padding: 50px 15px 0 15px !important;
            }
      
            /* ADJUST BUTTONS ON MOBILE */
            td[class="mobile-wrapper"] {
              padding: 10px 5% 15px 5% !important;
            }
      
            table[class="mobile-button-container"] {
              margin: 0 auto;
              width: 100% !important;
            }
      
            a[class="mobile-button"] {
              width: 80% !important;
              padding: 15px !important;
              border: 0 !important;
              font-size: 16px !important;
            }
          }
      
          @keyframes floating {
            50% {
              translate: 0 -5%;
              rotate: 10deg;
            }
          }
        </style>
      </head>
      
      <body style="margin: 0; padding: 0;">
      
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td bgcolor="#ffffff">
              <div align="center" style="padding: 0px 15px 0px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper">
                  <!-- LOGO/PREHEADER TEXT -->
                  <tr>
                    <td style="padding: 20px 0px 30px 0px;" class="logo">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td bgcolor="#ffffff" width="100" align="left"><img alt="Logo" src="https://github.com/mitour/web111a/blob/view/public/logo192.png?raw=true" width="52" height="78" style="display: block; font-family: Helvetica, Arial, sans-serif; color: #666666; font-size: 16px;" border="0"></td>
                          <td bgcolor="#ffffff" width="400" align="right" class="mobile-hide">
                            <table border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td align="right" style="padding: 0 0 5px 0; font-size: 14px; font-family: Arial, sans-serif; color: #666666; text-decoration: none;"><span style="color: #666666; text-decoration: none;">We Learn - From now on.<br>Improving lives through learning</span></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      
        <!-- COMPACT ARTICLE SECTION -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td bgcolor="#fffaef" align="center" style="padding: 70px 15px 70px 15px;" class="section-padding">
              <table border="0" cellpadding="0" cellspacing="0" width="500" style="padding:0 0 20px 0;" class="responsive-table">
                <tr>
                  <td valign="top" style="padding: 40px 0 0 0;" class="mobile-hide"><img src="https://cdn-icons-png.flaticon.com/512/763/763763.png" alt="Kitty" width="105" height="105" border="0" style="display: block; width: 105px; height: 105px; animation: floating 3s; animation-iteration-count: infinite;"></td>
                  <td style="padding: 40px 0 0 0;" class="no-padding">
                    <!-- ARTICLE -->
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td align="left" style="padding: 0 0 5px 25px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #333333;" class="padding-copy">Hello ${name}</td>
                      </tr>
                      <tr>
                        <td align="left" style="padding: 10px 0 15px 25px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Thank you for subscribing. Please confirm your email by clicking on the following link</td>
                      </tr>
                      <tr>
                        <td style="padding:0 0 45px 25px;" align="left" class="padding">
                          <table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                            <tr>
                              <td align="center">
                                <!-- BULLETPROOF BUTTON -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                                  <tr>
                                    <td align="center" style="padding: 0;" class="padding-copy">
                                      <table border="0" cellspacing="0" cellpadding="0" class="responsive-table">
                                        <tr>
                                          <td align="center">
                                            <a href=${url}/${confirmationCode} target="_blank" style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #F6BB42; border-top: 10px solid #F6BB42; border-bottom: 10px solid #F6BB42; border-left: 20px solid #F6BB42; border-right: 20px solid #F6BB42; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Click here</a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      
        <!-- FOOTER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
          <tr>
            <td bgcolor="#ffffff" align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 20px 0px 20px 0px;">
                    <!-- UNSUBSCRIBE COPY -->
                    <table width="500" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">
                      <tr>
                        <td align="center" valign="middle" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;">
                          <span class="appleFooter" style="color:#666666;">勞動部勞動力發展署 桃竹苗分署</span><br><a style="color: #666666; text-decoration: none;">跨平台網頁程式設計與智能聯網(幼獅) 第01期 期末專案</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      
      </body>
      
      </html>`,
    })
    .catch((err) => console.log(err));
};
