const SectionTittle = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-3">
                {title}<span className="text-[#d56e3f]">.</span>
            </h2>

            <p className="text-lg mb-8 max-w-2xl mt-3">
                {description}
            </p>
        </div>
    );
};

export default SectionTittle;