export const slugTransform = value =>
  value.toLowerCase()
       .replace(/[\s_]/g, '-')
       .replace(/^[\d-]/g, '')
       .replace(/[^a-z0-9-]/g, '');

export const emailTransform = value =>
  value.toLowerCase()
       .replace(/\s/g, '');
