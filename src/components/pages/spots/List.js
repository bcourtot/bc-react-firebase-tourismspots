

const List = () =>
{
  return (
    <>
      <main>
        <div className="container">
          <h1 className="title">Les meilleurs spots du Caillou !</h1>
          <ul>
            <li>
              <div className="card d-flex">
                <img alt="" src="./img/placeholder.jpg" width="256" />
                <div>
                  <h4>Catégorie du spot</h4>
                  <h3>Nom du spot</h3>
                  <p>Description du spot</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default List;