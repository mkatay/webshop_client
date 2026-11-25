import React from 'react'
import { Link } from 'react-router'

export const CategoryCard = ({ category }) => {

     const handleImageError = (e) => {
        e.target.src = 'noImage.jpg'
    }

  return (
    <Link to={`/products/${category.id}`}>
        <div className="card bg-base-100 image-full  shadow-sm">
        <figure>
            <img className='w-full object-cover' src={category.thumbnail} alt={category.name} 
              onError={handleImageError}
        />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{category.name}</h2>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Termékek megtekintése →</button>
            </div>
        </div>
        </div>
    </Link>
  )
}
