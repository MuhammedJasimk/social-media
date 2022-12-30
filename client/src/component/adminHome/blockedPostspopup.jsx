import React,{useEffect, useState} from 'react'
// import axios from "axios"
import {axios_two} from "../../axiosInstance/axiosInstance";


const style={
    position:'fixed',
    top:'20vh',
    left:'35%',
    right:'35%',
    height:'60vh',
    transform:'transilate(-50%,-50%)',
    // backgroundColor:'#fff',
    // padding:'30px 20px',
    zIndex:1000,
  }
  
  const overLay={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.5)',
    zIndex:1000,
    borderRadious:'10px'
  }

function BlockedUser({children,onclose,open}) {

    const [data,setData] = useState({})
    console.log(open);
//  console.log(open);
// if(open.id){
// // const pid =open.id
// function call() {
//     console.log("open.id");
//         axios.get(`http://localhost:8080/api/user/BlockedUser?user=${id}`).then((response)=>{
//             console.log(response.data);
//             setData(response.data)
//         })
// }
// }

        useEffect(() => {
            console.log(open);
            console.log(open?.id);
            if (open?.id) {
                console.log(open?.id);
                console.log("open.id");
                axios_two.get(`user/PostBlockedUser?user=${open.id}`).then((response)=>{
            console.log(response);
            setData(response.data)
        }) 
            }
        }, [open]);
   
    if(!open.status){
        return(null)
    }else{
    return (
    <div>
        <div style={overLay}/>
        <div  className='rounded' style={style}>
        <div className='bg-white px-3 py-6 rounded-lg'>
        <p className='cursor-pointer absolute top-[10px] right-[10px]' onClick={onclose}>X</p>
        <div className='max-h-full  overflow-auto'>
        <p className='font-semibold text-xl text-center'>Users</p>
        {
            data.length &&
            data?.map((item,index)=>{
                return(
                    <div className='flex items-center mt-3' key={index}>
                                    <div className='bg-gray-200 h-[40px] w-[40px] rounded-full'>
                                        <img src={`/images/post/${item.image}`} className='object-cover rounded-full w-full h-full ' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <p>{item?.username}</p>
                                    </div>
                                </div>
                )
               
            })
        }
       </div>
        </div>
        </div>
    </div>
  )
    }
}



export default BlockedUser