# 🏥 ToneClinic

**ToneClinic** הוא אתר אינטרנט מקצועי למרפאת שמיעה, המבוסס על **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. האתר מוכן לשימוש ומתוכנן תוך התחשבות בפרקטיקות הטובות ביותר של פיתוח אתרים.

- ✅ **מוכן לייצור** עם ציונים גבוהים ב-**PageSpeed Insights**.
- ✅ אינטגרציה עם **Tailwind CSS** עם תמיכה ב-**Dark mode** ו-**_RTL_**.
- ✅ **אופטימיזציה של תמונות** (באמצעות **Astro Assets** ו-**Unpic**).
- ✅ יצירת **sitemap** אוטומטי על בסיס הנתיבים שלך.
- ✅ **Open Graph tags** לשיתוף ברשתות חברתיות.
- ✅ **Analytics** מובנה עם Google Analytics.

<br>

[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)

<br>

<details open>
<summary>תוכן עניינים</summary>

- [התחלה מהירה](#התחלה-מהירה)
  - [מבנה הפרויקט](#מבנה-הפרויקט)
  - [פקודות](#פקודות)
  - [הגדרות](#הגדרות)
  - [פריסה](#פריסה)
- [שאלות נפוצות](#שאלות-נפוצות)
- [רישיון](#רישיון)

</details>

<br>

## התחלה מהירה

**ToneClinic** נותן לך גישה מהירה ליצירת אתר אינטרנט מקצועי למרפאת שמיעה באמצעות [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). זהו תבנית חינמית המתמקדת בפשטות, פרקטיקות טובות וביצועים גבוהים.

### מבנה הפרויקט

בתוך תבנית **ToneClinic**, תראה את התיקיות והקבצים הבאים:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   └── layouts/
│   ├── layouts/
│   ├── pages/
│   │   ├── homes/
│   │   │   └── startup.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── terms.md
│   │   └── privacy.md
│   ├── config.yaml
│   └── navigation.ts
├── astro.config.ts
├── tailwind.config.js
└── package.json
```

### פקודות

```bash
# התקנת תלויות
npm install

# הפעלת שרת פיתוח
npm run dev

# בניית הפרויקט
npm run build

# תצוגה מקדימה של הבנייה
npm run preview
```

### הגדרות

הגדרות האתר נמצאות בקובץ `src/config.yaml`:

```yaml
site:
  name: ToneClinic
  site: 'https://toneclinic.vercel.app'
  base: '/'
  trailingSlash: false

i18n:
  language: he
  textDirection: rtl
```

### פריסה

האתר מוכן לפריסה ב-Vercel, Netlify או כל פלטפורמת אירוח אחרת שתומכת ב-Astro.

## שאלות נפוצות

**Q: איך אני משנה את התוכן של האתר?**
A: התוכן נמצא בקבצים ב-`src/pages/` ו-`src/components/`. ערוך את הקבצים האלה כדי לשנות את התוכן.

**Q: איך אני משנה את הצבעים?**
A: הצבעים מוגדרים ב-`tailwind.config.js` ובקבצי CSS ב-`src/assets/styles/`.

**Q: איך אני מוסיף דפים חדשים?**
A: צור קובץ `.astro` חדש בתיקיית `src/pages/` והוא יהיה זמין אוטומטית.

## רישיון

פרויקט זה מוגן תחת רישיון MIT. ראה קובץ [LICENSE.md](LICENSE.md) לפרטים נוספים.
