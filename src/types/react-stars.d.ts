declare module "react-rating-stars-component" {
  import * as React from 'react';

  interface ReactStarsProp {
    size?: number;
  }

  export class ReactStars extends React.Component<ReactStarsProp, any> {}

}