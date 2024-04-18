import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

interface PictureProps {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface GalleryPictureProps {
  pictures: PictureProps[];
  showTitles?: boolean;
  showDeleteIcon?: boolean;
}

export default function GalleryPicture({
  pictures,
  showTitles = true,
  showDeleteIcon = false,
}: GalleryPictureProps) {
  return (
    <>
      {pictures.map((picture) => (
        <figure key={picture.id} className="relative flex flex-col gap-2">
          {/* Delete Icon is displayed only in modal */}
          {showDeleteIcon && (
            <button className="absolute right-1.5 top-1.5 rounded-md bg-textDark p-1 duration-300 ease-in-out hover:bg-deleteIcon hover:transition-all">
              <FaTrashAlt className="h-4 w-4 text-placeholder" />
            </button>
          )}
          <Image
            src={picture.src}
            alt={picture.title}
            width={610}
            height={813}
            draggable={false}
          />
          {/* Gallery is also showed in modal wich dont need titles */}
          {showTitles && (
            <figcaption className="text-sm">{picture.title}</figcaption>
          )}
        </figure>
      ))}
    </>
  );
}
