import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/42/12/ba/nora-beach-resort-and.jpg"
            alt=""
          />
        </div>
        {/* "https://picsum.photos/id/18/200/300 */}

        <div>
          <img
            className="w-full h-full object-cover"
            src='https://picsum.photos/id/18/200/300'
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEH6NiUSBa1u_7ssJlVlMomAWYsdZqtc1hRg&usqp=CAU "
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://pix10.agoda.net/hotelImages/484/48408/48408_15081016580033984762.jpg?ca=5&ce=1&s=414x232&isSkia=true"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
