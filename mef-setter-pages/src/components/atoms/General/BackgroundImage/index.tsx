import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <Image
      data-cy={'background-image'}
      alt="Uhuu Image"
      src={'/assets/fundoUhuu.png'}
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        objectPosition: 'left bottom',
      }}
      priority
      width={1920}
      height={1080}
    />
  );
}
