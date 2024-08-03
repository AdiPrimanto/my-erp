import Navbar from "../navbar/Navbar";
import Invoice from "../../assets/icons/invoice.svg";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
          <motion.div className="p-10 md:p-24" variants={itemVariants}>
            <h1 className="text-black font-bold text-4xl mb-4">
              Kelola Usahamu
            </h1>
            <h2 className="text-[#6c63ff] font-bold text-6xl mb-8">ERPInova</h2>
            <p className="text-gray-500 mb-4">
              ERPInova adalah aplikasi manajemen usaha yang membantu kamu dalam
              mengelola keuangan, persediaan, penjualan, dan pembelian. ERPInova
              memiliki manfaat yaitu:
            </p>
            <ul>
              {[
                "Memudahkan analisis data keuangan",
                "Meminimalisir resiko kesalahan pencatatan",
                "Memudahkan pelaku UMKM dalam melakukan pembukuan",
                "Membantu penyusunan laporan keuangan secara mudah, cepat, dan andal",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="relative flex items-center gap-2 mb-2"
                  variants={itemVariants}
                >
                  <FaCircleCheck className="absolute top-1 text-[#6c63ff]" />
                  <span className="ml-6">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-6 hidden lg:flex items-center justify-center p-4 md:p-0">
          <motion.img
            src={Invoice}
            alt="invoice"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
