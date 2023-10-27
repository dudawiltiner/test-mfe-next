import Image from 'next/image';

interface Data {
  title: string;
  image: string;
}

export default async function ImageStaticTest({ image, title }: Data) {
  return <Image src={image} width={200} height={300} alt={title} />;
}
