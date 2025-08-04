import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'מכשירי שמיעה',
      href: getPermalink('/hearing-aids'),
      links: [
        { text: 'מותגים שלנו', href: getPermalink('/hearing-aids#brands'), icon: 'tabler:building-store' },
        { text: 'דגמים מובילים', href: getPermalink('/hearing-aids#leading-models'), icon: 'tabler:award' },
        { text: 'מכשירים נסתרים', href: getPermalink('/hearing-aids#hidden-devices'), icon: 'tabler:eye-off' },
        { text: 'השתתפות קופות חולים', href: getPermalink('/hearing-aids#insurance'), icon: 'tabler:receipt' },
      ],
    },
    {
      text: 'בדיקות שמיעה',
      href: getPermalink('/hearing-tests'),
      links: [
        { text: 'בדיקת תעלת האוזן', href: getPermalink('/hearing-tests#ear-canal-exam'), icon: 'tabler:ear' },
        { text: 'בדיקת שמיעה מקיפה', href: getPermalink('/hearing-tests#comprehensive-test'), icon: 'tabler:stethoscope' },
        { text: 'בדיקת טימפנומטריה', href: getPermalink('/hearing-tests#tympanometry'), icon: 'tabler:chart-line' },
      ],
    },
    {
      text: 'ציוד נלווה',
      href: getPermalink('/accessories'),
      links: [
        { text: 'סוללות למכשירי שמיעה', href: getPermalink('/accessories#batteries'), icon: 'tabler:battery' },
        { text: 'חלפים למכשירי שמיעה', href: getPermalink('/accessories#replacements'), icon: 'tabler:refresh' },
        { text: 'ציוד שמיעה מוגבר', href: getPermalink('/accessories#amplified-devices'), icon: 'tabler:volume' },
        { text: 'ציוד נלווה למכשירי שמיעה', href: getPermalink('/accessories#hearing-accessories'), icon: 'tabler:components' },
      ],
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
  actions: [
    { text: 'קביעת תור', href: getPermalink('/contact'), target: '_self' },
    { text: '0733880680', href: 'tel:0733880680', target: '_self', classes: { btn: 'btn-link text-white underline' } }
  ],
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
