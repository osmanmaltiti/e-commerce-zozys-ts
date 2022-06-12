export interface IInitialState {
  items: Array<IItems>;
  viewItem: IViewItem;
}

export interface IItems {
  filter: "type" | "dimension" | "name";
  data: Array<IViewItem>;
}

export interface IViewItem {
  id: string;
  image: string;
  name: string;
  type: string;
  dimension: string;
  price: number;
  stock: number;
  description: string;
}

export const init: IInitialState = {
  viewItem: {} as IViewItem,
  items: [
    {
      filter: "type",
      data: [],
    },
  ],
};
