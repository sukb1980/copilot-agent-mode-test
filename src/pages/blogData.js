// blogData.js
// Centralized blog post data for the Akshay Kalash NGO website.
// Each blog post includes id, title, date, excerpt, and body.
// Used for dynamic blog listing and detail pages.

/**
 * Array of blog post objects
 * @type {Array<{id: number, title: string, date: string, excerpt: string, body: string}>}
 */
const blogs = [
  {
    id: 0,
    title: 'Empowering Girls Through Education',
    date: 'July 2025',
    excerpt: 'Education is the most powerful tool for change. Read how ABWU is transforming lives through its education initiatives.',
    body: `Education is the most powerful tool for change. At ABWU, we believe that every girl deserves the opportunity to learn, grow, and achieve her dreams. Our education initiatives include formal schooling, non-formal education, and vocational training. We have seen countless stories of transformation as girls gain confidence, skills, and hope for a brighter future.\n\nOur dedicated teachers and volunteers work tirelessly to provide a nurturing environment where every child can thrive. We invite you to support our mission and help us empower more girls through education.\n\nTogether, we can break the cycle of poverty and create lasting change.`
  },
  {
    id: 1,
    title: 'Stories of Hope: Rekha’s Journey',
    date: 'June 2025',
    excerpt: 'From rescue to reintegration, Rekha’s story is a testament to resilience and the power of support.',
    body: `From rescue to reintegration, Rekha’s story is a testament to resilience and the power of support. Her journey inspires us to continue our fight for justice and dignity for every girl.`
  },
  {
    id: 2,
    title: 'Fighting Child Trafficking: Our Approach',
    date: 'May 2025',
    excerpt: 'ABWU works with law enforcement and communities to combat trafficking and protect vulnerable children.',
    body: `ABWU works with law enforcement and communities to combat trafficking and protect vulnerable children. Our approach includes awareness, rescue, rehabilitation, and advocacy.`
  },
  {
    id: 3,
    title: 'Volunteer Voices: Making a Difference',
    date: 'April 2025',
    excerpt: 'Hear from our dedicated volunteers about their experiences and the impact they’ve made at ABWU.',
    body: `Hear from our dedicated volunteers about their experiences and the impact they’ve made at ABWU. Their stories show the power of community and compassion.`
  },
];

export default blogs;
