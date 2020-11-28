import React from 'react';

function Show(props) {
  const h = () => {
     if(props.time.h === 0){
       return '';
     }else {
       return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
     }
  }
  return (
    <div>
       {h()}
       <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
       <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>:
       <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>:
       </div>
  );
}
export default Show ;
