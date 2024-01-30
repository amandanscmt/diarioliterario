import Header from "../header/Header";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.background}>
        <div className={classes.searchRandom}>
          <h2>sugerir de forma aleatória</h2>
          <button type="button">me indique um livro</button>
        </div>

        <div className={classes.searchTerm}>
          <h2>sugerir baseado em gêneros e outros termos</h2>
          <input type="text" aria-label="search" placeholder="" />
          <button type="button">encontre um livro</button>
        </div>
      </div>
    </>
  );
};

export default Home;
