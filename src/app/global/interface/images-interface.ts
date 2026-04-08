export interface ImagesInterface {
  status: string;
  data: {
    defaultAlpaca: Images[];
  };
}
export interface Images {
  id?: number;
  img: string;
}
