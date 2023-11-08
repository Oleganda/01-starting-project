export default function CoreConcept(props) {
    return (
        <li>
            <h2>{props.title} </h2>
            <img src={props.image} alt="" />
            <h4>{props.description}</h4>
        </li>
    )

}