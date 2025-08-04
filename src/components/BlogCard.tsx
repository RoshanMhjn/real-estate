import { Eye } from "lucide-react";
import type { Blog } from "../types/blog";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="overflow-hidden w-full max-w-sm hover:shadow-xl transition p-0">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
          {blog.tags.map((tag, index) => (
            <Badge key={index} className="bg-orange-500 text-white">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
        <p className="text-sm text-muted-foreground">{blog.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> {blog.readCount} reads
          </span>
          <span>{blog.time}</span>
        </div>
      </CardContent>
    </Card>
  );
};
