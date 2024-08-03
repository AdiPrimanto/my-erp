import Payment from "../../assets/icons/payment.svg";
import Receipt from "../../assets/icons/receipt.svg";
import Chart from "../../assets/icons/chart.svg";
import Time from "../../assets/icons/time.svg";
import Chatbot from "../../assets/icons/chatbot.svg";
import { motion } from "framer-motion";

const About = () => {
  const items = [
    {
      img: Chart,
      description: "Dapat menganalisa hasil penjualan dengan CHART",
    },
    {
      img: Receipt,
      description: "Mencatat barang masuk dan keluar",
    },
    {
      img: Chatbot,
      description: "AI Prediksi penghasilan",
    },
    {
      img: Time,
      description: "Support 7x24 Jam",
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
      <div id="about" className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-4">
          <motion.img
            src={Payment}
            alt="payment"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="p-10 md:p-24">
            <h1 className="text-black font-bold text-4xl mb-8">
              Mengapa menggunakan{" "}
              <span className="text-[#6c63ff]">ERPInova?</span>
            </h1>

            <motion.div
              className="grid grid-cols-12 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-3 p-4 border border-cyan-500 rounded-lg"
                  variants={itemVariants}
                >
                  <img src={item.img} className="w-32" alt="icon" />
                  <p className="text-sm text-center">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
