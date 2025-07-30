import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'דף הבית',
      href: getPermalink('/home'),
    },
    {
      text: 'אודות',
      href: getPermalink('/about'),
    },
    {
      text: 'שעות פעילות',
      href: getPermalink('/work-hours'),
    },
    {
      text: 'צור קשר',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'פגישת ייעוץ', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'שירותים',
      links: [
        { text: 'בדיקות שמיעה', href: '#' },
        { text: 'מכשירי שמיעה', href: '#' },
        { text: 'טיפול באודיולוגיה', href: '#' },
        { text: 'ייעוץ מקצועי', href: '#' },
      ],
    },
    {
      title: 'חברה',
      links: [
        { text: 'אודות', href: getPermalink('/about') },
        { text: 'צוות מקצועי', href: '#' },
        { text: 'צור קשר', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'תמיכה',
      links: [
        { text: 'שעות פעילות', href: getPermalink('/work-hours') },
        { text: 'מיקום', href: '#' },
        { text: 'טלפון', href: 'tel:+972-50-6712610' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'תנאי שימוש', href: getPermalink('/terms') },
    { text: 'מדיניות פרטיות', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'פייסבוק', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'אינסטגרם', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'וואטסאפ', icon: 'tabler:brand-whatsapp', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="מכון טון logo" loading="lazy"></img>
    © 2024 מכון טון - כל הזכויות שמורות.
  `,
};
