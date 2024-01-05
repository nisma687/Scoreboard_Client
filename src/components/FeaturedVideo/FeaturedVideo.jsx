

const FeaturedVideo = () => {
    return (
        <div className="mt-2 p-3">
            <div>
            <h3 className="mt-2 mb-2 text-xl font-semibold">
            umrah performing when India need him the most shows his commitment: Zaheer Khan
            </h3>
            <iframe 
                width="300" 
                height="200" 
                src="https://www.youtube.com/embed/ekL84srpAok?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
            </div>
            <div>
            <h3 className="mt-2 mb-2 text-xl font-semibold">
            India Vs South Africa Match Highlights | India Vs South Africa 1st T20 Match Highlights
            </h3>
            <iframe width="300" height="200" src="https://www.youtube.com/embed/i8GTl3bsx0o?si=khX0moChEuLrKnH2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default FeaturedVideo;