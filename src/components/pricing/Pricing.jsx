import Basic from "../../assets/icons/basic.png";
import Business from "../../assets/icons/business.png";
import Entrepreneur from "../../assets/icons/enterpreneur.png";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Pricing = () => {
  const items = [
    {
      type: "Basic",
      price: "Rp. 500.000",
      img: Basic,
      benefits: [
        {
          description: "Mencatat barang masuk",
        },
        {
          description: "Mencatat barang keluar",
        },
        {
          description: "Mencatat hasil keuntungan",
        },
      ],
    },
    {
      type: "Business",
      price: "Rp. 1.000.000",
      img: Business,
      benefits: [
        {
          description: "Mencatat barang masuk dan keluar",
        },
        {
          description: "Mencatat Keuntungan",
        },
        {
          description: "Dapat menganalisa hasil penjualan dengan CHART",
        },
        {
          description: "Support 7x24 Jam",
        },
      ],
    },
    {
      type: "Entrepreneur",
      price: "Rp. 2.000.000",
      img: Entrepreneur,
      benefits: [
        {
          description: "Mencatat barang masuk dan keluar",
        },
        {
          description: "Mencatat Keuntungan",
        },
        {
          description: "Dapat menganalisa hasil penjualan dengan CHART",
        },
        {
          description: "Support 7x24 Jam",
        },
        {
          description: "Export data ke Excel",
        },
        {
          description: "AI Prediksi penghasilan",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <motion.div
        id="pricing"
        className="grid grid-cols-12 gap-6 px-10 md:px-24 pb-24 pt-14 md:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="col-span-12 lg:col-span-4"
            variants={itemVariants}
          >
            <div
              className={`p-10 rounded-xl shadow-xl ${
                index === 1
                  ? "border-4 border-[#ce394f]"
                  : "border-2 border-[#6c63ff]"
              }`}
            >
              <h1 className="text-black text-center font-bold text-4xl break-words mb-3">
                {item.type}
              </h1>
              <div className="flex justify-center">
                <img
                  src={item.img}
                  className={index === 1 ? "w-20" : "w-14"}
                  alt="{item.img}"
                />
              </div>
              <h3
                className={` text-center font-bold mt-3 ${
                  index === 1
                    ? "text-4xl text-[#ce394f]"
                    : "text-2xl text-cyan-600"
                }`}
              >
                {item.price}
              </h3>
              <ul className="mt-4">
                {item.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="relative flex items-center gap-2 text-black"
                  >
                    <BsBookmarkCheckFill className="absolute top-1 text-[#0891B2]" />
                    <span className="ml-6">{benefit.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
