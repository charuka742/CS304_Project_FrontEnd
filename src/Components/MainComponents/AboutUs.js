import React from "react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="justify-center m-4">
        <div>
          <h1 className="text-5xl text-center font-bold mb-6">About Us</h1>
        </div>
        <div>
          <p className="mb-4 px-6">
            Welcome to our cinema seat reservation system! We are a team of
            dedicated professionals who are passionate about bringing the joy of
            cinema to as many people as possible. Our platform is designed to
            make it easy for moviegoers to reserve their seats in advance and
            enjoy the movies they love without any hassle.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-10 py-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <TbTargetArrow className="inline-block text-2xl mr-2" />
            Our Mission
          </h2>
          <p className="mb-4">
            At ZEROZINEMA, our mission is to provide an easy, efficient, and
            enjoyable movie-going experience for everyone. We believe that
            cinema is one of the most powerful forms of entertainment and can
            bring people together in ways that few other things can. We want to
            make it easy for people to experience this magic, no matter where
            they are or what their schedule is like.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <MdOutlineFeaturedPlayList className="inline-block text-2xl mr-2" />
            Our Features
          </h2>
          <p className="mb-4">
            Our cinema seat reservation system offers a wide range of features
            that make it easy for moviegoers to reserve their seats in advance.
            These include:
          </p>
          <ul className="list-disc list-inside">
            <li className="m-4">
                A user-friendly interface that makes it easy to browse movies,
                select seats, and purchase tickets.
            </li>
            <li className="m-4">
                Real-time seat availability updates so you can be sure you're
                getting the best seats available.
            </li>
            <li className="m-4">
                A secure payment system that ensures your personal and financial
                information is always protected.
            </li>
            <li className="m-4">
                A mobile-friendly interface that makes it easy to book your
                seats on the go.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-10 py-6">

        <div className="bg-white rounded-lg p-6">
          <p className="mb-4">
            Our mobile-friendly interface makes it easy to book your seats on
            the go, so you can enjoy your favorite movies no matter where you
            are. Whether you're planning a date night or a family outing, our
            cinema seat reservation system is the perfect choice for anyone
            looking for an easy, efficient, and enjoyable movie-going
            experience.
          </p>
        </div>

        <div className="bg-white rounded-lg p-3 m-10">
          <p className="m-4">
            Thank you for choosing ZEROZINEMA. We look forward to helping you
            reserve your seats and enjoy the magic of cinema!
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
