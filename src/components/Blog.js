import React, { useState } from "react";
import "./Blog.css";
import Breadcrumb from "./Breadcrumb";
import { FaShareAlt } from "react-icons/fa";
import posts from "./data/blogPosts.json"; // Import JSON data

const Blog = () => {
    const [expandedPostIndex, setExpandedPostIndex] = useState(null);

    const handleShare = (post) => {
        if (navigator.share) {
            navigator
                .share({
                    title: post.title,
                    text: post.sections.map((section) => section.content).join(" "),
                    url: post.link,
                })
                .then(() => console.log("Beitrag erfolgreich geteilt"))
                .catch((error) => console.error("Error sharing:", error));
        } else {
            alert("Die Freigabe wird von diesem Browser nicht unterstützt.");
        }
    };

    const toggleExpand = (index) => {
        setExpandedPostIndex(index === expandedPostIndex ? null : index);
    };

    return (
        <section className="blog">
            <Breadcrumb />
            <h2>Blog</h2>
            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className={`blog-post ${expandedPostIndex === index ? "expanded" : ""}`}
                    >
                        <div className="post-header">
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="post-info">
                                <h3>{post.title}</h3>
                                {/* Display short text */}
                                <p className="post-snippet">
                                    {expandedPostIndex === index
                                        ? post.sections
                                              .map((section) => section.content)
                                              .join(" ")
                                        : post.sections[0].content.slice(0, 100) + "..."}
                                </p>
                                <div className="post-actions">
                                    <button
                                        className="btn-primary"
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {expandedPostIndex === index ? "Weniger anzeigen" : "Weiterlesen"}
                                    </button>
                                    <button
                                        className="share-button"
                                        onClick={() => handleShare(post)}
                                    >
                                        <FaShareAlt /> Teilen
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Show full content only when expanded */}
                        {expandedPostIndex === index && (
                            <div className="post-content">
                                {post.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <h4>{section.subtitle}</h4>
                                        <p>{section.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
