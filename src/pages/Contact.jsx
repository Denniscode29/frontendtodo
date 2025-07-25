import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="relative w-full opacity-75 h-[300px]">
          <img
            src="/src/assets/Contact.jpg"
            alt="Contact usd"
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold uppercase">Contact Us</h2>
       </div>
        </div>
         <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-center">
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto w-full">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="fas fa-address-book text-orange-500"></i> Kontak Kami
        </h2>
        <div className="text-gray-700 space-y-3">
          <p><span className="font-semibold">Alamat:</span> Jalan Pemuda, Citamiang, Sukabumi</p>
          <p><span className="font-semibold">Telepon:</span> +62 812-3456-7890</p>
          <p><span className="font-semibold">Email:</span> emailkamu@email.com</p>
        </div>
      </div>
          <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i className="fas fa-share-alt text-orange-500"></i> Sosial Media
            </h2>
            <p className="text-gray-700 mb-4">Ikuti kami untuk kabar terbaru:</p>
            <div className="flex gap-4 text-2xl text-orange-500">
              <a href="#"><i className="fab fa-facebook hover:text-blue-600"></i></a>
              <a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
              <a href="#"><i className="fab fa-twitter hover:text-blue-400"></i></a>
              <a href="#"><i className="fab fa-youtube hover:text-red-500"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] mt-12">
        <iframe
          title="Lokasi Kami"
          className="w-full h-full border-0 rounded-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.839399509035!2d106.92497252525178!3d-6.911330876774717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e684831d4ab49b7%3A0x13d7ec548f6271b4!2sJl.%20Pemuda%2C%20Citamiang%2C%20Kec.%20Citamiang%2C%20Kota%20Sukabumi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1721369999999!5m2!1sid!2sid"
        ></iframe>
      </div>
      </div>
      

    </>
  );
}

export default Contact;
