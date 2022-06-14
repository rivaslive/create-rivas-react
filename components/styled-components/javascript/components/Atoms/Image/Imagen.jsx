import { StyleImage } from './style';

/*
* src?: string;
* alt?: string;
* width?: string | number;
* height?: string | number;
* objectFit?: 'cover' | 'contain' | 'none';
*/
const Image = ({
  id,
  className,
  src,
  width,
  height,
  alt,
  objectFit = 'contain',
  ...rest
}) => {
  return (
    <StyleImage id={id} className={className}>
      <img
        alt={alt}
        src={src}
        width={width}
        loading="lazy"
        height={height}
        style={{ objectFit }}
        {...rest}
      />
    </StyleImage>
  );
};

export default Image;
