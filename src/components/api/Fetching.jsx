import { useEffect, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Fetching() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetching, setErrorFetching ] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json();
                setPosts(json);
                console.table(json); // Logs the fetched data
                
            } catch (error) {
                console.error("Error fetching posts:", error);
                setErrorFetching(error)
            }
            setIsLoading(false);
        };

        fetchPosts();


    }, []); // <-- Important: add dependency array to run effect once

    if(isLoading){
        return <h1>fetching data ...... </h1>
    }

    if(errorFetching){
        return <h1>Error Fetching Data!</h1>
    }

    return (
        <>
            <h2>Fetched Todos</h2>
            <div className="post">
                {posts.map((post) => (
                    <div key={post.id} className="individual-post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>{post.id}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
