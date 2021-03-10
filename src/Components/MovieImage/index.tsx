interface MovieImageProps {
  name: string;
  path: string;
  size: string;
  pathFallback?: string;
}

const IMAGE_PATH = 'https://www.themoviedb.org/t/p';

export function movieImageSrc(path: string, size: string, pathFallback: string = '') {
  const basePath = `${IMAGE_PATH}/${size}`;
  return path ? `${basePath}${path}` : `${basePath}${pathFallback}`;
}

export function MovieImage({
  name,
  path,
  size,
  pathFallback
} : MovieImageProps) {

  function buildSrc(){
    return movieImageSrc(path, size, pathFallback);
  }

  return (
    <img loading="lazy" src={buildSrc()} alt={name}/>
  );
}