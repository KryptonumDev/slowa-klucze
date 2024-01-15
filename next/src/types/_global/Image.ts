export interface Image {
  asset: {
    url: string;
    altText: string;
    metadata: {
      lqip: string;
      dimensions: {
        aspectRatio: number;
        height: number;
        width: number;
      };
    };
  };
}