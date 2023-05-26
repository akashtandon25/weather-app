import React from "react";

export const About=()=>{
    return (
        <div className="bg-gray-100 mx-52 my-36 rounded-2xl">
            <p className="text-2xl m-2">This Website has been designed as part of a project for Glaztower Pvt. Ltd.</p>
            <p className="text-2xl m-2">{`Designed by: Akash Tandon (2020UII7415)`}</p>
            <p className="text-xl m-2">Relevant Links:</p>
            <a href="https://www.linkedin.com/in/akashtandon25/" className="text-xl m-2 text-blue-600 underline hover:text-blue-800">LinkedIn</a>
            <a href="https://github.com/akashtandon25" className="text-xl m-2 text-blue-600 underline hover:text-blue-800">GitHub</a>
            <a href="https://leetcode.com/akashtandon25/" className="text-xl m-2 text-blue-600 underline hover:text-blue-800">Leetcode</a>
            <p className="text-xl m-2">Contact  Me:</p>
            <a href="mailto: akash.tandon.ug20@nsut.ac.in" className="text-xl m-2 text-blue-600 underline hover:text-blue-800">E-mail</a>
            <a href="tel: +919205840934" className="text-xl m-2 text-blue-600 underline hover:text-blue-800">Call</a>
        </div>
    )
}