import React,{useState,useEffect} from "react";
import axios from 'axios';
import { RecentWidget } from "./recent-widget";

export const Recents=()=>{
    const [data,setData]= useState(null);
    const [ loading,setLoading ]= useState(true);
    useEffect(()=>{
        const fetchFromDb= async ()=>{
            try{
                const res= await axios.get('http://localhost:8000/get-data');
                setData(res.data);
                setLoading(false);
                console.log(data);
            }
            catch(error){
                console.log({"Error":"Error fetching data from server"});
            }
        }
        fetchFromDb();
    },[])
    const deleteEntry= async (id)=>{
        try{
            await axios.delete(`http://localhost:8000/delete-data:${id}`);
        }
        catch{
            console.log("Error Deleting data");
        }
    }
    return (
        <div className="mx-32 mt-10 mb-5">
            {data?.map((element,key=element._id)=>{
                return <RecentWidget key={element._id} weatherData={element} deleteEntry={deleteEntry}/>
            })}
        </div>
    )
}

//sort items by order of last updated