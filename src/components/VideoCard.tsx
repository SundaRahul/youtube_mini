export default function VideoCard() {
    return (
        <div className="p-5 ">
            <img className="rounded-lg w-96 pb-2" src="/image.png" alt="" />

            <div className="grid grid-cols-12 gap-5">
                {/* The col-span-1 and col-span-11 should be direct children of the grid */}
                <div className="col-span-1">
                    <img
                        className="w-20 h-15 rounded-full"
                        src="/logo.jpg"
                        alt=""
                    />
                </div>
                <div className="col-span-11 pl-1">
                    <div>MitronPoliton | A TVF Weekly Show | EP2</div>
                    <div className="text-gray-600 text-base">
                        TVF Series
                    </div>
                    <div className="text-gray-600 text-base">
                        40M views | 8 Hour ago
                    </div>
                </div>
            </div>
        </div>
    );
}
