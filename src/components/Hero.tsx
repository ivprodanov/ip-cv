import React from "react";
import CursorImage from "../images/cursor-image.png";
import Trees from "../images/trees.jpg";
import PersonOne from "../images/person-one.jpg";
import PersonTwo from "../images/person-two.jpg";
import PersonThree from "../images/person-three.jpg";
import Typed from 'react-typed';
import { VerticalTimeLine } from "./VerticalTimeLine";

export const Hero = () => {
  return (
    <div>
      <div className="flex space-x-5 bg-gradient-to-l from-sky-700">
        <div className="columns-2 flex gap-8 place-content-around my-24 h-full">
          <div className="flex flex-col w-1/3">
            <div className="text-5xl text-left font-bold text-white mb-8">
              Here's why you should hire Ivan
            </div>
            <div className="text-2xl text-left text-white">
              He's a hardworking, flexible and reliable guy, who's got plenty of experience in <br />
            </div>
              <Typed
                strings={[
                'ReactJS',
                'NodeJS',
                'Express',
                'MongoDB',
                'writing his own CSS']}
                typeSpeed={75}
                loop
                className="font-bold text-4xl text-white text-left"
                />
          </div>
          <img
            src={CursorImage}
            className="w-1/5 -rotate-12"
            alt="image-cursor"
          />
        </div>
      </div>
      <div className="h-36 bg-gradient-to-b from-black to-sky-900">
        <div className="text-5xl font-bold text-white pt-10 ">Work Experience and Education.</div>
      </div>
      <div className="flex bg-gradient-to-b to-sky-200 from-sky-900 columns-3 gap-4 h-auto pt-24 px-20 justify-around">
        <VerticalTimeLine/>
      </div>
      <div className="h-36 flex items-center justify-center bg-fixed bg-center bg-cover custom-img">
        <div className="text-5xl font-bold text-white p-10">some trees.</div>
      </div>
      <div className="bg-gradient-to-r from-sky-700 h-auto pt-24 px-20 justify-around p-20">
        <div className="section-text">

        <div className="text-4xl font-bold text-white -mt-14">
          Here's what very real people say about Ivan
        </div>
        </div>
        <div className="section flex my-20 space-x-6">
          <div className="column flex flex-col bg-gray-900 rounded-lg p-8">
            <img
              src={PersonOne}
              alt="Ally"
              className="w-20 rounded-full center -mt-16 self-center"
            />
            <div className="text-2xl font-bold text-white mb-4">Ally Firstpersons</div>
            <div className="text-md text-left text-white italic">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              ducimus ea? Distinctio commodi quas dignissimos itaque doloremque
              saepe et doloribus ea quaerat, aliquam, sequi veniam maiores, fuga
              excepturi quisquam!"
            </div>
          </div>
          <div className="column flex flex-col bg-gray-900 rounded-lg p-8">
          <img
              src={PersonTwo}
              alt="Peter"
              className="w-20 rounded-full center -mt-16 self-center"
            />
            <div className="text-2xl font-bold text-white mb-4">Peter Humanson</div>
            <div className="text-md text-white italic">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              ducimus ea? Distinctio commodi quas dignissimos itaque doloremque
              saepe et doloribus ea quaerat, aliquam, sequi veniam maiores, fuga
              excepturi quisquam!""
            </div>
          </div>
          <div className="column flex flex-col bg-gray-900 rounded-lg p-8">
          <img
              src={PersonThree}
              alt="Roger"
              className="w-20 rounded-full center -mt-16 self-center"
            />
            <div className="text-2xl font-bold text-white mb-4">Roger Realton</div>
            <div className="text-md text-right text-white italic">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              ducimus ea? Distinctio commodi quas dignissimos itaque doloremque
              saepe et doloribus ea quaerat, aliquam, sequi veniam maiores, fuga
              excepturi quisquam!""
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
