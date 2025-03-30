import * as React from "react";

type SlideProps = {
    image: string;
    paragraphs: string[];
}


const Slide: React.FC<SlideProps> = ({ paragraphs, image }) => {
    return (
        <div className="h-screen flex flex-row">
            <div className="">
                <img src={`${image}`} alt={image} className="h-full w-full object-cover" />
            </div>
            <div className="max-w-2/3">
                {paragraphs.map((text) => (
                <p className="font-serif text-xl text-gray-700 p-4 relative top-12 pr-10 ml-12 w-[52ch]">
                    {text}
                </p>
                ))}
            </div>
    </div>
    );
}
export default Slide;