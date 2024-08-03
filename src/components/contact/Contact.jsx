import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <footer>
      <div
        id="contact"
        className="grid grid-cols-12 gap-4 lg:gap-10 items-center py-10 bg-cyan-500 px-10 md:px-24"
      >
        <div className="col-span-12 lg:col-span-6">
          <h1 className="text-white text-lg font-semibold">
            Sistem Informasi Debit dan Kredit
          </h1>
          <h3 className="text-white">PT. Altech Omega Andalan</h3>
          <p className="text-white">
            Jl. Kamboja No.76 4 7 4, RT.4/RW.7, Kota Bambu Utara, Kec. Palmerah,
            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11420
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-4">
            <div className="flex items-center gap-2 text-white font-medium">
              <FaInstagram />
              ERPInova
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <FaWhatsapp />
              021-12345678
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <MdOutlineMailOutline />
              erp.aja@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 p-10 md:px-24 py-4">
        <span className="text-white text-xs">
          @ 2024 ERPInova. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Contact;