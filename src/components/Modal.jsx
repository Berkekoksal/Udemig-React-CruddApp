import { IoCloseCircleSharp } from "react-icons/io5";
import Field from "./Field";
import axios from "axios";

//* editItem propu vars yani güncellenecek eleman propu doluysa modal güncelleme modunda , null ise ekleme modunda çalışmalı.
const Modal = ({ isModalOpen, close, setContacts, editItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //* formdata yöntemiyle formdaki bütün inputların datasına erişeceğiz.
    //* formData ile inputların değerlerini nesne haline getirdik.
    const formData = new FormData(e.target);
    //* entries() = diziye çevirme methodu.
    //* fromEntries() = tam tersi diziyi nesneye çevirme.
    const newContact = Object.fromEntries(formData.entries());
    //* Eğer güncellenecek eleman yoksa.
    if (!editItem) {
      /*  //* name değerine surname ekle.
    newContact.name = newContact.name + " " + newContact.surname;
    //* surname alanını kaldır.
    delete newContact.surname; */
      //* API oluşturma isteği at.
      axios
        .post("/contact", newContact)
        //* API isteği başarılı olursa.
        .then((res) => {
          //* State'i güncelle (arayüze elemanın eklenmesini sağlar).
          //* Yeni eklenenleri silmek için id'sini görmek için res.data kullanacağız.
          setContacts((prev) => [...prev, res.data]);

          //* Modal'ı kapat.
          close();
        }) //* API hatası olursa
        .catch((err) => {
          setContacts((prev) => [...prev]);
          alert("Sorry ! Process is not available.");
          console.log(err);
        });
    }
    //* Güncellenecek eleman varsa.
    else {
      //* Güncelleme isteği at.
      axios
        .put(`/contact/${editItem.id}`, newContact)
        .then((res) =>
          setContacts((prevContacts) =>
            prevContacts.map((contact) =>
              contact.id === editItem.id ? res.data : contact
            )
          )
        );
    }

    //* Modal'ı kapat.
    close();
    console.log(newContact);
  };
  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-head">
            <h1>{editItem ? "Uptade Contact" : "Add New Contact"}</h1>
            <button onClick={close}>
              <IoCloseCircleSharp />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <Field label="Name Surname" name="name" value={editItem?.name} />

            <Field
              label="Position"
              name="position"
              value={editItem?.position}
            />
            <Field label="Company" name="company" value={editItem?.company} />
            <Field label="Phone" name="phone" value={editItem?.phone} />
            <Field label="Email" name="email" value={editItem?.email} />
            <div className="buttons">
              <button type="button" onClick={close}>
                Cancel
              </button>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
export default Modal;
