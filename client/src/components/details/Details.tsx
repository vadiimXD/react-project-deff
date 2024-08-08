import "./Details.css"

export default function Details() {
    return (
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src="./images/travis.jpg" alt="example1" />
                </div>
                <div id="info-wrapper">
                    <p>
                        Brand: <span id="details-brand">Air Jordan</span>
                    </p>
                    <p>
                        Model: <span id="details-model">1 Retro High TRAVIS SCOTT</span>
                    </p>
                    <p>
                        Release date: <span id="details-release">2019</span>
                    </p>
                    <p>
                        Designer: <span id="details-designer">Travis Scott</span>
                    </p>
                    <p>
                        Value: <span id="details-value">2000</span>
                    </p>
                </div>
                <div id="action-buttons">
                    <a href="" id="edit-btn">
                        Edit
                    </a>
                    <a href="" id="delete-btn">
                        Delete
                    </a>
                </div>
            </div>
        </section>

    );
}
