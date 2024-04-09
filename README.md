
## About this project

This project is the interface for the website: https://english.ovh, a website where you can improve your english with the help of AI.

You also have the API with the fine-tunning on github: https://github.com/LuisPerisVidal/englishAI-backend-api-typescript-clean-architecture

Additionally, if you speak spanish you can view the entire project on youtube: https://www.youtube.com/channel/UCowYQn61yq21aFmrrKRT4JQ


## Getting Started

This is a [Next.js](https://nextjs.org/) project.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Configuration

For this project I deployed the frontend on CloudFlare Pages. Due to CloudFlare supporting only an 'edge runtime' I couldn't use nodeJS. Therefore, I modified the main layout adding the following line:

```javascript
export const runtime = 'edge';
```

You can remove this line if you want to use Node.js.
