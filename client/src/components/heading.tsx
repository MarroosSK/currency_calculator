import { Calculator } from "lucide-react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Calculator className="text-white" size={25} />
      <h1
        className="text-left text-white text-3xl font-bold tracking-wide"
        data-testid="calc-heading"
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
