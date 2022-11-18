import Carousel from '../../partials/Carousel';
import '../Pages.css';



const Home = () =>
{
  return (
    <>
      <main>
        <section>
          <h1 className="title d-flex">Découvrez une île extraordinaire !</h1>
        </section>
        <section className="d-flex align-center">
          <figure>
            <blockquote className="citation" cite="https://fr.wikipedia.org/wiki/Nouvelle-Cal%C3%A9donie">
              <p>La Nouvelle-Calédonie est un ensemble d'îles et d'archipels d'Océanie, situés en mer de Corail et dans l'océan Pacifique sud. Cet ensemble fait partie de la Mélanésie et de l'Océanie lointaine. Sa superficie terrestre totale est de 18 575,5 kilomètres carrés. L'île principale est la Grande Terre, longue de 400 kilomètres et mesurant 64 km dans sa plus grande largeur.
                La Nouvelle-Calédonie relève de la souveraineté française depuis 1853. Ainsi, ce territoire est administré sous le statut de collectivité sui generis française.
                <br></br><br></br>Son chef-lieu ou capitale est Nouméa, la principale commune et la seule grande ville de l'archipel. Elle compte 94 285 habitants au recensement de 20193. Le Grand Nouméa (avec les communes voisines de Païta, Dumbéa et Mont-Dore) compte 182 341 habitants, soit les deux tiers des 271 407 personnes peuplant l'archipel.
                <br></br><br></br>Elle dispose de signes identitaires qui lui sont propres, aux côtés des emblèmes nationaux français (un hymne, une devise et une graphie spécifique des billets de banque). La question de son drapeau et de son nom font en revanche débat, les indépendantistes utilisant généralement l'appellation de « Kanaky » (en référence au peuple kanak) et disposant de leur propre drapeau depuis 1984, deux options rejetées généralement par les non-indépendantistes qui peuvent défendre pour leur part des positions assez diverses (statu quo, association des emblèmes indépendantistes à ceux de la France, ou invention de nouveaux symboles communs à l'ensemble des communautés vivant dans l'archipel).
              </p>
            </blockquote>
            <figcaption className="citation-source">—Wikipedia, <cite>Nouvelle-Calédonie</cite></figcaption>
          </figure>
        </section>
        <section className="d-flex mt">
          <div className="bg-image-book align-center w-100 h-50 home-cta">
            <h3 className="title">Réservez tout de suite votre <br></br><span className="home-cta-span">billet d'avion !</span></h3>
            <a href="https://www.aircalin.nc/fr" className="btn btn-aircalin" rel="nofollow noreferrer" target="_blank">Je réserve !</a>
          </div>
        </section>
        <section className="container p-relative">
          <Carousel />
        </section>
      </main>
    </>
  )
};

export default Home;