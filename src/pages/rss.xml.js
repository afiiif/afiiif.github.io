import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

const SITE_TITLE = "Afifudin's Blog";
const SITE_DESCRIPTION =
  'Articles on software engineering, system design, frontend, backend, and lessons learned from building real-world applications.';

export async function GET(context) {
  const posts = await getCollection('blog');

  const sortedPosts = [...posts].sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
  const latestPostPubDate = sortedPosts[0]?.data.publishDate.toUTCString();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: [
      `<language>en-us</language>`,
      `<lastBuildDate>${latestPostPubDate}</lastBuildDate>`,
    ].join(''),
  });
}
