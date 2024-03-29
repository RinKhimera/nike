import { star } from "@/assets/icons"
import Image, { StaticImageData } from "next/image"

type ReviewCardProps = {
  imgURL: StaticImageData
  customerName: string
  rating: number
  feedback: string
}

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <Image
          src={star}
          alt="star"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard
