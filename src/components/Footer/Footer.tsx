export default function Footer() {
    return (
        <>
            <section className="map_section">
                <div className="map_container">
                    <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/d/viewer?msa=0&ll=42.70178900000002%2C23.329756999999997&mid=19SB5QRwvClzxyBhuEC4v3eZvjow&z=17"
                            width={600}
                            height={300}
                            frameBorder={0}
                            style={{ border: 0, width: "100%", height: "100%" }}
                            allowFullScreen={undefined}
                        />
                    </div>
                </div>
            </section>

            <footer className="container-fluid footer_section">
                <p>
                    Copyright © 2024 All Rights Reserved. Design by <a href="https://github.com/vadiimXD" target='_blank'>vadiim.slv</a>
                </p>
            </footer>
        </>
    )
}