if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.`
  )
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL)
export const siteOrigin = siteURL.origin

export const defaultMeta = {
  title: 'next-typescript | basement.studio',
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  ogImage: `${siteOrigin}/og.png`,
  twitter: {
    handle: '@basementstudio',
    site: '@basementstudio'
  }
}
