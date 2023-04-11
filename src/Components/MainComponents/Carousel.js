import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './carousel.css'; // import your own custom styles



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  innerHeight:2,
  autoplaySpeed: 2000,
  accessibility: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};



// const options = {
//   method: 'GET',
//   url: 'https://mdblist.p.rapidapi.com/',
//   params: {s: 'jaws'},
//   headers: {
//     'X-RapidAPI-Key': '81cfebca0emsh6fca909cf9aec5fp10064ejsn6e30848c036d',
//     'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


const items = [
  {
    id: 1,
    title: 'Item 1',
    image: 'Photo by Stacey Koenitz  R from Pexels: https://www.pexels.com/photo/rippling-body-of-water-2692988/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://via.placeholder.com/300',
    description: 'Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://via.placeholder.com/300',
    description: 'Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.',
  },
  {
    id: 1,
    title: 'Item 1',
    image: 'https://via.placeholder.com/300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://via.placeholder.com/300',
    description: 'Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://via.placeholder.com/300',
    description: 'Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.',
  },
  {
    id: 1,
    title: 'Item 1',
    image: 'https://via.placeholder.com/300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://via.placeholder.com/300',
    description: 'Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://via.placeholder.com/300',
    description: 'Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.',
  }
  // add more items as needed
];

const Carousel = () => {
  return (
    <div className="h-full">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;