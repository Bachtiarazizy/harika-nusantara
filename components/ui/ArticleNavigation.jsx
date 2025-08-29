// components/ArticleNavigation.js
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Index";

export default function ArticleNavigation({ previousPost, nextPost }) {
  if (!previousPost && !nextPost) return null;

  return (
    <nav className="flex justify-between items-center py-8 border-t border-gray-200">
      {/* Previous Article */}
      {previousPost ? (
        <Link href={`/blog/${previousPost.slug.current}`} className="flex-1 max-w-sm">
          <Button variant="ghost" className="w-full justify-start p-4 h-auto text-left hover:bg-coffee-light/5">
            <div>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous Article
              </div>
              <div className="font-medium text-coffee-dark line-clamp-2">{previousPost.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}

      {/* Next Article */}
      {nextPost ? (
        <Link href={`/blog/${nextPost.slug.current}`} className="flex-1 max-w-sm ml-4">
          <Button variant="ghost" className="w-full justify-end p-4 h-auto text-right hover:bg-coffee-light/5">
            <div>
              <div className="flex items-center justify-end text-sm text-muted-foreground mb-1">
                Next Article
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
              <div className="font-medium text-coffee-dark line-clamp-2">{nextPost.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}
    </nav>
  );
}
