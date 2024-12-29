import React from "react";


export const Card = ({image, title, description}) => {

  return (

    <div className="card bg-ligh mx-auto">
      <img src={image} className="card-img p-3 " alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-description text-center">{description}</p>
       </div>
    </div>
  )


}

export default Card