import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { InView } from "../components/in-view";

export const metadata = {
  title: "My Adventures",
  description: "Travel adventures and experiences by Ivan Romero",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <InView variants={fadeUp} transition={{ duration: 0.5 }}>
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8">
          Blog
        </h2>
      </InView>

      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <InView
              key={post.slug}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link className="group block" href={`/blog/${post.slug}`}>
                <article className="flex flex-col sm:flex-row gap-5 py-6 border-t border-neutral-200 last:border-b">
                  {/* Cover Image */}
                  <div className="relative w-full sm:w-44 h-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                    {post.metadata.image ? (
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-300 text-3xl font-light">
                        {post.metadata.title.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors duration-200">
                        {post.metadata.title}
                      </h3>
                      <span className="text-xs text-neutral-400 ml-4 flex-shrink-0">
                        {formatDate(post.metadata.publishedAt, false)}
                      </span>
                    </div>

                    {post.metadata.summary && (
                      <p className="text-sm text-neutral-500 leading-relaxed mb-3 line-clamp-2">
                        {post.metadata.summary}
                      </p>
                    )}

                    {post.metadata.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.metadata.tags
                          .split(", ")
                          .slice(0, 3)
                          .map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </InView>
          ))}

        {/* More incoming */}
        <InView variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="mt-16 text-center py-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-400">
              More adventures incoming...
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
