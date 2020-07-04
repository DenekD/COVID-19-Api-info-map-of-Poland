import React from 'react';

const Card = ({ title }) => {

  console.log('działa');
  return (
    <div className="card">
      <div className="header">{title} position </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
        sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
    </div>
  );
}



export default Card;
