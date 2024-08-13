export default function ProfileCard(props: any) {
    console.log(props)
    return (
        <div className="shoe">
            <img src={props?.shoe?.imageUrl} alt="Shoe 1" />
            <div className="shoe-info">
                <h3>{props?.shoe?.model}</h3>
                <p>{props?.shoe?.brand}</p>
            </div>
        </div>
    );
}
