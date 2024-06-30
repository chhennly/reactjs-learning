function Card(props) {
    // destructuring onject
    // const {imageURL, desc} = props
    return(
        <>
                <div className="card" style={{ height: '44rem'}}>
                    <img src={props.imageURL} className="card-img-top" alt="card image"/>
                    <div className="card-body">
                        <h3 className="text-danger">{props.price + '$'}</h3>
                        <h5>{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            {/* <p>Hello! Chhenly</p> */}
        </> 
    )
}
export default Card
