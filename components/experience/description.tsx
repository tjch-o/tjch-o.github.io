interface DescriptionProps {
    points: string[];
}

const Description = ({ points }: DescriptionProps) => {
    return (
        <div className="description-container">
            <ul className="description-list list-square pl-6 font-poppins">
                {points.map((point, index) => (
                    <li key={index} className="description-item">
                        <p className="text-tokyo-night"> {point} </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Description;
