import React, { useState,useEffect,useRef } from 'react';

function DropDown({label,op,select,onSelectedChange}){
    const [open,setOpen]=useState(false);
    const ref=useRef();
    useEffect(
        ()=>{
            const bodyclick=(event)=>{
                if(ref.current.contains(event.target)){
                    return;
                }
                setOpen(false);
            };
            document.body.addEventListener('click',bodyclick,{capture:true});
            return()=>{
                document.body.removeEventListener('click',bodyclick);
            };
        },[])
    const renderr=op.map(
        (option)=>{
            if(select.color===option.color){return null;}
            return (
                <div key={option.value} className='item'
                    onClick={()=>{onSelectedChange(option);}}
                >
                    {option.label}
                </div>
            );  
        });
    return (
        <div ref={ref} className='ui from'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={()=>{setOpen(!open)}}
                className={`ui selection dropdown ${open?'visible active':''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{select.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>{renderr}</div>
                </div>
            </div>
        </div>
    );
}
export default DropDown;