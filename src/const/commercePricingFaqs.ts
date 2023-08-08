interface FAQs {
  title: string;
  content: string[];
  sectionId: string;
  accordionId: string;
  isContentBullets?: boolean;
}
export const commerceFAQs: FAQs[] = [
  {
    title: "What ecommerce platform do you use?",
    content: [
      "This depends on the project needs. I may use Stripe + CMS, or Shopify, or Snipcart.",
    ],
    sectionId: "ecommerce-platform",
    accordionId: "ecommerce-platform-accordion",
  },
  {
    title: "What are the card rates?",
    content: [
      "This depends on the ecommerce platform used. For example, at the time of writing (7 Aug 2023), Stripe charges 1.5% + 20p per successful card charge.",
      "Note that I do not take or profit from any sales you make on your website.",
    ],
    sectionId: "card-rates",
    accordionId: "card-rates-accordion",
  },
  {
    title: "Do you take a cut of the sales I make on the website?",
    content: [
      "Never. I do not take or profit from any sales you make on your website.",
      "Note that there will be card rates charged by the payment provider. For example, at the time of writing (7 Aug 2023), Stripe charges 1.5% + 20p per successful card charge.",
    ],
    sectionId: "do-you-take-a-cut",
    accordionId: "do-you-take-a-cut-accordion",
  },
  {
    title: "How long will it take to make the website?",
    content: [
      "Every project is different, but here are some rough estimates.",
      "Starter: 1 to 3 weeks",
      "Plus: 3 to 6 weeks",
      "Pro:  8 to 12 weeks",
    ],
    sectionId: "how-long-will-it-take",
    accordionId: "how-long-will-it-take-accordion",
  },
  {
    title: "What is the payment schedule?",
    content: [
      "The project is broken into two payments. The first 50% is due upon signing the contract. The second 50% is due upon completion of the project.",
    ],
    sectionId: "payment-schedule",
    accordionId: "payment-schedule-accordion",
  },

  {
    title: "Is hosting free?",
    content: [
      "Short answer: Yes. I take care of hosting for you.",
      "All websites are deployed and hosted on platforms which include a generous free tier. These platforms include Vercel and Netlify.",
      "Both platforms' free tiers include a bandwidth of 100GB per month. This is more than enough for most websites. If you need more, you can upgrade to a paid plan. This will cost around USD 20 per month.",
      "Note that I do not take or profit from any payments you make to these platforms.",
      "(Hosting refers to the cost of running servers that your website is stored on. It is required for your website to be accessible on the internet.)",
    ],
    sectionId: "hosting",
    accordionId: "hosting-accordion",
  },
  {
    title: "Do you provide the domain?",
    content: [
      "Short answer: No. You will need to purchase a domain name yourself.",
      "A domain name is the address of your website. For example, my domain name is wesleyjessie.com.",
      "This is something that you should own, not anyone else. I will provide support on where and how to purchase a domain name free of charge, but you will need to purchase it yourself.",
      "If you do not wish to buy one, a subdomain will be provided for you by the hosting platform for free. For example, your website may be called something like www.yourwebsite.vercel.app.",
    ],
    sectionId: "domain",
    accordionId: "domain-accordion",
  },
  {
    title:
      "I want to edit the content on my website, will I need to touch the code?",
    content: [
      "No, CMS is included in all packages. This means there will be a dashboard like software where you can edit the content of your website without touching the code.",
    ],
    sectionId: "CMS",
    accordionId: "CMS-accordion",
  },
  {
    title: "Is CMS free?",
    content: [
      "Short answer: Yes.",
      "I use CMS platforms, such as Sanity and Prismic, which have a generous free tier. This is more than enough for most websites. If you need more, you can upgrade to a paid plan.",
      "Note that I do not take or profit from any payments you make to these platforms.",
    ],
    sectionId: "CMS-cost",
    accordionId: "CMS-cost-accordion",
  },
  {
    title: "What do I need to get started?",
    content: [
      "You will need to provide the content of your website. This includes branding, text, images, your logo, and other branding information.",
      "If you do not have any images, I can help you source stock images",
    ],
    sectionId: "what-do-i-need-to-get-started",
    accordionId: "what-do-i-need-to-get-started-accordion",
  },
  {
    title:
      "One of your packages sounds good to me. What if I want more categories or functionalities?",
    content: [
      "Talk to me!",
      "Sometimes it may be simple to add a category or funtionality. In that case, I will add it for free. If it is more complex, I will provide you with a quote for the add-on.",

      "What's most important for me in a project is make the best possible website.",
    ],
    sectionId: "what-if-i-want-more",
    accordionId: "what-if-i-want-more-accordion",
  },
  {
    title: "I have a web design already, can you just develop for me?",
    content: [
      "Yes, I can. Talk to me! Let me see how simple or complex it is and I will give you a quote. ",
    ],
    sectionId: "i-have-a-web-design-already",
    accordionId: "i-have-a-web-design-already-accordion",
  },
  {
    title: "I have a web developer already, can you just design for me?",
    content: ["No, I do not provide web design services only."],
    sectionId: "i-have-a-web-developer-already",
    accordionId: "i-have-a-web-developer-already-accordion",
  },
  {
    title: "Do you work internationally?",
    content: ["Yes, I work with clients from all over the world."],
    sectionId: "do-you-work-internationally",
    accordionId: "do-you-work-internationally-accordion",
  },
  {
    title: "What technologies do you use to build websites?",
    content: [
      "I code websites so I have the most precise control over the computer and use the most modern technologies.",
      "Depending on the project, I use React, Next.js, Astro, Typescript, and Tailwind CSS to build websites.",
    ],
    sectionId: "what-technologies-do-you-use",
    accordionId: "what-technologies-do-you-use-accordion",
  },
];
