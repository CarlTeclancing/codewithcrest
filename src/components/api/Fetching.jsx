import { useEffect, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Fetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json();
                setPosts(json);
                console.table(json); // Logs the fetched data
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []); // <-- Important: add dependency array to run effect once

    return (
        <div>
            <h2>Fetched Todos</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
