import fs from 'fs';
import path from 'path';
import https from 'https';

const SLUGS = [
  'vat-tu-ban-giao-bcons-central-park',
  'kinh-nghiem-di-xem-nha-mau-can-ho',
  'can-ho-studio-bcons-central-park',
  'nha-mau-va-can-ho-ban-giao-khac-nhau-the-nao',
  'can-ho-1-phong-ngu-bcons-central-park',
  'dien-tich-thong-thuy-va-tim-tuong-can-ho',
  'can-ho-2-phong-ngu-bcons-central-park',
  'chi-phi-hoan-thien-noi-that-can-ho-sau-ban-giao',
  'can-ho-3-phong-ngu-bcons-central-park',
  'danh-gia-du-an-bcons-central-park-tam-hiep',
  'kinh-nghiem-mua-can-ho-hinh-thanh-trong-tuong-lai',
  'so-sanh-vi-tri-tam-hiep-va-cac-khu-vuc-lan-can-bien-hoa',
  'huong-dan-tinh-toan-tai-chinh-mua-can-ho',
];

const CATEGORY_MAP = {
  'vat-tu-ban-giao-bcons-central-park': { category: 'nha-mau', categoryLabel: 'Nhà mẫu' },
  'kinh-nghiem-di-xem-nha-mau-can-ho': { category: 'nha-mau', categoryLabel: 'Nhà mẫu' },
  'can-ho-studio-bcons-central-park': { category: 'loai-can-ho', categoryLabel: 'Loại căn hộ' },
  'nha-mau-va-can-ho-ban-giao-khac-nhau-the-nao': { category: 'nha-mau', categoryLabel: 'Nhà mẫu' },
  'can-ho-1-phong-ngu-bcons-central-park': { category: 'loai-can-ho', categoryLabel: 'Loại căn hộ' },
  'dien-tich-thong-thuy-va-tim-tuong-can-ho': { category: 'kinh-nghiem', categoryLabel: 'Kinh nghiệm' },
  'can-ho-2-phong-ngu-bcons-central-park': { category: 'loai-can-ho', categoryLabel: 'Loại căn hộ' },
  'chi-phi-hoan-thien-noi-that-can-ho-sau-ban-giao': { category: 'tai-chinh', categoryLabel: 'Tài chính' },
  'can-ho-3-phong-ngu-bcons-central-park': { category: 'loai-can-ho', categoryLabel: 'Loại căn hộ' },
  'danh-gia-du-an-bcons-central-park-tam-hiep': { category: 'danh-gia', categoryLabel: 'Đánh giá', featured: true },
  'kinh-nghiem-mua-can-ho-hinh-thanh-trong-tuong-lai': { category: 'kinh-nghiem', categoryLabel: 'Kinh nghiệm', featured: true },
  'so-sanh-vi-tri-tam-hiep-va-cac-khu-vuc-lan-can-bien-hoa': { category: 'danh-gia', categoryLabel: 'Đánh giá', featured: true },
  'huong-dan-tinh-toan-tai-chinh-mua-can-ho': { category: 'tai-chinh', categoryLabel: 'Tài chính', featured: true },
};

