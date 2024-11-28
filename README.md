
# Gamezop New

This project is built with Next.js and integrates several modern web technologies, including Progressive Web App (PWA) support and Server-Side Rendering (SSR). The goal was to create a fast, scalable, and SEO-friendly web application that can be used both as a regular web app and as a PWA, offering offline capabilities and a native-like experience for mobile users


The main motivation for choosing Next.js was its flexibility in handling both static and dynamic content, along with built-in support for server-side rendering (SSR), which was essential for SEO purposes.

## Key Features Implemented

### PWA Support:

Implemented PWA functionality using the next-pwa package. This allows users to install the app on their devices and use it.
Configured service workers, and the web app manifest to ensure a seamless PWA experience.

### Server-Side Rendering (SSR):

SSR was used for the page to ensure fast initial page loads and better SEO performance.
Leveraged Next.js's fetch on server sided to fetch data on the server and pass it to components as props, which helps with SEO by ensuring that the page content is pre-rendered.

### Optimizations:

Focused on optimizing the app’s performance by enabling automatic static optimization and image optimization with the built-in next/image component.
Applied best practices for accessibility, including semantic HTML and proper ARIA roles. Also took care of core web vitals.

Desktop 👇

<img width="1703" alt="image" src="https://github.com/user-attachments/assets/cd5901fb-dc89-4c9b-92b6-8b3f56d74b79">

Mobile 👇

<img width="1688" alt="image" src="https://github.com/user-attachments/assets/ac48b806-afd7-45eb-90f5-73188e752aa0">

## Features

- Users can navigate between multiple categories.
- Lazy loading has been implemented.
- This application can run on multiple platforms as it supports PWA.

## Installation


```bash
  git clone https://github.com/Sharmaryan/gamezop-next.git

  cd gamezop-next

  npm install or yarn install

  npm run dev or yarn dev
 
```


    
