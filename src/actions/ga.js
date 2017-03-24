export const EVENT = 'GA/EVENT';

export const event = (category, action, label, value) => ({ type: EVENT, category, action, label, value });
