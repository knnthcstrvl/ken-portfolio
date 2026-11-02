# Kenneth Avila — Portfolio

A personal portfolio for Kenneth Avila, a full-stack software engineer. The site presents professional experience, skills, selected projects, contact information, and a downloadable résumé.

## Built with

- Laravel 13
- Inertia.js 2
- React 18
- Vite
- Tailwind CSS

## Features

- Responsive single-page portfolio with About, Skills, Experience, Projects, and Contact sections
- Light and dark themes
- Scroll reveal effects and a back-to-top button
- Project previews with links to live demos and source repositories
- Downloadable résumé at `/resume/download`

## Featured projects

| Project | Description | Demo | Repository |
| --- | --- | --- | --- |
| [DRMS — Digital Records Management System](https://github.com/knnthcstrvl/drms-demo) | Registrar records retrieval system for Manila Central University | [Live demo](https://drms-demo.onrender.com/login) | [GitHub](https://github.com/knnthcstrvl/drms-demo) |
| [BoardRoom](https://github.com/knnthcstrvl/boardroom-demo) | Company space reservation system with a tablet kiosk and admin panel | [Live demo](https://boardroom-demo.onrender.com/kiosk) | [GitHub](https://github.com/knnthcstrvl/boardroom-demo) |
| [ETRS — Electronic Time Record System](https://github.com/knnthcstrvl/etrs-demo) | Attendance and timekeeping system for onsite and work-from-home records | [Live demo](https://etrs-demo.onrender.com/) | [GitHub](https://github.com/knnthcstrvl/etrs-demo) |

## Local setup

### Requirements

- PHP 8.3 or later
- Composer
- Node.js and npm
- MySQL

### Install

1. Install PHP dependencies:

   ```bash
   composer install
   ```

2. Create an environment file and generate the application key:

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

3. Create a MySQL database and update the `DB_*` values in `.env` to match your local configuration.

4. Run migrations:

   ```bash
   php artisan migrate
   ```

5. Install frontend dependencies and start the development servers:

   ```bash
   npm install
   composer run dev
   ```

The portfolio is served at the local URL shown by Laravel’s development server. To build frontend assets for production, run:

```bash
npm run build
```

## Portfolio assets

- About portrait: `public/files/ken.jpg`
- Résumé PDF: `public/files/Avila, Kenneth C. - Resume.pdf`
- Project previews: `public/files/drms/preview.png`, `public/files/boardroom/preview.png`, and `public/files/etrs/preview.png`

## Links

- [GitHub profile](https://github.com/knnthcstrvl)
