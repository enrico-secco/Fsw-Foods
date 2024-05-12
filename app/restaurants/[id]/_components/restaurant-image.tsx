"use client";
//Client component devido ao uso do Router! O próprio Next acusa o erro e sugere a mudança para client component.

import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "imageUrl" | "name">;
}

const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[250px] w-full">
      <Image
        src={restaurant?.imageUrl}
        alt={restaurant?.name}
        fill
        className="object-cover"
      />

      <Button
        size="icon"
        className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        size="icon"
        className="absolute right-4 top-4 rounded-full bg-gray-700"
      >
        <HeartIcon className="fill-white" size={18} />
      </Button>
    </div>
  );
};

export default RestaurantImage;
