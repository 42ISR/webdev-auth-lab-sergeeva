import { Link } from 'react-router-dom'

const ItemCard = ({ id, title, description, price, imageUrl, username, highestBid, bidCount }) => {
    return (
        <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="item-card">
                <img src={imageUrl} className="item-image" alt={title} />
                <div className="item-content">
                    <span className="status-badge status-active">Активное</span>
                    <h3 className="item-title">{title}</h3>
                    <p className="item-description">{description}</p>
                    <div className="item-footer">
                        <div>
                            <div className="item-price">{price} Р</div>
                            <div className="bid-info">
                                {highestBid ?? price} Р
                                <span className="bid-count">{bidCount}</span>
                            </div>
                        </div>
                        <div className="item-meta">
                            <span className="item-seller">Продавец: {username}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard