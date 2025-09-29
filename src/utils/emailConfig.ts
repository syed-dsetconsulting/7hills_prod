import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAIL_CONFIG = {
  serviceId: 'service_y4a589s',
  templateId: 'template_tb1ic8q',
  publicKey: 'mVpfb1Sqpjw_BT2w2',
  productionEmail: 'info@7hillsminerals.com'
};

// EmailJS utility function
export const sendEmail = async (templateParams: any) => {
  const { serviceId, templateId, publicKey } = EMAIL_CONFIG;
  
  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};
