import React, { FC } from 'react';

interface Props {
  imageSource: string;
  altText: string;
}

const MyImage: FC<Props> = ({ imageSource, altText }) => {
  return <img src={imageSource} alt={altText} />;
};

export default MyImage;
