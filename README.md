# About this project

This project is base on ReactJS, NextJS, Strapi v4

## NextJS

Next is going to help with the routing like react router dom but quickly.
Any File create pages it will be the url. example

pages\blog.jsx = <http://localhost:3000/blog/>
pages\about.jsx = <http://localhost:3000/about/>

## Creating dynamic URL or static

First option.

This function build the page in every request every time you get to this page.

Using this function I will be able to see the data just on my Command Prop

```jsx
export async function getServerSideProps() {
const url = 'http://localhost:1337/api/blogs';
const response = await fetch(url);
const res = await response.json();
return {
   props: {
    res,
         }
   },
};

```

This function is going to be below the function on the component File. After we get the return props. We will pass the props to the component

## Filter in Strapi v4

` const urlBlog =`http://localhost:1337/api/blogs?[filters][url]=${url}&populate[image][fields][1]=url`; `

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
