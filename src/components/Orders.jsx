const Orders = ({name, image, category, price}) => {
    
    
    return (
      <div className="card">
        <div className="img-box">
            <img src={image} alt={name} />
        </div>
        <button className="btn">Add to Cart</button>
        <h4 className="order-category">{category}</h4>
        <h1 className="card-title">{name}</h1>
        <h3 className="order-price">{price}</h3>
      </div>
    )
}
  
export default Orders;