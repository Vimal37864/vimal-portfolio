# Vimal Balaji — Developer Portfolio

A responsive React + Vite portfolio with a dark navy / lime visual style inspired by the reference screenshot.

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the `vimal-portfolio` folder in VS Code.
3. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Before publishing
- Your uploaded profile photo is included as `public/profile.jpg`.
- Your email and phone number from your resume are included in the contact section.
- Your uploaded resume is included as `public/resume.pdf`.
- Check each project description and GitHub URL; replace links with the exact repositories.
- Confirm your CGPA and certification details.
- Add phone number only if you want it public.

## Deploy free on Vercel
1. Push the project folder to a new GitHub repository.
2. Sign in at https://vercel.com using GitHub.
3. Choose **Add New → Project**, import the repository, and click **Deploy**.
4. Vercel detects Vite automatically. The generated URL becomes your portfolio link.

## Add a profile photo
Put your image in `public/profile.jpg`. Then in `src/App.jsx`, replace:
`<div className="avatar" aria-label="Profile image placeholder"><span>VB</span><i /></div>`
with:
`<div className="avatar photo"><img src="/profile.jpg" alt="Vimal Balaji" /><i /></div>`
And add this CSS:
`.avatar.photo{overflow:hidden}.avatar.photo img{width:100%;height:100%;object-fit:cover}`
