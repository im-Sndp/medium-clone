import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
    const [loading , setLoading] = useState(true);
    const [blogs,setBlogs] = useState([]);

    const headers = {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      };
    
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, { headers: headers }).then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
    },[])

    return {
        loading,
        blogs
    }
}

export const useBlog = ( { id }: { id : string }) => {
    const [loading , setLoading] = useState(true);
    const [blog,setBlog] = useState([]);

    const headers = {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      };
    
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, { headers: headers }).then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
    },[])

    return {
        loading,
        blog
    }
}