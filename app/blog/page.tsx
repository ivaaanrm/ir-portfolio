import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { InView } from "../components/in-view";

export const metadata = {
  title: "My Adventures",
  description: "Travel adventures and experiences by Roger Gonzalez Sedano",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h1 className="mb-8 text-3xl font-bold text-center text-black dark:text-white">My Adventures</h1>
      </InView>
      <div className="space-y-6">
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
              variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <Link
                className="group block transition-all duration-300 hover:scale-105"
                href={`/blog/${post.slug}`}
              >
                <article className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row">
                {/* Imagen de portada */}
                <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                  {post.metadata.image ? (
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold opacity-50">
                        {post.metadata.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  {/* Overlay con fecha */}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {formatDate(post.metadata.publishedAt, false)}
                  </div>
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.metadata.title}
                    </h2>
                    
                    {post.metadata.summary && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4">
                        {post.metadata.summary}
                      </p>
                    )}
                  </div>
                  
                  {/* Tags */}
                  {post.metadata.tags && (
                    <div className="flex flex-wrap gap-1">
                      {post.metadata.tags.split(", ").slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
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
      </div>
    </section>
  );
}
