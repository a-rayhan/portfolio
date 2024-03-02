import SectionTittle from "./SectionTittle";

const Skills = () => {
    return (
        <div className="max-w-7xl mx-auto my-20 px-5">
            <div className=" py-20 bg-[#f7f7f7] px-8 rounded-3xl shadow-xl xl:flex items-center gap-10">
                <SectionTittle title={'My Stack'} description={'Here you will find information about my current skills mostly in terms of programming and technology'} />

                <div className="hidden xl:block border-e-2 border-gray-500 h-20 mx-5"></div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/html.png" alt="" className="w-16" />
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/css3.png" alt="" className="w-16" />
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/bootstrap.png" alt="" className="w-16" />
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/tailwind.png" alt="" className="w-16" />
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/js.png" alt="" className="w-16" />
                    <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/react.png" alt="" className="w-16" />
                </div>
            </div>
        </div>
    );
};

export default Skills;