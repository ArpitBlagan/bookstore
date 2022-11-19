import React,{useState} from 'react';
function Searchbox(props){
    return (<div className='ui segment'>
        <form className='ui form' onSubmit={event=>{event.preventDefault();
        props.onsub(props.val)}}>
        <div className='field'>
            <label>Search</label>
            <input 
            onChange={(event)=>{props.set(event.target.value);}} 
            type="text" 
            placeholder={`Enter the ${props.ff} then press Enter`} 
            value={props.val}/>
        </div>
        </form>
    </div>);
}
export default Searchbox;