

const News = () => {
    return (
        <div className="mt-2">
            <div>
                <h3 className="text-2xl  text-green-700 font-semibold my-2 text-center">
                    Latest News
                </h3>
            </div>
            <div>
                <h3 className="text-xl
                my-2 italic text-center
                  text-green-700 font-semibold mt-2">
                   Highlights
                </h3>

                <div className="bg-slate-200 
                rounded-lg ga flex-shrink-0
                p-4 ">
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129049/selectors-set-to-be-in-quandary-for-afghanistan-series">
                1. Injuries push selectors into a quandary for Afghanistan series
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129048/india-vs-england-2021-odi-series-postponed">
                2. India-England ODI series postponed
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129045/markrams-magic-in-the-madness">
                3. Markrams magic in the madness
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129035/dhananjaya-de-silva-named-sri-lankas-new-test-captain">
                4. Dhananjaya de Silva named Sri Lankas new Test captain
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129034/india-vs-england-2021-odi-series-postponed">
                5. Rohit wants match referees to keep eyes and ears open while rating pitches
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129033/india-vs-england-2021-odi-series-postponed">
                6. SA20: Teams to warm up with matches against Namibia, Netherlands
                </a>
                </p>
                <p className="mb-2 ">
                <a href="https://www.cricbuzz.com/cricket-news/129032/india-vs-england-2021-odi-series-postponed">
                7. Caught-behind no longer to be checked for stumping referrals
                </a>
                </p>
                </div>
            </div>
        </div>
    );
};

export default News;