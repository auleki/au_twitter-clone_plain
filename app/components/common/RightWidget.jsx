import Trend from "./RightWidget/Trend";
import WidgetSearchbar from "./WidgetSearchBar";

const RightWidget = () => {
    return (
        <section className="flex flex-col p-2 mr-56 w-2/6">
            <WidgetSearchbar />
            <div className="bg-gray-200 p-2 pb-4 px-4 mt-4 flex flex-col gap-2 rounded-lg">
                <h4 className="font-bold text-lg">Subscribe to Premium</h4>
                <p className="text-sm font-semibold">
                    Subscribe to unlock new
                    features and if eligible,
                    receive a share of ads revenue.
                </p>
                <div>
                    <button className="rounded-full bg-black-400 text-white-400 px-4 font-semibold py-2 text-sm">Subscribe</button>
                </div>
            </div>

            <section className="bg-gray-200 p-2 px-4 mt-4 rounded-lg">
                <h3 className="font-bold text-lg mb-8">Trends for you</h3>
                {/* Trends */}
                <div className="flex flex-col gap-4">
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                </div>

            </section>

            <section>
                <h3>Who to follow</h3>
            </section>

            <div>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Accessibility</li>
                    <li>Ads info</li>
                    <li>More...</li>
                    <li>2023 X Camp.</li>
                </ul>
            </div>
        </section>
    );
};

export default RightWidget;