const LOCAL_THUMBNAILS = {
  'vat-tu-ban-giao-bcons-central-park': '/images/news/bcons-central-park-vat-tu-ban-giao.webp',
  'kinh-nghiem-di-xem-nha-mau-can-ho': '/images/news/bcons-central-park-nha-mau-tham-quan.webp',
  'can-ho-studio-bcons-central-park': '/images/news/bcons-central-park-can-ho-studio.webp',
  'nha-mau-va-can-ho-ban-giao-khac-nhau-the-nao': '/images/news/bcons-central-park-nha-mau-vs-ban-giao.webp',
  'can-ho-1-phong-ngu-bcons-central-park': '/images/news/bcons-central-park-can-ho-1pn.webp',
  'dien-tich-thong-thuy-va-tim-tuong-can-ho': '/images/news/bcons-central-park-dien-tich-thong-thuy.webp',
  'can-ho-2-phong-ngu-bcons-central-park': '/images/news/bcons-central-park-can-ho-2pn.webp',
  'chi-phi-hoan-thien-noi-that-can-ho-sau-ban-giao': '/images/news/bcons-central-park-chi-phi-noi-that.webp',
  'can-ho-3-phong-ngu-bcons-central-park': '/images/news/bcons-central-park-can-ho-3pn.webp',
  'danh-gia-du-an-bcons-central-park-tam-hiep': '/images/news/bcons-central-park-tam-hiep-phoi-canh.webp',
  'kinh-nghiem-mua-can-ho-hinh-thanh-trong-tuong-lai': '/images/news/bcons-central-park-checklist-phap-ly.webp',
  'so-sanh-vi-tri-tam-hiep-va-cac-khu-vuc-lan-can-bien-hoa': '/images/news/bcons-central-park-so-sanh-khu-vuc.webp',
  'huong-dan-tinh-toan-tai-chinh-mua-can-ho': '/images/news/bcons-central-park-tinh-toan-tai-chinh.webp',
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve, reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBinary(res.headers.location, destPath).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: ${res.statusCode}`));
      }
      const dir = path.dirname(destPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

function extractToc(html) {
  const headings = [];
  const regex = /<h([2-3])[^>]*id=\"([^\"]+)\"[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    headings.push({ level, id, text });
  }
  return headings;
}

async function processArticles() {
  console.log('Starting scrape of 13 articles...');
  const articles = [];

  for (const slug of SLUGS) {
    console.log(`Processing: ${slug}`);
    const url = `https://bconstamhiep.net/tin-tuc/${slug}/`;
    const html = await fetchText(url);

    // Title
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

    // Date
    const timeMatch = html.match(/<time[^>]*datetime=\"([^\"]*)\"[^>]*>([\s\S]*?)<\/time>/i);
    const date = timeMatch ? timeMatch[2].trim() : '01/09/2026';

    // Author
    const author = 'Lê Ngọc Long';

    // Meta description
    const descMatch = html.match(/<meta[^>]+name=\"description\"[^>]+content=\"([^\"]*)\"/i) ||
                      html.match(/<meta[^>]+content=\"([^\"]*)\"[^>]+name=\"description\"/i);
    const metaDescription = descMatch ? descMatch[1] : '';

    // Extract article prose
    let content = '';
    const proseMatch = html.match(/<div class=\"article-prose[^\"]*\">([\s\S]*?)<\/div>\s*<\/article>/i);
    if (proseMatch) {
      content = proseMatch[1].trim();
    } else {
      const artMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
      content = artMatch ? artMatch[1].trim() : '';
    }

    // Clean up astro attributes
    content = content.replace(/\s+data-astro-cid-[a-z0-9]+/g, '');

    // Normalize internal navigation links
    content = content.replace(/\/bcons-central-park\/vi-tri\/?/g, '/vi-tri');
    content = content.replace(/\/bcons-central-park\/mat-bang\/?/g, '/mat-bang');
    content = content.replace(/\/bcons-central-park\/gia-ban\/?/g, '/gia-ban');
    content = content.replace(/\/bcons-central-park\/phap-ly\/?/g, '/phap-ly');
    content = content.replace(/\/bcons-central-park\/tien-ich\/?/g, '/tien-ich');
    content = content.replace(/\/bcons-central-park\/tien-do\/?/g, '/tien-do');
    content = content.replace(/\/bcons-central-park\/chu-dau-tu\/?/g, '/chu-dau-tu');
    content = content.replace(/\/tin-tuc\/([a-z0-9-]+)\//g, '/tin-tuc/$1');
    content = content.replace(/\/#nhan-tu-van/g, '#tu-van');
    content = content.replace(/\/gioi-thieu\/?/g, '/chu-dau-tu');

    // Check for inline images in content and download them if needed
    const imgRegex = /<img[^>]+src=\"([^\"]+)\"[^>]*>/gi;
    let imgMatch;
    const downloadedImages = new Set();

    while ((imgMatch = imgRegex.exec(content)) !== null) {
      const imgSrc = imgMatch[1];
      if (imgSrc.startsWith('/tai-lieu-du-an/') || imgSrc.startsWith('/_astro/')) {
        const fullImgUrl = `https://bconstamhiep.net${imgSrc}`;
        const localRelPath = imgSrc; // keep same path relative to public
        const localFilePath = path.join(process.cwd(), 'public', localRelPath);

        if (!downloadedImages.has(imgSrc)) {
          downloadedImages.add(imgSrc);
          try {
            console.log(`  Downloading asset: ${imgSrc}`);
            await downloadBinary(fullImgUrl, localFilePath);
          } catch (err) {
            console.warn(`  Failed downloading ${imgSrc}: ${err.message}`);
          }
        }
      }
    }

    // Estimate reading time
    const textWords = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    const readTimeMin = Math.max(2, Math.round(textWords / 220));

    // TOC
    const toc = extractToc(content);

    const catInfo = CATEGORY_MAP[slug] || { category: 'kinh-nghiem', categoryLabel: 'Kinh nghiệm' };
    const thumbnail = LOCAL_THUMBNAILS[slug] || '/images/news/bcons-central-park-tam-hiep-phoi-canh.webp';

    articles.push({
      slug,
      title,
      date,
      author,
      readTime: `${readTimeMin} phút đọc`,
      category: catInfo.category,
      categoryLabel: catInfo.categoryLabel,
      featured: !!catInfo.featured,
      thumbnail,
      description: metaDescription,
      toc,
      content,
    });
  }

  console.log(`Successfully parsed ${articles.length} articles!`);

  // Write to data/news-articles.ts
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const tsContent = `// Generated automatically from bconstamhiep.net articles
export interface TocItem {
  level: number
  id: string
  text: string
}

export interface NewsArticle {
  slug: string
  title: string
  date: string
  author: string
  readTime: string
  category: 'loai-can-ho' | 'nha-mau' | 'tai-chinh' | 'kinh-nghiem' | 'danh-gia'
  categoryLabel: string
  featured?: boolean
  thumbnail: string
  description: string
  toc: TocItem[]
  content: string
}

export const NEWS_ARTICLES: NewsArticle[] = ${JSON.stringify(articles, null, 2)};

export const ALL_NEWS_SLUGS = NEWS_ARTICLES.map(a => a.slug);

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): NewsArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return NEWS_ARTICLES.slice(0, limit);
  
  // Prefer same category, then others
  const sameCat = NEWS_ARTICLES.filter(a => a.slug !== slug && a.category === current.category);
  const others = NEWS_ARTICLES.filter(a => a.slug !== slug && a.category !== current.category);
  
  return [...sameCat, ...others].slice(0, limit);
}
`;

  fs.writeFileSync(path.join(dataDir, 'news-articles.ts'), tsContent, 'utf-8');
  console.log('Wrote data/news-articles.ts successfully!');
}

processArticles().catch(err => {
  console.error('Error processing articles:', err);
  process.exit(1);
});
