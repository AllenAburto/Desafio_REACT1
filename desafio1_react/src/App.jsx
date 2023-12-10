import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./Mycards";
import Titulo from "./Header";
import Footer from "./Footer"

function App() {
  return (
    <>
      <div className="titulo">
        <Titulo
          className="container w-100 text-center p-5"
          title="Adopta una Mascota"
        />
      </div>
      <div className="cards">
        <MyCard
          image="https://media.istockphoto.com/id/1357899346/es/foto/perrito-sobre-un-fondo-borroso.jpg?s=612x612&w=0&k=20&c=TeKt9F9n560vOWPUQrumGdVppF27GijkfKqUa_cL_DQ="
          title="Angus"
          text="Se da en adopción hermoso perrito de 3 meses, con todas sus vacunas al día"
          colorButton="success"
          textButton="Adoptar"
        />
        <MyCard
          image="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Dogs"
          text="Se da en adopción hermoso perrito de 3 meses, con todas sus vacunas al día"
          colorButton="info"
          textButton="Adoptar"
        />
        <MyCard
          image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="KAN"
          text="Se da en adopción hermoso perrito de 8 meses, con todas sus vacunas al día, es muy aseado y acostumbrado a vivir en Departamentos"
          colorButton="primary"
          textButton="Adoptar"
        />
        <MyCard
          image="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Kayla"
          text="Se da en adopción hermoso perrito de 3 meses, con todas sus vacunas al día"
          colorButton="warning"
          textButton="Adoptar"
        />
        <MyCard
          image="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Sleeping"
          text="Se da en adopción hermoso Gatitos de 5 meses de edad, es muy regalon, muy aseado y tiene todas sus vacunas al día"
          colorButton="secondary"
          textButton="Adoptar"
        />
        <MyCard
          image="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Larce"
          text="Se da en adopción hermoso Gatito de 6 meses, con todas sus vacunas al día y muy jugueton, adora estar con niños"
          colorButton="danger"
          textButton="Adoptar"
        />
      </div>
      <div className="footer">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
