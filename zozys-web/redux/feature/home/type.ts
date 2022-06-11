export interface IInitialState {
  items: Array<IItems>;
  viewItem: IViewItem;
}

export interface IItems {
  filter: "type" | "dimension" | "name";
  items: Array<IViewItem>;
}

export interface IViewItem {
  image: string;
  name: string;
  type: string;
  dimension: string;
  price: number;
  stock: number;
  description: string;
}

export const init: IInitialState = {
  viewItem: {
    image: "/header2.jpg",
    name: "odum",
    type: "pole",
    price: 35,
    stock: 10,
    dimension: "20x20",
    description:
      "Ullamco cillum ex non et officia Lorem nisi eiusmod dolor id aliquip duis officia eu. Ipsum sint nostrud in esse eiusmod magna adipisicing qui irure. Laborum eiusmod irure aute in magna deserunt non nulla magna. Id laboris laboris qui tempor elit tempor aute quis ex id excepteur nulla.",
  },
  items: [
    {
      filter: "type",
      items: [
        {
          image: "/header2.jpg",
          name: "odum",
          type: "pole",
          price: 35,
          stock: 10,
          dimension: "20x20",
          description:
            "Ullamco cillum ex non et officia Lorem nisi eiusmod dolor id aliquip duis officia eu. Ipsum sint nostrud in esse eiusmod magna adipisicing qui irure. Laborum eiusmod irure aute in magna deserunt non nulla magna. Id laboris laboris qui tempor elit tempor aute quis ex id excepteur nulla.",
        },
      ],
    },
  ],
};
