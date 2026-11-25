import React from 'react'
import { Link } from 'react-router'

export const CategoryCard = ({ category }) => {

     const handleImageError = (e) => {
        e.target.src = 'noImage.jpg'
    }

  return (
    <Link to={`/products/${category.id}`}>
        <div className="card  h-64 image-full ">
        <figure>
            <img className='w-full h-full object-cover' src={category.thumbnail} alt={category.name} 
              onError={handleImageError}
        />
        </figure>
        <div className="card-body justify-end">
            <h2 className="card-title text-fuchsia-400 uppercase text-3xl">{category.name}</h2>
            <div className="card-actions justify-end">
                <button className="btn bg-fuchsia-100">Termékek megtekintése →</button>
            </div>
        </div>
        </div>
    </Link>
  )
}
