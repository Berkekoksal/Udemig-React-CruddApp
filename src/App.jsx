import { IoMenu } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Modal from "./components/Modal";

axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editItem, setEditItem] = useState(null);
  //* Bileşenin ekrana basılma anını izle.
  useEffect(() => {
    //* API'a rehber verileri için istek at.
    axios.get("/contact").then((res) => setContacts(res.data));
  }, []);
  //* HandleSubmit form gönderilince çalışıyor.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[1].value;
    console.log(text);
    //* API'a gönderilecek parametreleri belirle.
    const params = {
      q: text, //* Card kısmının Hepsi için aratır.
      //* name_like:text isminde aratılanları bulma.
    };
    //* API'dan aratılan metine uygun verileri al.
    axios.get("/contact", { params }).then((res) => setContacts(res.data));
  };
  //* Sil butonunda tıklanınca
  const handleDelete = (id) => {
    const res = confirm("Kişiyi silmek istediğinizden emin misiniz?");
    if (res) {
      //* API silme isteği at.
      axios
        .delete(`/contact/${id}`)
        //* Diziden elemanı kaldırdık.
        .then(() => {
          const updated = contacts.filter((contact) => contact.id !== id);
          //* API isteği başarılı olursa state'i güncelle.
          setContacts(updated);
        });
    }
  };
  //* Edit butonuna tıklanınca.
  const handleEdit = (contact) => {
    const res = confirm("Kişiyi düzenlemek istediğinizdem emin misiniz?");
    //* Düzenlenecek elemanı state tuttuk.
    setEditItem(contact);
    //* Modal'ı açtık.
    setIsModalOpen(true);
    if (res) {
    }
  };
  return (
    <div className="app">
      <header>
        <h1>Directory</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <button>
              <IoSearch />
            </button>
            <input type="search" placeholder="Search a Person ... " />
          </form>
          <button className="ns">
            <IoMenu />
          </button>
          <button className="ns">
            <HiMiniSquares2X2 />
          </button>
          <button onClick={() => setIsModalOpen(true)} className="add">
            <IoPersonAddSharp />
            <span>New Person</span>
          </button>
        </div>
      </header>
      <main>
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </main>
      <Modal
        editItem={editItem}
        isModalOpen={isModalOpen}
        setContacts={setContacts}
        close={() => {
          setIsModalOpen(false);
          setEditItem(null);
        }}
      />
    </div>
  );
};

export default App;
