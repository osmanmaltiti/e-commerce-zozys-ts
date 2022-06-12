interface ISelect {
  name: string;
  options: Array<string>;
  onChanged?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<ISelect> = ({ name, options, onChanged }) => {
  return (
    <label className="border border-black py-1 px-2 capitalize hover:cursor-pointer">
      <select
        id={name}
        onChange={onChanged}
        className="hover:cursor-pointer focus:outline-none"
      >
        {options.map((item, index) => (
          <option key={index} className="capitalize hover:cursor-pointer">
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export const FilterOrder: Array<ISelect> = [
  {
    name: "Filter",
    options: ["Type", "Price", "Dimension"],
  },
  {
    name: "Order",
    options: ["Order"],
  },
];
