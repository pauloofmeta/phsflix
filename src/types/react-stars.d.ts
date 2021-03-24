declare module "react-rating-stars-component" {
  import * as React from 'react';

  interface ReactStarsProp {
    size?: number;
    count?: number;
    value?: number;
    char?: string;
    edit?: boolean;
    isHalf?: boolean;
    emptyIcon?: Element;
    halfIcon?: Element;
    filledIcon?: Element;
    onChange?: (newRating: number) => void;
  }

  declare class ReactStars extends React.Component<ReactStarsProp> {}
  export default ReactStars;
}