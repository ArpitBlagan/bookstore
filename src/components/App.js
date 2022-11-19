import React,{useState} from 'react';
import Searchbox from './Searchbox';
import DropDown from './DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from './List';
import axios from 'axios';
const items=[
    {
        label:'none',
        color:'anythink'
    },
    {
        label:'Author',
        color:'author'
    },
    {
        label:'Title', 
        color:'title'
    },
    {
        label:'PublishedDate',
        color:'date'
    },
    {
        label:'Subject',
        color:'subject'
    }
];
const key="AIzaSyBNVxwZ6_9JFI6Z7TD3dWk1D389UMo6By4";
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBNVxwZ6_9JFI6Z7TD3dWk1D389UMo6By4
function App(){
    const [term,setTerm]=useState("");
    const [sel,setSel]=useState({
        label:'none',color:'anythink'
    });
    const [result,setResult]=useState([]);
    const onSub=async(term)=>{
        await axios.get("https://www.googleapis.com/books/v1/volumes?q="+term+"&key="+key)
        .then(data=>{setResult(data.data.items);})
    }
    console.log(term);
    return (
        <div className='ui container tt'>
            <div className='ff'><b>BookStore</b></div>
            <DropDown 
            label={"Filter"}
            op={items}
            select={sel}
            onSelectedChange={setSel}
           />
            <Searchbox ff={sel.label} sub={onSub} val={term} set={setTerm} onsub={onSub}/>
            
                    <List array={result} val={term} type={sel.color}/>
                
            
        </div>
    );
}
export default App;