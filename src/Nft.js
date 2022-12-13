import "./nft.css"

function Nft({item_img, item, id, description, price, days_left, creator_avatar, creator}) {

    return (
        <section className="nft_showcase">
            <figure className="nft_img">
                <img src={item_img} alt="item" className="img_item"></img>
                <div></div>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
            </figure>
            <h2>{item} #{id}</h2>
            <p>{description}</p>
            <section className="sale_info">
                <div className="price">   
                    <p>
                        <span>
                        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/>
                        </svg>
                        </span>{price} ETH
                    </p>       
                </div>
                <div className="time_left"> 
                    <p>
                        <span>
                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/>
                        </svg>
                        </span>{days_left} days left
                    </p>
                </div>
            </section>
            <hr/>
            <section className="creator">
                <img src={creator_avatar} alt="creater-avatar" className="creator_avatar"/>
                <p>Creation of<span className="creator_name">{creator}</span></p>
            </section>    
        </section>
    )
}

export default Nft;