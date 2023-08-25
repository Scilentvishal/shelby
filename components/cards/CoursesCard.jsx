import Image from 'next/image';
import Link from 'next/link';

const CoursesCard = ({ img, title, desc, duration }) => {
  return (
    <div className="p-3 lg:w-1/3  sm:w-1/2 rounded-sm w-full">
      <div className="flex flex-col rounded bg-gray-950 shadow-[0px_0px_5px_0px_#808080]">
        <div className="img overflow-hidden relative bg-white">
          <Image
            width={300}
            height={300}
            className="w-full hover:scale-125 transition-all -bottom-3 object-contain object-center"
            src={`/pictures/${img}`}
            alt="blog"
          />
        </div>
        <div className="body px-2 py-3 text-white">
          <h3 className="title-font text-xl font-semibold my-3 text-[#DAA520]">
            {title}
          </h3>
          <p className="leading-relaxed text-[#94792f]">
            <span className="text-[#DAA520]">Duration:</span> {duration}
          </p>
          <button className="font-mono my-4 bg-transparent hover:bg-[#DAA520] rounded-ss-xl rounded-ee-xl text-[#DAA520] border border-[#DAA520] font-semibold hover:text-white py-2 px-6">
            <Link href="/contact" className="text-lg">
              Know More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
