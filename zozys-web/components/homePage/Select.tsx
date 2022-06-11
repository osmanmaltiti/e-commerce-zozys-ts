interface ISelect {
  name: string;
  options: Array<string>;
}

export const Select: React.FC<ISelect> = ({ name, options }) => {
  return (
    <label className="border border-black py-1 px-2">
      <select id={name}>
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </label>
  );
};

export const FilterOrder: Array<ISelect> = [
  {
    name: "Filter",
    options: ["Filter"],
  },
  {
    name: "Order",
    options: ["Order"],
  },
];
