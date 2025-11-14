import { apiQuery, SEOQuery } from '../api/index.js';
//@ts-ignore
import { gql } from '@apollo/client/core/core.cjs';
export default function withGlobalProps(opt, callback) {
    const revalidate = parseInt(process.env.REVALIDATE_TIME);
    const queries = [GlobalQuery];
    if (opt.query)
        queries.push(opt.query);
    if (opt.queries)
        queries.push.apply(queries, opt.queries);
    if (opt.seo)
        queries.push(SEOQuery(opt.seo.model, opt.seo.id));
    return async (context) => {
        const props = await apiQuery(queries, { preview: context.preview });
        if (callback)
            return await callback({ context, props: { ...props }, revalidate });
        else
            return { props: { ...props }, context, revalidate };
    };
}
const GlobalQuery = gql `
	query Global {
		site: _site {
			favicon: faviconMetaTags {
				attributes
				content
				tag
			}
			globalSeo {
				facebookPageUrl
				siteName
				titleSuffix
				twitterAccount
				fallbackSeo {
					description
					title
					twitterCard
					image {
						id
						title
						width
						responsiveImage {
							alt
							aspectRatio
							base64
							bgColor
							height
							sizes
							src
							srcSet
							webpSrcSet
							title
							width
						}
					}
				}
			}
		}
	}
`;
//# sourceMappingURL=withGlobalProps.js.map