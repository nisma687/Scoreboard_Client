import Marquee from "react-fast-marquee";

const HighlightNews = () => {
    return (
        <div>
            <Marquee
                speed={130}
                gradient={false}
                pauseOnHover={true}
                repeat={1}
            className="bg-blue-100
            rounded-lg
             text-blue-800 font-semibold text-center"
            >
  The Final Match of Bangladesh Vs England Will be live Soon...
</Marquee>
        </div>
    );
};

export default HighlightNews;