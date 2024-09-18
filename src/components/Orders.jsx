const Orders = ({name, image, category, price, action}) => {
    
    
    return (
      <div className="order">
        <div className="img-box">
            <img className="img" src={image} alt={name} />
        </div>
        <button className="btn" onClick={action}>Add to Cart</button>
        <h4 className="order-category">{category}</h4>
        <h1 className="order-title">{name}</h1>
        <h3 className="order-price">${price.toFixed(2)}</h3>
      </div>
    )
}
  
export default Orders;