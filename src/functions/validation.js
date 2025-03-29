export const validateHexColor = (hexString) => {
  if (!hexString) { return null; }

  const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

  if (!hexRegex.test(hexString)) { return null; }

  const hex = hexString.startsWith('#') ? hexString.slice(1) : hexString;
  return parseInt(hex, 16);
}

export const checkValidAttachment = (attachment) => {
  const validContentTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/avif'];
  return attachment ? (validContentTypes.includes(attachment.contentType) ? attachment.url: null) : null;
}

