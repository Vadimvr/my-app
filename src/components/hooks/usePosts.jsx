import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            console.log('сортировка true')
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (post, sort, query) => {
    
    const sortedPosts = useSortedPosts(post,sort) 

    const sortedAndSearchPosts = useMemo(() => {
        console.log('поиск')
        return sortedPosts.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts]);

      return sortedAndSearchPosts;
}