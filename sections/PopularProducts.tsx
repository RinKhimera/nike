"use client"

import PopularProductCard from "@/components/PopularProductCard"
import { products } from "@/constants"
import { motion } from "framer-motion"

const animate = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const PopularProducts = () => {
  return (
    <motion.section
      id="products"
      className="max-container max-sm:mt-12"
      variants={animate}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </motion.section>
  )
}

export default PopularProducts
