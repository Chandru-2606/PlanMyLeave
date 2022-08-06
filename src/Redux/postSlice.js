import {  createSlice } from "@reduxjs/toolkit"


const postSlice = createSlice({
    name:"post",
    initialState:{
     data:[
        {
         "leaveDate" :"New Year",
         "Date" : "01.01.22 (Sat)"
        },
        {
           "leaveDate" :"Makar Sakranti / Pongal",
           "Date" : "14.01.22 (Fri)"
          },
          {
           "leaveDate" :"Republic Day (Closed Holiday)",
           "Date" : "26.01.22 (Wed)"
          },
          {
           "leaveDate" :"Maha Shivratri (Restricted Holiday)",
           "Date" : "01.03.22 (Tue)"
          },
          {
           "leaveDate" :"Holi(Restricted Holiday)",
           "Date" : "18.03.22 (Fri)"
          },
          {
           "leaveDate" :"UGADI/ Gudi Padva (Closed Holiday)",
           "Date" : "02.04.22 (Sat)"
          },
          {
           "leaveDate" :"Good Friday(Restricted Holiday)",
           "Date" : "15.04.22 ( Fri )"
          },
          {
           "leaveDate" :"Vishu(Restricted Holiday) ",
           "Date" : "15.04.22 (Fri)"
          },
          {
           "leaveDate" :"May Day(Restricted Holiday)",
           "Date" : "01.05.22 (Sun)"
          },
          {
           "leaveDate" :"Id ul Fitr(Restricted Holiday)",
           "Date" : "03.05.22 (Tue)"
          },
     ],
    isSuccess:false,
    loading:false,
},

// extraReducers: {
    
//     [getPost.pending]:(state,{payload})=>{
//        state.loading=true;
//     },
//     [getPost.fulfilled]:(state,{payload})=>{
//         state.loading=false;
//         state.data = payload;
//         state.isSuccess=true;
//      },
//      [getPost.rejected]:(state,{payload})=>{
//         state.message=payload;
//         state.loading=false;
//         state.isSuccess=true;
//      }
// },

});
export default postSlice;
