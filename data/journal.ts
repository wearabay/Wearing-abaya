import type { JournalArticle } from "@/types/journal";

export const journalArticles: JournalArticle[] = [

{
id:"1",

slug:"how-to-choose-the-perfect-abaya-size",

title:"How to Choose the Perfect Abaya Size",

excerpt:
"Finding the perfect abaya fit ensures comfort, elegance, and confidence for every occasion.",

content:`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Suspendisse potenti.

Donec malesuada nisi non sem viverra, quis consequat nulla fermentum.

Curabitur sed luctus urna.

Aliquam erat volutpat.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
`,

coverImage:
"/images/journal/abaya-size.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Style Guide",

featured:true,

publishedAt:"12 July 2026",

readTime:"5 min read",

tags:[
"abaya",
"size",
"guide",
"style"
],

},

{
id:"2",

slug:"difference-between-abaya-and-kaftan",

title:"The Difference Between Abaya and Kaftan",

excerpt:
"Although often confused, abayas and kaftans have different histories and silhouettes.",

content:`
Lorem ipsum dolor sit amet.

Praesent commodo.

Vestibulum feugiat.

Mauris posuere.

Donec condimentum.
`,

coverImage:
"/images/journal/abaya-vs-kaftan.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Lifestyle",

featured:false,

publishedAt:"9 July 2026",

readTime:"4 min read",

tags:[
"abaya",
"kaftan"
],

},

{
id:"3",

slug:"five-ways-to-style-black-abaya",

title:"5 Ways to Style Your Black Abaya",

excerpt:
"Black abayas remain timeless. Discover effortless styling ideas for modern modest fashion.",

content:`
Lorem ipsum dolor sit amet.

Donec posuere.

Curabitur et lorem.

Vestibulum viverra.
`,

coverImage:
"/images/journal/style-black-abaya.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Style Guide",

featured:false,

publishedAt:"5 July 2026",

readTime:"6 min read",

tags:[
"style",
"black"
],

},

{
id:"4",

slug:"caring-for-premium-nida-fabric",

title:"Caring for Premium Nida Fabric",

excerpt:
"Simple care routines help preserve softness, drape, and durability of premium nida fabric.",

content:`
Lorem ipsum dolor sit amet.

Mauris ut ipsum.

Vestibulum lacinia.

Praesent quis.

Vivamus consequat.
`,

coverImage:
"/images/journal/nida-care.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Care Guide",

featured:false,

publishedAt:"1 July 2026",

readTime:"4 min read",

tags:[
"care",
"fabric"
],

},

{
id:"5",

slug:"behind-our-craftsmanship",

title:"Behind Wearabay Craftsmanship",

excerpt:
"Every collection begins with thoughtful design, premium materials, and skilled artisans.",

content:`
Lorem ipsum dolor sit amet.

Morbi at magna.

Donec tristique.

Etiam feugiat.
`,

coverImage:
"/images/journal/craftsmanship.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Behind The Brand",

featured:false,

publishedAt:"25 June 2026",

readTime:"7 min read",

tags:[
"brand",
"craftsmanship"
],

},

{
id:"6",

slug:"ramadan-capsule-wardrobe",

title:"Ramadan Capsule Wardrobe",

excerpt:
"Create a versatile modest wardrobe with timeless essentials for Ramadan and Eid.",

content:`
Lorem ipsum dolor sit amet.

Etiam quis.

Aliquam erat volutpat.

Vestibulum vitae.

Sed posuere.
`,

coverImage:
"/images/journal/ramadan.jpg",

author:"wearabay",

authorRole:"Editorial Team",

category:"Ramadan",

featured:false,

publishedAt:"20 June 2026",

readTime:"5 min read",

tags:[
"ramadan",
"capsule"
],

}

];

export const featuredArticle =
journalArticles.find(
(article)=>article.featured
)!;