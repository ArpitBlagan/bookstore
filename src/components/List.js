import React, { useState,useEffect } from 'react';
import Card from './Card';
//Problem Counter not working for the first render of the result???
function List({array,type,val}){
    var ff=0;
    const [count,setCount]=useState(0);
    useEffect(
        () => {
          setCount(ff);
        },
        [type,val,ff]
      );
    const render=()=>{ff=0;
            if(val===''){return null;}
            if(type==="title"){
                return array.map(
                    (bb)=>{
                        if(bb.volumeInfo.title.toLowerCase().includes(val.toLowerCase())){ff++;
                            return (<Card
                            key={bb.id}
                            src={bb.volumeInfo.imageLinks?bb.volumeInfo.imageLinks.smallThumbnail:''}
                            auth={bb.volumeInfo.authors}
                            date={bb.volumeInfo.publishedDate}
                            title={bb.volumeInfo.title}
                        />); 
                        }         
                    }
                );   
            }
            else if(type==="subject"){
                return array.map(
                    (bb)=>{
                        if(String(bb.volumeInfo.description).includes(val)){ff++;
                            return (<Card
                            key={bb.id}
                            auth={bb.volumeInfo.authors}
                            src={bb.volumeInfo.imageLinks?bb.volumeInfo.imageLinks.smallThumbnail:''}
                            date={bb.volumeInfo.publishedDate}
                            title={bb.volumeInfo.title}
                        />); 
                        }         
                    }
                ); 
            }
            else if(type==="author"){
                return array.map(
                    bb=>{
                        if(bb.volumeInfo.authors){
                            const arr=bb.volumeInfo.authors;
                            for(let i=0;i<arr.length;i++){
                                if(String(arr[i]).toLocaleLowerCase().includes(val.toLocaleLowerCase())){
                                   ff++; return (
                                        <Card
                            key={bb.id}
                            auth={bb.volumeInfo.authors}
                            src={bb.volumeInfo.imageLinks?bb.volumeInfo.imageLinks.smallThumbnail:''}
                            date={bb.volumeInfo.publishedDate}
                            title={bb.volumeInfo.title}
                        />
                                    );
                                }
                            }
                        }
                    }
                );
            }
            else if(type==="date"){
                return array.map(
                    (bb)=>{
                        if(String(bb.volumeInfo.publishedDate).includes(val)){ff++;
                            return (<Card
                            key={bb.id}
                            auth={bb.volumeInfo.authors}
                            src={bb.volumeInfo.imageLinks?bb.volumeInfo.imageLinks.smallThumbnail:''}
                            date={bb.volumeInfo.publishedDate}
                            title={bb.volumeInfo.title}
                        />); 
                        }         
                    }
                ); 
            }
            return array.map((bb)=>{ff++;
            return<Card
               key={bb.id}
                            auth={bb.volumeInfo.authors}
                            src={bb.volumeInfo.imageLinks?bb.volumeInfo.imageLinks.smallThumbnail:''}
                            date={bb.volumeInfo.publishedDate}
                            title={bb.volumeInfo.title}
            />;
        });
    };
    return (
        <div className='ui relaxed divided list'>
            <h2 className='bottom'>Book Count={count}</h2>
            {
                render()
            }
            <h2 className='bottom'>Opps That's It</h2>
        </div>
    );
}
export default List;